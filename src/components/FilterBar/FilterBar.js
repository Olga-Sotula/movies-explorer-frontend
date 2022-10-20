import React from "react";
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

import SearchForm from "../SearchForm/SearchForm";

import './FilterBar.css';

const FilterBar = () => {
  return (
    <section className='filter-bar'>
      <SearchForm/>
      <FilterCheckBox/>
    </section>
  );
}

export default FilterBar;
