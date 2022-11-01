import React, { useState } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './MoviesList.css';
import { movies } from '../../utils/constants/Movies.js';
import FilterBar from '../FilterBar/FilterBar.js';

const MoviesList = ({ isSaved }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <main className='movies'>
      <FilterBar/>
      {isProcessing ?
        <Preloader/> : <MoviesCardList cards={movies} isSaved = { isSaved } />
      }
    </main>
  );
}

export default MoviesList;
