import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'

import './Navigation.css';
import NavAuth from '../NavAuth/NavAuth.js';
import NavMenu from '../NavMenu/NavMenu.js';
import Burger from '../Burger/Burger';

const Navigation = () => {
  const { pathname } = useLocation();
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setPopupIsOpen(!popupIsOpen);
  }

  return (
    <>
      {pathname === '/' ? <NavAuth/> :
      <>
        <NavMenu/>
        <Burger isOpen={popupIsOpen} handleClick={handleBurgerClick}/></>
      }
    </>
  );
}

export default Navigation;
