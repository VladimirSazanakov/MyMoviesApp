export default class MovieApi {
  _apiBase = 'https://api.themoviedb.org/3/search/movie';

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODAyOGU0ZThlMzk3MzA1YTVlOGY4Zjc3NzA3ZTYzZSIsInN1YiI6IjY0YzdkYzcyZWVjNWI1NThmMDNiZjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZUQtYugyYmsM3ZBrpygsZw10HaStCmJXuyboy2aV04'
    }
  };

  async getResounse(url: string) {
    // console.log(`${this._apiBase}${url}`);
    const res = await fetch(`${this._apiBase}${url}`, this.options);
    console.log(res.status);
    // console.log(res.json());

    if (!res.ok) {
      throw new Error(`Error to get monies api ${url}`)
    }

    return res.json()
  }

  async getAllMovies(params: string, page: number) {
    const res = await this.getResounse(`?query=${params}&page=${page}`);
    // console.log(res.results);
    return res;
  }
  /*
  fetch('https://api.themoviedb.org/3/search/movie?query=return', options)
    .then(response => response.json())
    .then(response => response.results)
    .then(result => setMovies(result))
    .catch(err => console.error(err));
*/
}