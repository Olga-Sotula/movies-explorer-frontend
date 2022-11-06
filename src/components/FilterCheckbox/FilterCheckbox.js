import React from 'react';

import './FilterCheckbox.css';

const FilterCheckBox = ({ modificator, isOn, onCheck }) => {
  const buttonClassName=`filter-checkbox__button ${isOn ? 'filter-checkbox__button_active' : 'filter-checkbox__button_inactive'}`;
  return (
    <div className={`filter-checkbox ${modificator}`} >
      <button type="button" className={buttonClassName} onClick={() => onCheck()}/>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckBox;
