import React from "react";

import './MovieCard.css';
import { Button, Card, Image, Layout, Space, Typography } from "antd";

import TextShortener from "../../servise/TextShortener";
import no_poster from "../../assets/No_image_poster.png";

const { Text, Title } = Typography;
const imagePath = 'https://image.tmdb.org/t/p/original';

export default function MovieCard({ movie }: any) {

  const { id, title, release_date, poster_path, overview } = movie;


  return (
    <Card size="small" className="movie-card">
      <Space align="start">
        <Image width={200} src={poster_path ? `${imagePath}${poster_path}` : no_poster} alt="Poster" />
        <Space direction="vertical" align="start" size={2}>
          <Title level={4} style={{ margin: 0 }}>{title}</Title>
          <Text type="secondary">{release_date}</Text>
          <Space>
            <Button size="small">Action</Button>
            <Button size="small">Drama</Button>
          </Space>
          <Text type='secondary'>{TextShortener(overview)}</Text>
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