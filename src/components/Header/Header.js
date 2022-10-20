import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

import './Header.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';

const Header = ({loggedIn, email, onLogout}) => {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <nav className="header__navigator">
        <HeaderLogo/>
        {pathname === '/' ? <NavAuth/> : <NavMenu/>}
      </nav>
    </header>
  );
}

export default Header;
