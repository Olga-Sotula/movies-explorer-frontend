import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'

import './App.css';

import ProtectedRoute from '../ProtectedRouter/ProtectedRouter';
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

  const [loggedIn, setLoggedIn] = useState(false);

  const isHeader = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? true : false;
  const isFooter = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? true : false;

  return (
    <div className="page">
      { isHeader && <Header />}
      {<Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Main}
          loggedIn={loggedIn}
        />
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
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>}
      {isFooter && <Footer/>}
    </div>
  );
}

export default App;
