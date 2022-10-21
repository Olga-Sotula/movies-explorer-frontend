import React from 'react';
import { useLocation } from 'react-router-dom'

import './Header.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <nav className='header__navigator'>
        <HeaderLogo/>
        <Navigation/>
      </nav>
    </header>
  );
}

export default Header;
