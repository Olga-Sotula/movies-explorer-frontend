import { BASE_URL } from "./constants";

class Api {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return this._handleResponse(res)
      })
  }

  updateUserProfile(profile, token) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
      })
      .then((res) => {
        return this._handleResponse(res);
      })
  }

  getMovies(token) {
    return fetch(`${this._url}/movies`, {
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return this._handleResponse(res);
      })
  }

  addCard(card, ownerId, token) {
    const body = JSON.parse(JSON.stringify(card));
    delete body._id;

    return fetch(`${this._url}/movies`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((res) => {
        return this._handleResponse(res);
      })
  }

  deleteCard(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return this._handleResponse(res);
      })
  }
}

const api = new Api(BASE_URL);

export default api;
