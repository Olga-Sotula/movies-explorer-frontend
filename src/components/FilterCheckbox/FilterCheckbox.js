import React from 'react';

import './FilterCheckbox.css';

const FilterCheckBox = () => {
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <button type="button" className="filter-checkbox__button filter-checkbox__button_active"/>

    </div>
  );
}

export default FilterCheckBox;
