import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content'>
        <p className='footer__copyright'>&copy;2022</p>
        <ui className='footer__links'>
          <li><a className='footer__link' href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a></li>
          <li><a className='footer__link' href='https://github.com/Olga-Sotula/' target='_blank'>Github</a></li>
        </ui>
      </div>
    </footer>
  )
}
