import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'

import { MOVIES_API_URL, SHORT_MOVIE_DURATION } from "../../utils/constants";
import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRouter/ProtectedRouter';
import auth from '../../utils/auth';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Header from '../Header/Header.js';
import Main from "../Main/Main.js";
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Popup from '../Popup/Popup';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    _id: '',
  });
  const [serverError, setServerError] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');
  const [moviesFilter, setMoviesFilter] = useState({ query: '', shorts: false });
  const [savedMoviesFilter, setSavedMoviesFilter] = useState({ query: '', shorts: false });
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [status, setStatus] = useState('success'); //success, error, process
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const isHeader = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? true : false;
  const isFooter = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? true : false;

  const token = localStorage.getItem('jwt');

  //hooks
  useEffect(() => {
    setToken(token);
  }, []);

  useEffect(() => {
    setServerError('');
    setServerSuccess('');
  }, [pathname]);

  useEffect(() => {
    if (loggedIn) {
      setStatus('process');
      Promise.all([api.getUserInfo(token),api.getMovies(token), moviesApi.getMovies()])
        .then((res) => {
          const [initialUser,allSavedMovies, allMovies] = res;
          setCurrentUser(initialUser.data);
          setSavedMoviesList(allSavedMovies.data)
          const movies = allMovies.map(movie => {
            const savedMovie = allSavedMovies.data.find(elem => (elem.movieId === movie.id && elem.owner === initialUser.data._id));
            return {
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: `${MOVIES_API_URL}${movie.image.url}`,
              trailerLink: movie.trailerLink,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
              thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
              movieId: movie.id,
              _id: savedMovie ? savedMovie._id : null,
            }
          })
          setMoviesList(movies);
          if (localStorage.getItem('moviesFilter')){
            setMoviesFilter(JSON.parse(localStorage.getItem('moviesFilter')));
          }
          setStatus('success');
        })
        .catch((err) => {
          setStatus('error');
        });
    }
  }, [loggedIn]);

  //user, auth
  function clearCurrentUser() {
    setLoggedIn(false);
    setCurrentUser({
      name: '',
      email: '',
    });
    setMoviesFilter({ query: '', shorts: false });
    setSavedMoviesFilter({ query: '', shorts: false });
    localStorage.clear();
  }

  function handleRegisterSubmit (name, email, password) {
    if (name && password && email){
      setStatus('process');
      auth.sign(password, email, name, "signup").then((res) => {
        setServerError('');
        history.push('/movies');
        handleLoginSubmit (email, password);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setServerError(err);
        setStatus('error');
      });

    }
  }

  function setToken(token){
    auth.checkToken(token).then((res) => {
      localStorage.setItem('jwt', token);
      setCurrentUser({name: res.data.name, email: res.data.email});
      setLoggedIn(true);
      history.push(pathname);
    })
    .catch((err) => {
      clearCurrentUser();
      setStatus('error');
      openPopup('???????????? ??????????????????????');
    });
  }


  function handleLoginSubmit (email, password) {
    if (password && email){
      setStatus('process');
      auth.sign(password, email, "", "signin").then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
        setServerError('');
        setStatus('success');
      })
      .catch((err) => {
        setLoggedIn(false);
        setServerError(err);
        setStatus('error');
      });
    }
  }

  function handleUpdateUser(data) {
    setStatus('process');
    api.updateUserProfile(data, token)
    .then((newUser) => {
      setCurrentUser(newUser.data);
      setServerError('');
      setServerSuccess(true)
      setStatus('success');
    })
    .catch((err) => {
      setServerError(err);
      setServerSuccess(false);
      setStatus('error');
    });
  }

  function handleLogout() {
    clearCurrentUser();
    history.push('/');
  }

  //movies
  function updateMoviesFilter(filter) {
    setMoviesFilter(filter);
    localStorage.setItem('moviesFilter', JSON.stringify(filter));
  }

  function updateSavedMoviesFilter(filter) {
    setSavedMoviesFilter(filter);
  }

  function filterMovies() {
    if (moviesFilter.query) {
      return moviesList.filter(movie => {
        return movie.nameRU.toLowerCase().includes(moviesFilter.query) &&
          (
            (moviesFilter.shorts && movie.duration <= SHORT_MOVIE_DURATION) ||
            (!moviesFilter.shorts && movie.duration > SHORT_MOVIE_DURATION)
          );
      })
    }
    return []
  }

  function filterSavedMovies() {
    const savedMovies = moviesList.filter(movie => movie._id !== null);
    if (savedMoviesFilter.query) {
      return savedMovies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(savedMoviesFilter.query) &&
          (
            (savedMoviesFilter.shorts && movie.duration <= SHORT_MOVIE_DURATION) ||
            (!savedMovies.shorts && movie.duration > SHORT_MOVIE_DURATION)
          );
      })
    }
    return savedMovies;
  }

  function handleCardLike(card) {
    if (card._id === null) {
      api.addCard(card, currentUser._id, token)
        .then((newCard) => {
          setMoviesList(state => {
            const newState = state.map((movie) => (movie.movieId === newCard.data.movieId) ? newCard.data : movie);
            return newState;
          });
          setStatus('success');
          openPopup('?????????? ????????????????');
        })
        .catch((err) => {
          setStatus('error');
          openPopup('???????????? ???????????????????? ????????????');
        });
    } else {
      api.deleteCard(card._id, token)
        .then(() => {
          setMoviesList(state => {
            const newState = state.map((movie) => {
              return (movie.movieId === card.movieId) ?
                { ...movie, _id: null } :
                movie;
            })
            return newState;
          });
          setStatus('success');
          openPopup('?????????? ????????????');
        })
        .catch((err) => {
          setStatus('error');
          openPopup('???????????? ???????????????? ????????????');
        });
    }
  }

  //info popup
  function closePopup() {
    setIsPopupOpen(false);
    setStatus('');
  }

  function openPopup(message){
    setIsPopupOpen(true);
    setPopupMessage(message)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      { isHeader && <Header loggedIn={loggedIn}/>}
      {<Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          status={status}
          movies={moviesList}
          onSearch={updateMoviesFilter}
          filter={moviesFilter}
          onFilter={filterMovies}
          onCardLike={handleCardLike}
          serverInProcess={status==='process'}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          status={status}
          movies={savedMoviesList}
          onSearch={updateSavedMoviesFilter}
          filter={savedMoviesFilter}
          onFilter={filterSavedMovies}
          onCardLike={handleCardLike}
          serverInProcess={status==='process'}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          onSubmit={handleUpdateUser}
          onLogout={handleLogout}
          serverError={serverError}
          serverSuccess={serverSuccess}
          serverInProcess={status==='process'}
        />
        <Route path="/signin">
          <Login
            loggedIn={loggedIn}
            onSubmit={handleLoginSubmit}
            serverError={serverError}
            serverInProcess={status==='process'}
          />
        </Route>
        <Route path="/signup">
          <Register
            loggedIn={loggedIn}
            onSubmit={handleRegisterSubmit}
            serverError={serverError}
            serverInProcess={status==='process'}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>}
      {isFooter && <Footer/>}
      </div>
      <Popup
        isOpen={isPopupOpen}
        type={status}
        title={popupMessage}
        onClose={closePopup}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
