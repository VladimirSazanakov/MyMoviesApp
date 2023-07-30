import React from "react";

import './MovieCard.css';
import { Button, Card, Image, Layout, Space, Typography } from "antd";

const { Text, Title } = Typography;

export default function MovieCard() {
  return (
    <Card size="small" className="movie-card">
      <Space align="start">
        <Image width={200} src="../test/Rectangle 36.jpg" />
        <Space direction="vertical" align="start" size={2}>
          <Title level={4} style={{ margin: 0 }}>Title</Title>
          <Text type="secondary">date</Text>
          <Space>
            <Button size="small">Action</Button>
            <Button size="small">Drama</Button>
          </Space>
          <Text type='secondary'>Deccription Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus eaque facilis ut eum, officia voluptate laudantium quo animi amet cumque, harum ullam nihil earum unde ducimus hic incidunt saepe.</Text>
        </Space>
      </Space>
    </Card>

    /*<Layout className="movie-card">
      <Layout className="movie-card__img-layout">
        image
      </Layout>
      <Layout className="movie-card__card-info">
        Card info
      </Layout>

    </Layout>
    */
  )
}