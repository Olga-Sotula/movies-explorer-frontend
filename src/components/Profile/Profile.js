import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { isValidName, isEmail, isNotEmpty, isValidLength, isDataChanged } from '../../utils/validation';
import useFormWithValidation from '../../hooks/useForm';
import Button from '../Button/Button';
import './Profile.css'

const getValidators = (currentValues) => {
  return (
    [
      ({ name }) => isValidName(name) || { name: 'Имя должно содержать только латиницу, кириллицу, пробел или дефис.' },
      ({ name }) => isValidLength(name, 2, 30) || { name: 'Имя должно быть от 2 до 30 символов' },
      ({ name }) => isNotEmpty(name) || { name: 'Обязательное поле' },
      ({ email }) => isEmail(email) || { email: 'email должен соответствовать шаблону электронной почты' },
      ({ email }) => isNotEmpty(email) || { email: 'Обязатеьное поле' },
      (values) => isDataChanged(values, currentValues) || { values: {} },
    ]
  )
};

const Profile = ({ onSubmit, onLogout, serverError, serverSuccess, serverInProcess }) => {
  const currentUser = useContext(CurrentUserContext);
  const validators = getValidators(currentUser);
  const defaultValues = { name: currentUser.name, email: currentUser.email };
  const defaultChanged = { name: false, email: false};

  const { values, handleChange, changed, errors, isValid, setIsValid } = useFormWithValidation(
    defaultValues, defaultChanged, validators);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onSubmit({ name: values.name, email: values.email });
    setIsValid(false);
  }



  return (
    <section className='profile'>
      <div className='profile__content'>
        <form className='profile__form' name='profile' onSubmit={handleSubmit}>
          <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
          <fieldset className='profile__fieldset'>
            <label
              className="profile__label">
              Имя
              <input
                disabled={serverInProcess}
                type='text'
                id='name'
                name='name'
                minLength={2}
                maxLength={30}
                required
                className='profile__input'
                onChange={handleChange}
                value={values.name}
              />
              {changed.name && errors.name && <p className='profile__error'>{errors.name}</p>}
            </label>
            <div className='profile__divider'></div>
            <label
              className="profile__label">
              Email
              <input
                disabled={serverInProcess}
                type='email'
                id='email'
                name='email'
                required
                className='profile__input'
                onChange={handleChange}
                value={values.email}
              />
              {changed.email && errors.email && <p className='profile__error'>{errors.email}</p>}
            </label>
          </fieldset>
          <button
            className={`profile__submit`}
            type='submit'
            onSubmit={handleSubmit}
            disabled={!isValid}
          >
            Редактировать
            {serverError && <p className='profile__server proile__server_error'>{serverError}</p>}
            {serverSuccess && <p className='profile__server profile__server_success'>Профиль обновлен</p>}
          </button>
          <Link to='/'>
            <Button type='button' modificator="button_type_alarm" onClick={() => onLogout()}>
              Выйти из аккаунта
            </Button>
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Profile;
