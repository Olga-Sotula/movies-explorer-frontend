import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";
import searchIconPath from '../../images/search-icon-input.svg';
import './SearchForm.css';

const SearchForm = ( { onSearch } ) => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState({ query: '', shorts: false });

  useEffect(() => {
    if (pathname === '/movies'){
      const moviesFilter = localStorage.getItem('moviesFilter');
      if (moviesFilter) {
        const { query, shorts } = JSON.parse(localStorage.getItem('moviesFilter'));
        setFilter({ query: query || '', shorts: shorts || false});
        onSearch({ query: query, shorts: shorts });
      }
    }
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    onSearch(filter);
  }

  function handleCheckShorts() {
    onSearch({ query: filter.query, shorts: !filter.shorts });
    setFilter({ ...filter, shorts: !filter.shorts });
  }



  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSearch}>
        <img src={searchIconPath} alt='Лупа' className='search-form__icon' />
        <input className='search-form__input'
          type='text'
          required
          placeholder='Фильм'
          id='movie'
          name='movie'
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
        />
        <button className='search-form__submit' type='submit' />
        <div className='search-form__divider'></div>
        <FilterCheckBox modificator="filter-checkbox_type_in-form" isOn={filter.shorts} onCheck={handleCheckShorts}/>
      </form>
      <FilterCheckBox modificator="filter-checkbox_type_in-bar" isOn={filter.shorts} onCheck={handleCheckShorts}/>
    </section>
  );
}

export default SearchForm;
