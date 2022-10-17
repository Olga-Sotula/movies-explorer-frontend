import React, { useState, useEffect } from 'react';
import logoPath from '../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom'

import './Header.css';

function Header({loggedIn, email, onLogout}) {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <nav className="header__navigator">
        <Link to='/'>
          <img className = "header__logo" src = {logoPath} alt = "Лого" / >
        </Link>
          {<ul className="list navbar">
            {loggedIn && <li className="link">{email}</li>}
            {loggedIn && <li className="link  link-trans" onClick={onLogout}>Выйти</li>}
            {!loggedIn && <li><Link className="link link-trans" to="/signup">Регистрация</Link></li>}
            {!loggedIn && pathname === "/sign-up" && <li><Link className="link link-trans" to="/sign-in">Войти</Link></li>}
    </ul>}
      </nav>
    </header>
  );
}

export default Header;
