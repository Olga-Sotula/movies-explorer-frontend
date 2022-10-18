import React, { useState, useEffect } from 'react';
import logoPath from '../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom'

import './Header.css';
import Button from '../Button/Button';

function Header({loggedIn, email, onLogout}) {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <nav className="header__navigator">
        <Link className = "header__link-logo" to='/'>
          <img className = "header__logo" src = {logoPath} alt = "Лого" / >
        </Link>
          {<ul className="header__list">
            {loggedIn && <li className="link">{email}</li>}
            {loggedIn && <li className="link  link-trans" onClick={onLogout}>Выйти</li>}
            {!loggedIn && <li>
              <Link to="/signup">
                <Button >Регистрация</Button></Link></li>}
            {!loggedIn && <li>
              <Link to="/signin">
                <Button modificator="button_type_primary">Войти</Button></Link></li>}
    </ul>}
      </nav>
    </header>
  );
}

export default Header;
