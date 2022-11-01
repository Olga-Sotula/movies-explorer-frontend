import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content'>
        <p className='footer__copyright'>&copy;2022</p>
        <ul className='footer__links'>
          <li><a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a className='footer__link' href='https://github.com/olga-sotula/' target='_blank' rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  )
}
