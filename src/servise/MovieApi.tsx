export default class MovieApi {
  _apiBase = 'https://api.themoviedb.org/3';

  optionsGet = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  async getResounse(url: string) {
    try {
      const res = await fetch(`${this._apiBase}${url}&api_key=28028e4e8e397305a5e8f8f77707e63e`, this.optionsGet);
      return res.json()
    } catch (err) {
      throw new Error('Could no Internet' + err);
    }
  }

  async getAllMovies(params: string, page: number) {
    const res = await this.getResounse(`/search/movie?query=${params}&page=${page}&sort_by=created_at.asc`);
    return res;
  }

  async createGuestSession() {
    const optionsGet = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    }
    const res = await fetch(`${this._apiBase}/authentication/guest_session/new?api_key=28028e4e8e397305a5e8f8f77707e63e`, optionsGet);
    return res.json();
  }

  async getRatedMovies(guest_id: string, page: number) {
    const res = await this.getResounse(`/guest_session/${guest_id}/rated/movies?language=en-US&page=${page}&sort_by=created_at.asc`);
    return res;
  }

  async addRating(movie_id: number, guest_id: string, rateValue: number) {

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: `{"value":${rateValue}}`
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/rating?guest_session_id=${guest_id}&api_key=28028e4e8e397305a5e8f8f77707e63e`, options);

    return res.json();
  }

  async getMoviesGenres() {
    const res = await this.getResounse('/genre/movie/list?language=en');
    return res;
  }