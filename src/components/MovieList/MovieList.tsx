import React, { useState, useEffect } from "react";
import { Button, Space } from 'antd';

import { Col, Row } from 'antd';
import MovieCard from '../MovieCard';

import './MovieList.css';

export default function MovieList(props: any) {

  //console.log(props.movies);

  const [movies, setMovies] = useState(props.movies);
  useEffect(() => {
    setMovies(props.movies)
  }, [props]);

  // console.log("movies in movie list", props.movies);

  const list = movies.map((el: any) => {
    return <Col span={12}><Space><MovieCard movie={el} /> </Space></Col>
    //console.log(el);
  })



  return (

    <Row gutter={[36, 36]} align={'middle'} justify={'space-evenly'} wrap={true} >
      {list}

    </Row>
  )
}