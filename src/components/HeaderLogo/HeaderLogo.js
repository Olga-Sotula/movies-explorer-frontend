import React from 'react'
import { Link } from 'react-router-dom';

import logoPath from '../../images/header-logo.svg';
import './HeaderLogo.css';

const HeaderLogo = () => {
  return (
    <Link className = "link" to='/'>
      <img className = "logo" src = {logoPath} alt = "Лого" / >
    </Link>
  );
}

export default HeaderLogo;
