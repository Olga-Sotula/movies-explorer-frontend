import React from 'react';

import MoviesList from '../MoviesList/MoviesList';

const SavedMovies = () => {
  return (
    <MoviesList isSaved = {true} />
  );
}

export default SavedMovies;
