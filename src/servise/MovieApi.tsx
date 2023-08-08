export default class MovieApi {
  _apiBase = 'https://api.themoviedb.org/3';

  optionsGet = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  async getResounse(url: string) {
    // console.log(`Start ${this._apiBase}${url}`);
    try {
      const res = await fetch(`${this._apiBase}${url}&api_key=28028e4e8e397305a5e8f8f77707e63e`, this.optionsGet);
      // console.log('Res from Api', res);
      return res.json()
    } catch (err) {
      // console.log('Error From Api', err);
      throw new Error('Could no Internet' + err);
    }
  }

  async getAllMovies(params: string, page: number) {
    const res = await this.getResounse(`/search/movie?query=${params}&page=${page}&sort_by=created_at.asc`);
    // console.log(res.results);
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

  /*
  genres
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 28028e4e8e397305a5e8f8f77707e63e'
  }
};

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  */

  /*
  account rated movies
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/20232256/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  */

  /*
  Add rating
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
  },
  body: '{"value":5}'
};

fetch('https://api.themoviedb.org/3/movie/336/rating?guest_session_id=sdfsdf', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  */

  /*
  RatedMovies
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
    }
  };
  
  fetch('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  */

  /*
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
  }
};

fetch('https://api.themoviedb.org/3/authentication/guest_session/new', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  */

  /*
  fetch('https://api.themoviedb.org/3/search/movie?query=return', options)
    .then(response => response.json())
    .then(response => response.results)
    .then(result => setMovies(result))
    .catch(err => console.error(err));
*/
}