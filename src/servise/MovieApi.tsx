export default class MovieApi {
  _apiBase = 'https://api.themoviedb.org/3';

  optionsGet = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
    }
  };

  async getResounse(url: string) {
    // console.log(`${this._apiBase}${url}`);
    const res = await fetch(`${this._apiBase}${url}`, this.optionsGet);
    console.log(res.status);
    // console.log(res.json());

    if (!res.ok) {
      throw new Error(`Error to get monies api ${url}`)
    }

    return res.json()
  }

  async getAllMovies(params: string, page: number) {
    const res = await this.getResounse(`/search/movie?query=${params}&page=${page}&sort_by=created_at.asc`);
    // console.log(res.results);
    return res;
  }

  async createGuestSession() {
    const res = await this.getResounse('/authentication/guest_session/new');

    return res;
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
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
      },
      body: `{"value":${rateValue}}`
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/rating?guest_session_id=${guest_id}`, options);
    return res.json();
  }

  async getRatedMoviesAccount(page: number) {
    const res = await this.getResounse(`/account/20232256/rated/movies?language=en-US&page=${page}&sort_by=created_at.asc`);
    return res;
  }

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