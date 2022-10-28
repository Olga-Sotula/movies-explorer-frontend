import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import Button from '../Button/Button.js';
import './MoviesCardList.css';

const MoviesCardList = ({ cards, isSaved }) => {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map(card => (
          <li key={card.id}>
            <MoviesCard card={card} />
          </li>
        ))}
      </ul>
      <Button modificator="button_type_else">Ещё</Button>
    </section>
  )
}

export default MoviesCardList;
