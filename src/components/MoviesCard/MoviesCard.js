import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({ card }) {
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = false;

  return (
    <div className='card'>
      <img className='card__img' src={card.image} alt={card.nameRU} />
      <div className='card__footer'>
        <h2 className='card__title'>
          {card.nameRU}
        </h2>
        <button
        className={`card__like-button ${card.liked ? 'card__button-like-active' : ''}`}
        type='button'/>
      </div>
      <span className='card__duration'>{card.duration}</span>
    </div>
  )
}
