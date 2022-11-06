/*import React from "react";

import './SearchForm.css';
import searchIconPath from '../../images/search-icon-input.svg';
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({isOn, onCheck, onSearch}) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ query: query, shorts });
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <img src={searchIconPath} alt='Лупа' className='search-form__icon' />
      <input className='search-form__input'
        type='text'
        required
        placeholder='Фильм'
        id='movie'
        name='movie'
      />
      <button className='search-form__submit' type='submit' />
      <div className='search-form__divider'></div>
      <FilterCheckBox modificator="filter-checkbox_type_in-form" isOn={isOn} onCheck={onCheck}/>
    </form>
  );
}

export default SearchForm;*/
