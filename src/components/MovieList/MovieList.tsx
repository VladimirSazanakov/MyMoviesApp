import { useState, useEffect } from "react";
import { Col, Row, Space } from 'antd';

import MovieCard from '../MovieCard';

import './MovieList.css';

export default function MovieList(props: any) {

  const [movies, setMovies] = useState(props.movies);
  const [windowSize, setWindowSize] = useState(props.windowSize);
  const [colSpan, setColSpan] = useState(12);

  useEffect(() => {
    setMovies(props.movies);
    setWindowSize(props.windowSize)
    if (windowSize < 1010) {
      setColSpan(24);
    } else {
      setColSpan(12);
    };
  }, [props]);

  const list = movies.map((el: any) => {
    return <Col key={el.id} span={colSpan}><Space><MovieCard movie={el} onChangeRate={(rateValue: number) => props.onChangeRate(el.id, rateValue)} /> </Space></Col>
  })

  return (
    <Row gutter={[36, 36]} align={'middle'} justify={'space-evenly'} wrap={true} >
      {list}
    </Row>
  )
}