import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'

import { MOVIES_API_URL } from "../../utils/constants";
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

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [serverError, setServerError] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');
  const [moviesFilter, setMoviesFilter] = useState({ query: '', shorts: false });
  const [savedMoviesFilter, setSavedMoviesFilter] = useState({ query: '', shorts: false });
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  const isHeader = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? true : false;
  const isFooter = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? true : false;

  const token = localStorage.getItem('jwt');

  useEffect(() => {
    setToken(token);
  }, []);

  useEffect(() => {
    setServerError('');
    setServerSuccess('');
  }, [pathname]);

  useEffect(() => {
    //#todo loader
    if (loggedIn) {
      Promise.all([api.getUserInfo(token),api.getMovies(token), moviesApi.getMovies()])
        .then((res) => {
          const [initialUser,savedMovies, movies] = res;
          setCurrentUser(initialUser.data);
          setSavedMoviesList(savedMovies.data)
          setMoviesList(movies.map(movie => {
            const savedMovie = savedMovies.data.find(elem => elem.movieId === movie.id);
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
          }))
          const filter = localStorage.getItem('moviesFilter');
          if (filter) {
            setMoviesFilter(filter);
          }
          const savedFilter = localStorage.getItem('savedMoviesFilter');
          if (savedFilter) {
            setSavedMoviesFilter(savedFilter);
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }, [loggedIn]);


  function handleRegisterSubmit (name, email, password) {
    if (name && password && email){
      auth.sign(password, email, name, "signup").then((res) => {
        setLoggedIn(true);
        setServerError('');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setServerError(err);

      });

    }
  }

  function setToken(token){
    auth.checkToken(token).then((res) => {
      localStorage.setItem('jwt', token);
      setCurrentUser({
        id: res.data._id,
        name: res.data.name,
        email: res.data.email
      });
      setLoggedIn(true);
      history.push(pathname);
    })
    .catch((err) => {
      console.log(err);
      setLoggedIn(false);
    });
  }


  function handleLoginSubmit (email, password) {
    if (password && email){
      auth.sign(password, email, "", "signin").then((res) => {
        setLoggedIn(true);
        setToken(res.token);
        setServerError('');
      })
      .catch((err) => {
        setLoggedIn(false);
        setServerError(err);
      });
    }
  }

  function handleUpdateUser(data) {
    api.updateUserProfile(data, token)
    .then((newUser) => {
      setCurrentUser(newUser.data);
      setServerError('');
      setServerSuccess(true)
    })
    .catch((err) => {
      setServerError(err);
      setServerSuccess(false);
    });
  }

  function handleLogout() {
    setLoggedIn(false);
    setCurrentUser({
      name: '',
      email: '',
    });
    localStorage.removeItem('jwt');
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
          onSearch={updateMoviesFilter}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          onSearch={updateSavedMoviesFilter}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          onSubmit={handleUpdateUser}
          onLogout={handleLogout}
          serverError={serverError}
          serverSuccess={serverSuccess}
        />
        <Route path="/signin">
          <Login
            onSubmit={handleLoginSubmit}
            serverError={serverError}
          />
        </Route>
        <Route path="/signup">
          <Register
            onSubmit={handleRegisterSubmit}
            serverError={serverError}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>}
      {isFooter && <Footer/>}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
