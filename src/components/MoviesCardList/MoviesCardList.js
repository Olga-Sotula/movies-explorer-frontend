import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';

import './MoviesCardList.css';

export default function MoviesCardList({ cards }) {
  return (
    <ul className='cards'>
      {cards.map(card => (
        <li key={card.id}>
          <MoviesCard card={card} />
        </li>
      ))}
    </ul>
  )
}
