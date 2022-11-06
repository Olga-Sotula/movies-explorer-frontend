import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";
import searchIconPath from '../../images/search-icon-input.svg';
import './SearchForm.css';

const SearchForm = ( { onSearch } ) => {
  const { pathname } = useLocation();

  const [query, setQuery] = useState('');
  const [isShorts, setIsShorts] = useState(false);

  useEffect(() => {
    if (pathname === '/movies' && localStorage.getItem('filter')) {
      const { query, shorts } = JSON.parse(localStorage.getItem('filter'));
      setQuery(query);
      setIsShorts(shorts);
      onSearch({ query, shorts });
    }
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    onSearch({ query: query, isShorts });
  }

  function handleCheckShorts() {
    setIsShorts(!isShorts);
    onSearch({ query: query, shorts: !isShorts });
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-form__submit' type='submit' />
        <div className='search-form__divider'></div>
        <FilterCheckBox modificator="filter-checkbox_type_in-form" isOn={isShorts} onCheck={handleCheckShorts}/>
      </form>
      <FilterCheckBox modificator="filter-checkbox_type_in-bar" isOn={isShorts} onCheck={handleCheckShorts}/>
    </section>
  );
}

export default SearchForm;
