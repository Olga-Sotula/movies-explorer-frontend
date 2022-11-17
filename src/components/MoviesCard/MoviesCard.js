import React, { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({ card, isSaved, onCardLike }) {
  const [liked, setLiked] = useState(card._id !== null);

  function handleLikeCard() {
    setLiked(!liked);
    onCardLike(card);
  }


  return (
    <div className='card'>
      <a className='card__link' href={card.trailerLink} target='_blank' rel='noreferrer'>
        <img className='card__img' src={card.image} alt={card.nameRU} />
      </a>
      <div className='card__footer'>
        <h2 className='card__title'>
          {card.nameRU}
        </h2>
        {isSaved ?
          <button
            type='button'
            className='card__button card__button_delete'
            onClick={handleLikeCard}/> :
          <button
            type='button'
            className={`card__button card__button_like ${liked ? 'card__button_liked' : ''}`}
            onClick={handleLikeCard}/>
        }
      </div>
      <span className='card__duration'>{card.duration}</span>
    </div>
  )
}
