import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({ card, isSaved }) {

  return (
    <div className='card'>
      <img className='card__img' src={card.image} alt={card.nameRU} />
      <div className='card__footer'>
        <h2 className='card__title'>
          {card.nameRU}
        </h2>
        {isSaved ?
          <button type='button' className='card__button card__button_delete'/> :
          <button type='button' className={`card__button card__button_like ${card.liked ? 'card__button_liked' : ''}`}/>
        }
      </div>
      <span className='card__duration'>{card.duration}</span>
    </div>
  )
}
