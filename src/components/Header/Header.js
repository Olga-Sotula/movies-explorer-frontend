import React from 'react';
import { useLocation } from 'react-router-dom'

import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <nav className='header__navigator'>
        <Navigation loggedIn={loggedIn}/>
      </nav>
    </header>
  );
}

export default Header;
