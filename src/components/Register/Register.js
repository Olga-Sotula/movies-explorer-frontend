import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';

const Register = ({ loggedIn, onSubmit, serverError, serverInProcess }) => {
  if ( loggedIn ){
    return (
      <Route>
        <Redirect to='/movies' />
      </Route>
    )
  } else {
    return (
      <Auth
        loggedIn={loggedIn}
        type = 'signup'
        onSubmit={onSubmit}
        serverError={serverError}
        serverInProcess={serverInProcess} />
    )
  }
}

export default Register;
