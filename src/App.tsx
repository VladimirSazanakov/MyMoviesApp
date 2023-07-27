import { useState } from 'react'
import { Button, Space, Layout } from 'antd';
import { Col, Row } from 'antd';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { Header, Footer, Sider, Content } = Layout;

  return (
    <>
      <div>
        <Space direction='vertical'>
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

            <Button>Actor</Button>
            <Button>Drama</Button>
          </Content>
          <Footer>Footer</Footer>
        </Space>
      </div>
    </>
  )
}

export default App
