import React from 'react';

import { Link } from 'react-router-dom';

import './NavMenu.css';
import profileIconPath from '../../images/profile-icon.svg';
import Button from '../Button/Button.js';

const NavMenu = () => {
  return (
    <nav className='nav-menu'>
      <ul className='nav-menu__list nav-menu__list_movies'>
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
      </ul>
    </nav>
  );
}

export default NavMenu;
