import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';
import Button from '../Button/Button';

export default function NotFound() {
  return (
    <section className='notfound'>
      <p className='notfound__err'>404</p>
      <p className='notfound__text'>Страница не найдена</p>
      <Link to='/'>
        <Button modificator='button_type_link'>
          Назад
        </Button>
      </Link>
    </section>
  )
}
