import React from 'react';
import { useLocation } from 'react-router-dom'

import './Navigation.css';
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' ? <NavAuth/> : <NavMenu/>}
    </>
  );
}

export default Navigation;
