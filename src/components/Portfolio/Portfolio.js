import React from 'react';

import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li>
          <a className='portfolio__item' href='' target='_blank'>
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li>
          <a className='portfolio__item' href='' target='_blank'>
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li>
          <a className='portfolio__item' href='' target='_blank'>
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
