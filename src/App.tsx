import React, { useState, useEffect } from 'react'
import { Button, Space, Layout } from 'antd';
import { Col, Row } from 'antd';
import './App.css'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import MovieCard from './components/MovieCard';
import MovieApi from './servise/MovieApi';


function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);

  const movieApi = new MovieApi;

  //const { Header, Footer, Sider, Content } = Layout;

  function getMovies(query: string){
    movieApi.getAllMovies(query)
      .then(res=>{
        setMovies(res);
      })
      console.log(movies);
  }

  useEffect(()=>{
    getMovies('return');
  }, [])

  /*-------from movie siete-------------------------------------------
  Array(20) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
​0: Object { adult: false, backdrop_path: "/dJ52jV7HlJ9hB8kdBOnj01DllBA.jpg", id: 82520, … }
​adult: false
​backdrop_path: "/dJ52jV7HlJ9hB8kdBOnj01DllBA.jpg"
​​
genre_ids: Array [ 18 ]
​​
id: 82520
​​
original_language: "en"
​​
original_title: "Return"
​​
overview: "Back from a tour of duty, Kelli struggles to find her place in her family and the rust-belt town she no longer recognizes."
​​
popularity: 8.389
​​
poster_path: "/xAuR564U2njKKcXSbfbq36rZLeA.jpg"
​​
release_date: "2011-02-10"
​​
title: "Return"
​​
video: false
​​
vote_average: 6.535
​​
vote_count: 1512
​​
<prototype>: Object { … }
  
//------------------------------------------------------------
*/

  console.log(movies);
  return (
    <>
      <div>
        <Layout className='wrapper'>
          <Header className='header'>Test</Header>
          <Content className='content'>
            <Row gutter={[36, 36]} align={'middle'} justify={'space-evenly'} wrap={true} >
              <Col span={12}> <Space><MovieCard /></Space> </Col>
              <Col span={12}> <Space><MovieCard /></Space></Col>

              <Col span={12}><Space><MovieCard /></Space> </Col>
              <Col span={12}> <Space><MovieCard /></Space></Col>

              <Col span={12}> <Space><MovieCard /></Space> </Col>
              <Col span={12}></Col>

            </Row>


          </Content>
          <Footer className='footer'>footer</Footer>
        </Layout>
        {/* <Space direction='vertical'>
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
        </Space> */}
      </div >
    </>
  )
}

export default App
