import React from 'react';
import './NoResult.css';

const NoResult = ({ error }) => {
  return (
    <div className='no-result'>
      <p className='no-result__text'>
        {error ?
          `Во время запроса произошла ошибка.\n
           Возможно, проблема с соединением или сервер недоступен.\n
           Подождите немного и попробуйте ещё раз` :
          'По вашему запросу ничего не найдено'}
      </p>
    </div>
  )
}

export default NoResult;
