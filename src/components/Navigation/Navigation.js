import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'

import './Navigation.css';
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';
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
      {pathname === '/' ? <NavAuth/> :
        <>
          <NavMenu/>
          <Burger isOpen={popupIsOpen} handleClick={handleBurgerClick}/>
          <PopupMenu isOpen={popupIsOpen} onOverlayClick={handlePopupOverlayClick} onClose={closePopup}/>
        </>
      }
    </>
  );
}

export default Navigation;
