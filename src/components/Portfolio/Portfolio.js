import React from 'react';

import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li>
          <a className='portfolio__item' href='https://olga-sotula.github.io/how-to-learn/index.html' target='_blank' rel="noreferrer">
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li>
          <a className='portfolio__item' href='https://olga-sotula.github.io/russian-travel/index.html' target='_blank' rel="noreferrer">
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li>
          <a className='portfolio__item' href='https://olga-sotula.github.io/mesto/' target='_blank' rel="noreferrer">
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
