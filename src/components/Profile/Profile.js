import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import './Profile.css'

const Profile = ( ) => {
  const currentUser = {name: 'Виталий'}
  const [formValues, setFormValues] = useState({name: 'Виталий', emeil:'pochta@yandex.ru'});

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
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
                type='text'
                id='name'
                name='name'
                minLength={2}
                maxLength={30}
                required
                className='profile__input'
                onChange={handleChange}
                value={formValues.name}
              />
            </label>
            <div className='profile__divider'></div>
            <label
              className="profile__label">
              Email
              <input
                type='email'
                id='email'
                name='email'
                required
                className='profile__input'
                onChange={handleChange}
                value={formValues.email}
              />
            </label>
          </fieldset>
          <button
            className={`profile__submit`}
            type='submit'
            onSubmit={handleSubmit}
          >
            Редактировать
          </button>
          <Link to='/'>
            <Button type='button' modificator="button_type_alarm">
              Выйти из аккаунта
            </Button>
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Profile;
