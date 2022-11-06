import { MOVIES_API_URL } from "./constants";

class MoviesApi {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies(token) {
    return fetch(`${this._url}`)
      .then((res) => {
        return this._handleResponse(res);
      })
  }


}

const moviesApi = new MoviesApi(MOVIES_API_URL);

export default moviesApi;
