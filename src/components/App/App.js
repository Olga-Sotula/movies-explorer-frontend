import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'

import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRouter/ProtectedRouter';
import auth from '../../utils/auth';
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
  const [currentUser, setCurrentUser] = useState({});
  const [authError, setAuthError] = useState('');

  const isHeader = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? true : false;
  const isFooter = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? true : false;

  useEffect(() => {
    setAuthError('');
  }, [pathname]);

  function handleRegisterSubmit (name, email, password) {
    if (name && password && email){
      auth.sign(password, email, name, "signup").then((res) => {
        setLoggedIn(true);
        setAuthError('');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setAuthError(err);

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
      history.push('/');
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
        setAuthError('');
      })
      .catch((err) => {
        setLoggedIn(false);
        setAuthError(err);
      });
    }
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      { isHeader && <Header />}
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
        />
        <Route path="/signin">
          <Login
            onSubmit={handleLoginSubmit}
            serverError={authError}
          />
        </Route>
        <Route path="/signup">
          <Register
            onSubmit={handleRegisterSubmit}
            serverError={authError}
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
