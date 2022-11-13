import React from 'react';

import MoviesList from '../MoviesList/MoviesList';

const Movies = ( { status, movies, onSearch, filter, onFilter, onCardLike, serverInProcess } ) => {
  return (
    <MoviesList
      isSaved = {false}
      status={status}
      movies={movies}
      onSearch={onSearch}
      filter={filter}
      onFilter={onFilter}
      onCardLike={onCardLike}
      serverInProcess={serverInProcess}/>
  );
}

export default Movies;
