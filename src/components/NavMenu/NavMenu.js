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
        <div className='nav-menu__profile'>
            <Link to='/profile'>
              <Button modificator="button_type_nav-menu">
                Аккаунт
              </Button>
              <img src={profileIconPath} className='nav-menu__icon' alt='Иконка профиля' />
            </Link>
        </div>
      </nav>

  );
}

export default NavMenu;
