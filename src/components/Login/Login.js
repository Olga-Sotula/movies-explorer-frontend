import React from 'react'

import Auth from '../Auth/Auth';

const Login = ({ onSubmit, serverError }) => {
  return (
    <Auth type = 'signin' onSubmit={onSubmit} serverError={serverError}/>
  )
}

export default Login;
