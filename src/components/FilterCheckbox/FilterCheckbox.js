import React from 'react';

import './FilterCheckbox.css';

const FilterCheckBox = ({ modificator }) => {
  return (
    <div className={`filter-checkbox ${modificator}`}>
      <button type="button" className="filter-checkbox__button filter-checkbox__button_active"/>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckBox;
