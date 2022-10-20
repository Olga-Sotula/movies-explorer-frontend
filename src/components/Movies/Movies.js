import React, { useState } from 'react';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { movies } from '../../utils/constants/Movies.js';
import FilterBar from '../FilterBar/FilterBar.js';
import Button from '../Button/Button.js';


const Movies = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <main className='movies'>
      <FilterBar/>
      <MoviesCardList cards={movies} />
    </main>
  );
}

export default Movies;
