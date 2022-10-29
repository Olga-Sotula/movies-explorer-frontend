import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

import Button from "../Button/Button";
import NavProfile from "../NavProfile/NavProfile";
import './PopupMenu.css'

const PopupMenu = ({isOpen, onOverlayClick, onClose}) => {

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape'){
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  return(
    <div
      className={`popup ${isOpen ? 'popup_opened': ''}`}
      onClick={onOverlayClick}>
      <nav className="popup__container">
        <ul className='popup__list'>
          <li>
            <Link to="/">
              <Button modificator="button_type_popup-menu" onClick={onClose}>
                Главная
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <Button modificator="button_type_popup-menu" onClick={onClose}>
                Фильмы
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/saved-movies">
              <Button modificator="button_type_popup-menu" onClick={onClose}>
                Сохраненные фильмы
              </Button>
             </Link>
          </li>
        </ul>
        <ul className='popup__list'>
          <li>
            <NavProfile/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PopupMenu;
