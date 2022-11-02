import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'

import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRouter/ProtectedRouter';
import auth from '../../utils/auth';
import api from '../../utils/api';
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

  const isHeader = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? true : false;
  const isFooter = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? true : false;

  const token = localStorage.getItem('jwt');

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    setServerError('');
    setServerSuccess('');
  }, [pathname]);

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
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
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
