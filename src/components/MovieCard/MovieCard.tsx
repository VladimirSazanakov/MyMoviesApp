import React from "react";

import './MovieCard.css';
import { Layout } from "antd";

export default function MovieCard() {
  return (
    <Layout className="movie-card">
      <Layout className="movie-card__img-layout">
        image
      </Layout>
      <Layout className="movie-card__card-info">
        Card info
      </Layout>

    </Layout>
  )
}