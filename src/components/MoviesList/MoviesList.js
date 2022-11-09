import React, { useState, useEffect, useRef } from 'react';

import { INITIAL_CARDS_COUNT_1280, INITIAL_CARDS_COUNT_800, INITIAL_CARDS_COUNT_600,
  CARDS_INCREMENT_1280, CARDS_INCREMENT_800 } from '../../utils/constants';
import useWindowWidth from '../../hooks/useWindowWidth';

import Preloader from '../Preloader/Preloader';
import Button from '../Button/Button';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './MoviesList.css';
import SearchForm from '../SearchForm/SearchForm.js';
import NoResult from '../NoResult/NoResult';

const MoviesList = ({ isSaved, status, movies, onSearch, filter, onFilter, onCardLike }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [cardsCount, setCardsCount] = useState(0);
  const [cardsIncrement, setCardsIncrement] = useState(CARDS_INCREMENT_800);
  const windowWidth = useWindowWidth();
  const prevFilter = useRef();

  useEffect(() => {
    const newFilteredMovies = onFilter();
    setFilteredMovies(newFilteredMovies);

    setCardsIncrement(windowWidth >= 800 ? CARDS_INCREMENT_1280 : CARDS_INCREMENT_800);
    const initialCardsCount = windowWidth >= 800 ? INITIAL_CARDS_COUNT_1280 :
      windowWidth >= 600 ? INITIAL_CARDS_COUNT_800 : INITIAL_CARDS_COUNT_600;
    if(isSaved){
      setCardsCount(newFilteredMovies.length);
    }else if (filter !== prevFilter.current) {
      setCardsCount(Math.min(initialCardsCount, newFilteredMovies.length));
    }
    prevFilter.current = filter;
  }, [movies, filter, windowWidth]);

  function showMoreCards() {
    setCardsCount(Math.min(cardsCount + cardsIncrement, movies.length));
  }

  return (
    <main className='movies'>
      <SearchForm onSearch={onSearch}/>
      {status === 'process' ?
        <Preloader/> :
        <>
        {filteredMovies.length ?
          <MoviesCardList
            cards={filteredMovies.slice(0, cardsCount)}
            isSaved = { isSaved }
            onCardLike={onCardLike}
          /> :
          (filter.query || status === 'error') && <NoResult error={status === 'error'} />
        }
        {(!isSaved && cardsCount < filteredMovies.length) && <Button type='button' modificator="button_type_else" onClick={showMoreCards}>Ещё</Button>}
      </>

      }
    </main>
  );
}

export default MoviesList;
