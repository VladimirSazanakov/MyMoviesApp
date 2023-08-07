import React, { useState, useEffect } from "react";

import MovieApi from "../../servise/MovieApi";

import './SearchPage.css';
import { Pagination, Space, Spin } from "antd";
import ErrorIndicator from "../ErrorIndicator";
import MovieList from "../MovieList";
import SearchInput from "../SearchInput";

export default function SearchPage(props: any) {

  const cardOnPage = 20;
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);
  const [moviesToList, setMoviesToList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState('');


  const movieApi = new MovieApi;

  function getMovies(query: string) {
    movieApi.getAllMovies(query, currentPage)
      .then(res => {
        setMovies(res.results);
        setLoading(false);
        setError(false);
        // console.log(res.total_pages)
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
    // console.log('Error Loading', err);
    if (err)
      setError(true);
    setLoading(false);
  }

  function onChangePagination(page: number) {
    // console.log('current page', page);
    setCurrentPage(page);
    getMovies(searchValue);
    setLoading(true);
  }

  function onChangeInput(value: string) {
    // console.log('InputValue', value);
    setSearchValue(value);
  }



  useEffect(() => {
    setCurrentPage(1);
    getMovies(searchValue);
    setLoading(true);
  }, [searchValue])


  // useEffect(() => {
  //   getMovies(searchValue);
  //   movieToMovieList();
  // }, [])

  useEffect(() => {
    movieToMovieList();
  }, [currentPage]);

  useEffect(() => {
    movieToMovieList();
  }, [movies]);



  return (
    <Space direction="vertical" align="center" style={{ width: '100%' }} size={'middle'}>
      <SearchInput onChangeInput={onChangeInput} />
      {error ? <ErrorIndicator /> : null}
      {loading ? <Spin tip="Loading" size='large'><div className='content' /></Spin> : <MovieList movies={moviesToList} windowSize={props.windowSize} onChangeRate={props.onChangeRate} />}
      <Pagination current={currentPage} onChange={onChangePagination} total={totalPages}
        showSizeChanger={false} />
    </Space>
  )
}
