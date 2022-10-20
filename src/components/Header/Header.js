import React, { useState, useEffect } from 'react';
import logoPath from '../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom'

import './Header.css';
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';

const Header = ({loggedIn, email, onLogout}) => {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <nav className="header__navigator">
        <Link className = "header__link-logo" to='/'>
          <img className = "header__logo" src = {logoPath} alt = "Лого" / >
        </Link>
        {pathname === '/' ? <NavAuth/> : <NavMenu/>}
      </nav>
    </header>
  );
}

export default Header;
