import React from 'react'

import Auth from '../Auth/Auth';

const Register = ({ onSubmit, isProcessing }) => {
  return (
    <Auth type = 'signup' onSubmit={onSubmit} isProcessing={isProcessing}/>
  )
}

export default Register;
