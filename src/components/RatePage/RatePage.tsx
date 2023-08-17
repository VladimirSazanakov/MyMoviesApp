import { useState, useEffect } from "react";

import './RatePage.css';

import { Pagination, Space, Spin } from "antd";
import ErrorIndicator from "../ErrorIndicator";
import MovieList from "../MovieList";
import MovieApi from "../../servise/MovieApi";


export default function RatePage(props: any) {

  const [movies, setMovies] = useState([]);
  const [moviesToList, setMoviesToList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(props.reload);

  const movieApi = new MovieApi;

  function getRatedMovies() {
    movieApi.getRatedMovies(props.guest_id, currentPage)
      .then(res => {
        setMovies(res.results);
        setLoading(false);
        setError(false);
        setTotalPages(res.total_pages * 10);
      })
      .catch((error) => {
        onError(error);
      })
  }

  function movieToMovieList() {
    setMoviesToList(movies);
  }

  function onError(err: Error) {
    console.log('Error Loading', err);
    if (err) {
      setError(true);
      setLoading(false);
    }
  }

  function onChangePagination(page: number) {
    setCurrentPage(page);
    getRatedMovies();
    setLoading(true);
  }

  useEffect(() => {
    movieToMovieList();
  }, [currentPage]);

  useEffect(() => {
    movieToMovieList();
  }, [movies]);

  useEffect(() => {
    setReload(true);
    getRatedMovies();
  }, [props])

  return (
    <Space direction="vertical" align="center">
      {error ? <ErrorIndicator /> :
        loading ? <Spin tip="Loading" size='large'><div className='content' /></Spin> : <MovieList reload={reload} movies={moviesToList} windowSize={props.windowSize} onChangeRate={props.onChangeRate} />}
      <Pagination current={currentPage} onChange={onChangePagination} total={totalPages}
        showSizeChanger={false} hideOnSinglePage={true} />
    </Space>
  )
}
