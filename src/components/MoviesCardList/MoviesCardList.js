import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css';

const MoviesCardList = ({ cards, isSaved, onCardLike }) => {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map(card => (
          <li key={card.id}>
            <MoviesCard card={card} isSaved={isSaved} onCardLike={onCardLike}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList;
