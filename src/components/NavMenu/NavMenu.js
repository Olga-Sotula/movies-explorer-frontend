import React from 'react';

import { Link } from 'react-router-dom';

import './NavMenu.css';
import profileIconPath from '../../images/profile-icon.svg';
import Button from '../Button/Button.js';

const NavMenu = () => {
  return (
    <ul className='nav-menu'>
      <li>
        <Link to="/movies">
          <Button modificator="button_type_nav-menu">
            Фильмы
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/saved-movies">
          <Button modificator="button_type_nav-menu">
            Сохраненные фильмы
        </Button>
        </Link>
      </li>
      <li>
        <Link to='/profile'>
          <img src={profileIconPath} className='nav-menu__icon' alt='Иконка профиля' />
        </Link>
      </li>
    </ul>
  );
}

export default NavMenu;
