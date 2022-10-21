import React from 'react';
import { useLocation } from 'react-router-dom'

import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className = {`header ${pathname === '/' ? 'header_type_main' : ''}`} >
      <Navigation/>
    </header>
  );
}

export default Header;
