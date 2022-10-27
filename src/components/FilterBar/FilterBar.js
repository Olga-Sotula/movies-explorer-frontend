import React from "react";
import FilterCheckBox from "../FilterCheckbox/FilterCheckbox";

import SearchForm from "../SearchForm/SearchForm";

import './FilterBar.css';

const FilterBar = () => {
  return (
    <section className='filter-bar'>
      <SearchForm/>
      <FilterCheckBox modificator="filter-checkbox_type_in-bar"/>
    </section>
  );
}

export default FilterBar;
