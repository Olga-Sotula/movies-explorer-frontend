import React from 'react';

import { Link } from 'react-router-dom';

import './NavProfile.css';
import profileIconPath from '../../images/profile-icon.svg';
import Button from '../Button/Button.js';

const NavProfile = ({ modificator = '' }) => {
  return (
    <Link className={`nav-profile ${modificator}`} to='/profile'>
      <img src={profileIconPath} className='nav-profile__icon' alt='Иконка профиля' />
      <Button modificator="button_type_nav-menu button_type_account">
        Аккаунт
      </Button>
    </Link>
  );
}

export default NavProfile;
