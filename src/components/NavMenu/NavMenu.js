import React from 'react';
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom';

import './NavMenu.css';
import Button from '../Button/Button.js';

const NavMenu = () => {
  const { pathname } = useLocation();
  const buttonModificator = pathname === '/' ? "button_type_nav-movies button_type_nav-movies-main" : "button_type_nav-movies";

  return (
    <nav className='nav-menu'>
      <ul className='nav-menu__list nav-menu__list_movies'>
        <li>
          <Link to="/movies">
            <Button type='button' modificator={buttonModificator}>
              Фильмы
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/saved-movies">
            <Button type='button' modificator={buttonModificator}>
              Сохраненные фильмы
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
