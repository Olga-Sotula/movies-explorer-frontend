import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'

import './App.css';

import Header from '../Header/Header.js';
import Main from "../Main/Main.js";
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Footer from '../Footer/Footer';

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  const isHeader = pathname !== '/signin' && pathname !== '/signup' ? true : false;
  const isFooter = pathname !== '/signin' && pathname !== '/signup' ? true : false;

  return (
    <div className="page">
      { isHeader && <Header loggedIn={loggedIn} />}
      {<Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
      </Switch>}
      {isFooter && <Footer/>}
    </div>
  );
}

export default App;
