import React, { useState, useEffect } from 'react'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, Space, Layout, Spin, Pagination } from 'antd';

import './App.css'

import MovieApi from './servise/MovieApi';
import MovieList from './components/MovieList';



import TextShortener from './servise/TextShortener';
import ErrorIndicator from './components/ErrorIndicator';
import HeaderTabs from './components/HeaderTabs';



function App() {
  const cardOnPage = 20;
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);
  const [moviesToList, setMoviesToList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const movieApi = new MovieApi;

  //const { Header, Footer, Sider, Content } = Layout;

  function getMovies(query: string) {
    movieApi.getAllMovies(query)
      .then(res => {
        setMovies(res.results);
        setLoading(false);
        console.log(res.total_pages)
        setTotalPages(res.total_pages * 10);
      })
      .catch((error) => {
        onError(error);
      })
    //console.log(movies);
  }

  function movieToMovieList() {
    const startPosition = cardOnPage * (currentPage - 1);
    const newMoviesArr = movies.slice(startPosition, startPosition + cardOnPage);
    setMoviesToList(newMoviesArr);
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
  }

  useEffect(() => {
    getMovies('computer');
    movieToMovieList();
  }, [])

  useEffect(() => {
    movieToMovieList();
  }, [currentPage]);

  useEffect(() => {
    movieToMovieList();
  }, [movies]);

  /*-------from movie siete-------------------------------------------
  Array(20) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
 0: Object { adult: false, backdrop_path: "/dJ52jV7HlJ9hB8kdBOnj01DllBA.jpg", id: 82520, … }
 adult: false
 backdrop_path: "/dJ52jV7HlJ9hB8kdBOnj01DllBA.jpg"
 ​
genre_ids: Array [ 18 ]
 ​
id: 82520
 ​
original_language: "en"
 ​
original_title: "Return"
 ​
overview: "Back from a tour of duty, Kelli struggles to find her place in her family and the rust-belt town she no longer recognizes."
 ​
popularity: 8.389
 ​
poster_path: "/xAuR564U2njKKcXSbfbq36rZLeA.jpg"
 ​
release_date: "2011-02-10"
 ​
title: "Return"
 ​
video: false
 ​
vote_average: 6.535
 ​
vote_count: 1512
 ​
<prototype>: Object { … }
  
//------------------------------------------------------------
*/

  //console.log(movies);

  return (
    <Layout className='wrapper'>
      <Header className='header'>
        <HeaderTabs />
      </Header>
      <Content className='content'>

        {loading ? <Spin tip="Loading" size='large'><div className='content' /></Spin> : <MovieList movies={moviesToList} />}
        {error ? <ErrorIndicator /> : null}
      </Content>
      <Footer className='footer'>
        <Pagination current={currentPage} onChange={onChangePagination} total={totalPages}
          showSizeChanger={false} />
      </Footer>
    </Layout>
    /* <Space direction='vertical'>
      <Header> Header</Header>
      <Content>
        <Row>
          <Col span={24}>Col1</Col>
          <Col span={24}>Col2</Col>
        </Row>
        <Row>
          <Col span={24}>Col1</Col>
          <Col span={24}>Col2</Col>
        </Row>
        <Row>
          <Col span={24}>Col1</Col>
          <Col span={24}>Col2</Col>
        </Row>

        <Button type='primary'>Actor</Button>
        <Button type='primary'>Drama</Button>
      </Content>
      <Footer>Footer</Footer>
    </Space> */
  )
}

export default App
