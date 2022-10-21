import React from 'react';
import { useLocation } from 'react-router-dom'

import './Navigation.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <HeaderLogo/>
      {pathname === '/' ? <NavAuth/> : <NavMenu/>}
    </nav>
  );
}

export default Navigation;
