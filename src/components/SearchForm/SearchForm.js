import React from "react";

import './SearchForm.css';
import searchIconPath from '../../images/search-icon-input.svg';
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <form className='search-form'>
      <img src={searchIconPath} alt='Лупа' className='search-form__icon' />
      <input className='search-form__input'
        type='text'
        placeholder='Фильм'
        id='movie'
        name='movie'
      />
      <button className='search-form__submit' type='submit' />
      <div className='search-form__divider'></div>
      <FilterCheckBox modificator="filter-checkbox_type_in-form"/>
    </form>
  );
}

export default SearchForm;
