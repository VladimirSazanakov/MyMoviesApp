import React, { useState, useEffect } from "react";

import './RatePage.css';

import { Pagination, Space, Spin } from "antd";
import ErrorIndicator from "../ErrorIndicator";
import MovieList from "../MovieList";
import MovieApi from "../../servise/MovieApi";

export default function RatePage() {

  const cardOnPage = 20;
  const [movies, setMovies] = useState([]);
  const [moviesToList, setMoviesToList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState('test');

  const movieApi = new MovieApi;

  function getMovies(query: string) {
    movieApi.getAllMovies(query, currentPage)
      .then(res => {
        setMovies(res.results);
        setLoading(false);
        setError(false);
        console.log(res.total_pages)
        setTotalPages(res.total_pages * 10);
      })
      .catch((error) => {
        onError(error);
      })
    //console.log(movies);
  }

  function movieToMovieList() {
    // const startPosition = cardOnPage * (currentPage - 1);
    // const newMoviesArr = movies.slice(startPosition, startPosition + cardOnPage);
    // setMoviesToList(newMoviesArr);
    setMoviesToList(movies);
    //console.log('movies to list', newMoviesArr);
  }

  function onError(err: Error) {
    console.log('Error Loading', err);
    if (err)
      setError(true);
    setLoading(false);
  }

  function onChangePagination(page: number) {
    console.log('current page', page);
    setCurrentPage(page);
    getMovies(searchValue);
    setLoading(true);
  }

  useEffect(() => {
    movieToMovieList();
  }, [currentPage]);

  useEffect(() => {
    movieToMovieList();
  }, [movies]);

  useEffect(() => {
    getMovies(searchValue);
  }, [])

  return (
    <Space direction="vertical" align="center">
      {error ? <ErrorIndicator /> : null}
      {loading ? <Spin tip="Loading" size='large'><div className='content' /></Spin> : <MovieList movies={moviesToList} />}
      <Pagination current={currentPage} onChange={onChangePagination} total={totalPages}
        showSizeChanger={false} />
    </Space>
  )
}
