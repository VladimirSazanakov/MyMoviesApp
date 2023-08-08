import { useState, useEffect } from "react";
import { Col, Row, Space } from 'antd';

import MovieCard from '../MovieCard';

import './MovieList.css';

export default function MovieList(props: any) {

  //console.log(props.movies);

  const [movies, setMovies] = useState(props.movies);
  const [windowSize, setWindowSize] = useState(props.windowSize);
  const [colSpan, setColSpan] = useState(12);


  // const windowInnerWidth = document.documentElement.clientWidth;
  // const pageWidth = document.documentElement.scrollWidth;
  // console.log('window inner width', windowInnerWidth);
  // console.log('pageWidth', pageWidth);

  useEffect(() => {
    setMovies(props.movies);
    setWindowSize(props.windowSize)
    if (windowSize < 1010) {
      setColSpan(24);
      // console.log('colSpan is ', colSpan)
    } else {
      setColSpan(12);
      // console.log('colSpan is ', colSpan)

    };

  }, [props]);


  // console.log("movies in movie list", props.movies);

  const list = movies.map((el: any) => {
    return <Col key={el.id} span={colSpan}><Space><MovieCard movie={el} onChangeRate={(rateValue: number) => props.onChangeRate(el.id, rateValue)} /> </Space></Col>
    //console.log(el);
  })

  return (

    <Row gutter={[36, 36]} align={'middle'} justify={'space-evenly'} wrap={true} >
      {list}
    </Row>
  )
}