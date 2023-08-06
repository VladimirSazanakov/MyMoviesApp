import React, { useState, useEffect } from "react";

import './MovieCard.css';
import { Button, Card, Image, Layout, Rate, Space, Typography } from "antd";

import TextShortener from "../../servise/TextShortener";
import no_poster from "../../assets/No_image_poster.png";
import NumberAround from "../NumberAround";

import { App2Consumer } from "../App2Context";

const { Text, Title } = Typography;
const imagePath = 'https://image.tmdb.org/t/p/original';

export default function MovieCard({ movie, onChangeRate }: any) {

  const { id, title, release_date, poster_path, overview, vote_average, rating, genre_ids } = movie;

  console.log(movie);
  function ChangeRate(value: number) {
    // console.log(value);
    onChangeRate(value);
  }

  let genreArr = genre_ids.slice(0, 3);
  console.log(genreArr);


  // const genreButtons = genre_ids.slice(0, 3).map((el: number) => {
  //   return (
  //     <Button size="small">
  //       {moviesGenres.find((genre: any) => genre.id === el).name}
  //     </Button>
  //   )
  // })





  return (
    <App2Consumer>
      {
        (moviesGenres) => {
          console.log('MoviesGenres from Consumer', moviesGenres)
          return (
            <Card size="small" className="movie-card">
              <Space align="start">
                <Image width={180} src={poster_path ? `${imagePath}${poster_path}` : no_poster} alt="Poster" />
                <Space direction="vertical" align="start" size={2}>
                  <Space direction="horizontal" align="start" size={"large"}>

                    <Title level={4} style={{ margin: 0 }}>{title}</Title>
                    <NumberAround num={vote_average} />
                  </Space>
                  <Text type="secondary">{release_date}</Text>
                  <Space>
                    {genre_ids.slice(0, 3).map((el: number) => {
                      return (
                        <Button size="small">
                          {moviesGenres.find((genre: any) => genre.id === el).name}
                        </Button>
                      )
                    })}
                  </Space>
                  <Text type='secondary'>{TextShortener(overview)}</Text>
                  <Rate count={10} allowHalf onChange={ChangeRate} value={rating} />
                </Space>
              </Space>
            </Card>
          )
        }
      }
    </App2Consumer>

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