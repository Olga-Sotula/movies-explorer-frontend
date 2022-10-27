import React from "react";

import './SearchForm.css'
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <form className='search-form'>
      <input className='search-form__input'
        type='text'
        placeholder='Фильм'
        id='movie'
        name='movie'
      />
      <button className='search-form__submit' type='submit' />
      <span className='search-form__divider'/>
      <FilterCheckBox modificator="filter-checkbox_type_in-form"/>
    </form>
  );
}

export default SearchForm;
