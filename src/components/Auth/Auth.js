import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Button from '../Button/Button';
//import AuthForm from '../AuthForm/AuthForm';
import './Auth.css';

const Auth = ({ type }) => {
  const [formValues, setFormValues] = useState({name: '', emeil:'', password: ''});


  const submitText = type === 'signup' ? 'Зарегистрироваться' : 'Войти';
  const titleText = type === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!';
  const questText = type === 'signup' ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?';
  const linkText = type === 'signup' ? 'Войти' : 'Регистрация';
  const linkTo = type === 'signup' ? '/signin' : 'signup';
  const isNameField = type === 'signup' ? true : false;

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  }


  return (
    <section className='auth'>
      <form className='auth__form' name='profile' onSubmit={handleSubmit}>
        <HeaderLogo/>
        <h2 className='auth__title'>{titleText}</h2>

        <fieldset className='auth__fieldset'>
        {isNameField &&
          <>
            <label
              htmlFor='name'
              className='auth__label'>
              Имя
            </label>
            <input
              type='text'
              id='name'
              name='name'
              minLength={2}
              maxLength={30}
              required
              className='auth__input'
              onChange={handleChange}
              value={formValues.name}
            />
          </>
        }
        <label
          htmlFor='email'
          className='auth__label'>
          E-mail
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          className='auth__input'
          onChange={handleChange}
          value={formValues.email}
        />
        <label
          htmlFor='password'
          className='auth__label'>
          Пароль
        </label>
        <input
          type='password'
          id='password'
          name='password'
          required
          className='auth__input'
          onChange={handleChange}
          value={formValues.password}
        />
      </fieldset>
        <button className='auth__submit' type='submit' onSubmit={handleSubmit}>
          {submitText}
        </button>
        <p className='auth__quest'>
          {questText}
          <Link to={linkTo}>
            <Button modificator='button_type_link'>
              {linkText}
            </Button>
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Auth;
