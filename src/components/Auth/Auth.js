import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { isValidName, isEmail, isNotEmpty, isValidLength } from '../../utils/validation';
import useFormWithValidation from '../../hooks/useForm';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Button from '../Button/Button';
import './Auth.css';

const getValidators = (type) => {
  const res = [];
  if (type === 'signup') {
    res.push(({ name }) => isValidName(name) || { name: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис.' });
    res.push(({ name }) => isValidLength(name, 2, 30) || { name: 'Имя должно быть от 2 до 30 символов' });
    res.push(({ name }) => (type === 'signin') || isNotEmpty(name) || { name: 'Обязательное поле' });
  }
  res.push(({ email }) => isEmail(email) || { email: 'email должен соответствовать шаблону электронной почты' });
  res.push(({ email }) => isNotEmpty(email) || { email: 'Обязатеьное поле' });
  res.push(({ password }) => isNotEmpty(password) || { password: 'Обязательное поле' });
  return res;
};

const defaultValues = { name: '', email: '', password: '' };
const defaultChanged = { name: false, email: false,  password: false };

const Auth = ({ type, onSubmit, serverError }) => {
  const { pathname } = useLocation();
  const validators = getValidators(type);
  const { values, handleChange, changed, errors, isValid, setIsValid, resetForm } = useFormWithValidation(
    defaultValues, defaultChanged, validators);

  useEffect(() => {
    resetForm();
  }, [pathname, resetForm]);

  const submitText = type === 'signup' ? 'Зарегистрироваться' : 'Войти';
  const titleText = type === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!';
  const questText = type === 'signup' ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?';
  const linkText = type === 'signup' ? 'Войти' : 'Регистрация';
  const linkTo = type === 'signup' ? '/signin' : 'signup';
  const isNameField = type === 'signup' ? true : false;
  const fieldsetClassName= type === 'signup' ? 'auth__fieldset' : 'auth__fieldset auth__fieldset_type_login';

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    if (type === 'signup'){
      onSubmit(values.name, values.email, values.password);
    } else {
      onSubmit(values.email, values.password);
    }
  }


  return (
    <section className='auth'>
      <form className='auth__form' name='profile' onSubmit={handleSubmit}>
        <div className='auth__logo-bar'><HeaderLogo/></div>
        <h2 className='auth__title'>{titleText}</h2>

        <fieldset className={fieldsetClassName}>
        {isNameField &&
          <>
            <label
              htmlFor='name'
              className='auth__label'>
              Имя
              <input
                type='text'
                id='name'
                name='name'
                minLength={2}
                maxLength={30}
                required
                className='auth__input'
                onChange={handleChange}
                value={values.name}
              />
              {changed.name && errors.name && <p className='auth__error'>{errors.name}</p>}
            </label>
          </>
        }
        <label
          htmlFor='email'
          className='auth__label'>
          email
          <input
            type='email'
            id='email'
            name='email'
            required
            className='auth__input'
            onChange={handleChange}
            value={values.email}
          />
          {changed.email && errors.email && <p className='auth__error'>{errors.email}</p>}
        </label>
        <label
          htmlFor='password'
          className='auth__label'>
          Пароль
          <input
            type='password'
            id='password'
            name='password'
            required
            className='auth__input'
            onChange={handleChange}
            value={values.password}
          />
          {changed.password && errors.password && <p className='auth__error'>{errors.password}</p>}
        </label>
      </fieldset>
        <button
          className='auth__submit'
          type='submit'
          disabled={!isValid}
          onSubmit={handleSubmit}>
          {submitText}
          {serverError && <p className='auth__error auth__error_server'>{serverError}</p>}
        </button>
        <p className='auth__quest'>
          {questText}
          <Link to={linkTo}>
            <Button type='button' modificator='button_type_link'>
              {linkText}
            </Button>
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Auth;
