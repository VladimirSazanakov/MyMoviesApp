import { useState } from 'react'
import { Button, Space, Layout } from 'antd';
import { Col, Row } from 'antd';
import './App.css'
import { Content, Header } from 'antd/es/layout/layout';
import MovieCard from './components/MovieCard';

function App() {
  const [count, setCount] = useState(0)

  //const { Header, Footer, Sider, Content } = Layout;

  return (
    <>
      <div>
        <Layout className='wrapper'>
          <Header className='header'>Test</Header>
          <Content className='content'>test content</Content>
          <MovieCard />
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
      </div>
    </>
  )
}

export default App
