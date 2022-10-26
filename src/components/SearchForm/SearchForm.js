import React from "react";

import './SearchForm.css'

const SearchForm = () => {
  return (
    <form className='search-form'>
      <input className='search-form__input'
          type='text'
          placeholder='Фильм'
          id='movie'
          name='movie'

      />
      <button className='search-form__submit'
        type='submit'
      >
  </button>
    </form>
  );
}

export default SearchForm;
