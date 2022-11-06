import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css';

const MoviesCardList = ({ cards, isSaved }) => {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map(card => (
          <li key={card.id}>
            <MoviesCard card={card} isSaved={isSaved}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList;
