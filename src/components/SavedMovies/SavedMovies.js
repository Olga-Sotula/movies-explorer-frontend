import React from 'react';

import MoviesList from '../MoviesList/MoviesList';

const SavedMovies = ({ status, movies, onSearch, filter, onFilter, onCardLike }) => {
  return (
    <MoviesList isSaved = {true} status={status} movies={movies} onSearch={onSearch} filter={filter} onFilter={onFilter} onCardLike={onCardLike} />
  );
}

export default SavedMovies;
