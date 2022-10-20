import React from 'react';
import { Link } from 'react-router-dom'

import Button from '../Button/Button.js';
import './NavAuth.css';

const NavAuth = () => {
  return (
    <ul className="nav-auth">
      <li>
        <Link to="/signup">
          <Button>
            Регистрация
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/signin">
          <Button modificator="button_type_accent">
            Войти
          </Button>
        </Link>
      </li>
    </ul>
  );
}

export default NavAuth;
