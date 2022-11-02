import React from 'react'

import Auth from '../Auth/Auth';

const Login = ({ onSubmit, isProcessing }) => {
  return (
    <Auth type = 'signin' onSubmit={onSubmit} isProcessing={isProcessing}/>
  )
}

export default Login;
