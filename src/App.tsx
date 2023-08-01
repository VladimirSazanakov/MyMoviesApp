import React, { useState, useEffect } from 'react'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, Space, Layout } from 'antd';

import './App.css'

import MovieApi from './servise/MovieApi';
import MovieList from './components/MovieList';



import TextShortener from './servise/TextShortener';



function App() {
  const cardOnPage = 6;
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);
  const [moviesToList, setMoviesToList] = useState([]);
  const [page, setPage] = useState(1);

  const movieApi = new MovieApi;

  //const { Header, Footer, Sider, Content } = Layout;

  function getMovies(query: string) {
    movieApi.getAllMovies(query)
      .then(res => {
        setMovies(res);
      })
    //console.log(movies);
  }

  function movieToMovieList() {
    const startPosition = cardOnPage * (page - 1);
    const newMoviesArr = movies.slice(startPosition, startPosition + cardOnPage);
    setMoviesToList(newMoviesArr);
    //console.log('movies to list', newMoviesArr);
  }

  useEffect(() => {
    getMovies('space');
    movieToMovieList();
  }, [])

  useEffect(() => {
    movieToMovieList();
  }, [page]);

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
  const testText = "A short featuring John John Florence, titled “Space.” Shot on location between Western Australia and Hawaii.  Presented by Parallel Sea\r Surfing by John John Florence  Cinematography by Erik Knutson\r Edited by Blake Vincent Kueny\r Produced by Spencer Klein\r Water Phantom Cinematography by Chris Bryan\r Additional Cinematography by Jack Germain + Matt Catalano\r Art Direction by Donny Stevens\r Sound Design & Mix by Keith White  Music: “Rejoice\r Steve Angello Feat. T.D Jakes\r Written by Steve Angello, T.D Jakes\r Produced by Steve Angello\r Vocals by T.D Jakes\r Size Records LTD under exclusive license to AWAL Recordings by Steve Angello feat T.D. Jakes\r “Rejoice”\r Exclusively licensed to Kobalt Music Recordings  Special Thanks to Pete Johnson, Andy Bark, Bob Hurley, Pat O’Connell, Evan Slater, Jamin Jannard'";


  console.log(TextShortener(testText))

  return (
    <Layout className='wrapper'>
      <Header className='header'>Test</Header>
      <Content className='content'>

        <MovieList movies={moviesToList} />

      </Content>
      <Footer className='footer'>footer</Footer>
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
