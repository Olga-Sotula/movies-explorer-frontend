import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'

import './Navigation.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo.js'
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';
import NavProfile from '../NavProfile/NavProfile.js';
import Burger from '../Burger/Burger';
import PopupMenu from '../PopupMenu/PopupMenu';

const Navigation = () => {
  const { pathname } = useLocation();
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setPopupIsOpen(!popupIsOpen);
  }

  function handlePopupOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      setPopupIsOpen(false);
    }
  }

  function closePopup() {
    setPopupIsOpen(false);
  }

  return (
    <>
      <HeaderLogo/>
      {pathname === '/' ? <NavAuth/> :
        <>
          <NavMenu/>
          <NavProfile modificator="nav-profile_type_header"/>
          <Burger isOpen={popupIsOpen} handleClick={handleBurgerClick}/>
          <PopupMenu isOpen={popupIsOpen} onOverlayClick={handlePopupOverlayClick} onClose={closePopup}/>
        </>
      }
    </>
  );
}

export default Navigation;
