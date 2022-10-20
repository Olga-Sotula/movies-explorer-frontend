import React, { useState } from 'react';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { movies } from '../../utils/constants/Movies.js';

const Movies = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <main className='movies'>
      <MoviesCardList cards={movies} /> :
    </main>
  );
}

export default Movies;
