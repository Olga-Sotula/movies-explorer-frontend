import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import './NavProfile.css';
import profileIconPath from '../../images/profile-icon.svg';
import profileIconWhitePath from '../../images/profile-icon-white.svg';
import Button from '../Button/Button.js';

const NavProfile = ({ modificator = '' }) => {
  const { pathname } = useLocation();
  const buttonModificator = pathname === '/' ? "button_type_account-main" : "button_type_account";
  const navModificator = pathname === '/' ? `nav-profile nav-profile_type_main ${modificator}` : `nav-profile ${modificator}`;
  const iconPath = pathname === '/' ? profileIconWhitePath : profileIconPath;
  return (
    <Link className={navModificator} to='/profile'>
      <img src={iconPath} className='nav-profile__icon' alt='Иконка профиля' />
      <Button type='button' modificator={buttonModificator}>
        Аккаунт
      </Button>
    </Link>
  );
}

export default NavProfile;
