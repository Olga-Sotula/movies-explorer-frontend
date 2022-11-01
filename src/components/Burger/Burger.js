import React from 'react';
import './Burger.css';

const Burger = ({ isOpen, handleClick }) => {
  return (
    <div className={`burger ${isOpen ? 'burger_menu-open' : ''}`} onClick={() => handleClick()}>
      <span className='burger__span'></span>
      <span className='burger__span'></span>
      <span className='burger__span'></span>
    </div>
  )
}

export default Burger;


