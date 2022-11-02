import React from 'react'

import Auth from '../Auth/Auth';

const Register = ({ onSubmit, serverError }) => {
  return (
    <Auth type = 'signup' onSubmit={onSubmit} serverError={serverError} />
  )
}

export default Register;
