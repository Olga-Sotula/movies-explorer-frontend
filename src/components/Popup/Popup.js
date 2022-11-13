import React, {useEffect} from "react";
import successImg from '../../images/popup-success.svg';
import errorImg from '../../images/popup-error.svg';

import './Popup.css'
function Popup({isOpen, type, title, onClose}) {
  const src = type === 'success' ? successImg : errorImg;

  useEffect(() => {
    const interval = setInterval(() => {
      onClose();
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return(
    <div
      className={`popup ${isOpen ? 'popup_opened': ''}`}>
      <div className="popup__content">
        <img src={src} className="popup__icon" alt={type}/>
        <h2 className="popup__title">{title}</h2>
      </div>
    </div>
  );
}

export default Popup;
