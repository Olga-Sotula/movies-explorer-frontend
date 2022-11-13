import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';

const Login = ({ loggedIn, onSubmit, serverError, serverInProcess }) => {
  if ( loggedIn ){
    return (
      <Route>
        <Redirect to='/movies' />
      </Route>
    )
  } else {
    return (
      <Auth type = 'signin' onSubmit={onSubmit} serverError={serverError} serverInProcess={serverInProcess}/>
    )
  }
}

export default Login;
