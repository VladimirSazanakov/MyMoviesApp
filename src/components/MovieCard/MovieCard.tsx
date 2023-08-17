import format from "date-fns/format";

import { Button, Card, Image, Rate, Space, Typography } from "antd";

import TextShortener from "../../servise/TextShortener";
import no_poster from "../../assets/No_image_poster.png";
import NumberAround from "../NumberAround";
import { App2Consumer } from "../App2Context";

import './MovieCard.css';


export default function MovieCard({ movie, onChangeRate }: any) {

  const imagePath = 'https://image.tmdb.org/t/p/original';
  const { Text, Title } = Typography;
  const { id, title, release_date, poster_path, overview, vote_average, rating, genre_ids } = movie;

  function ChangeRate(value: number) {
    onChangeRate(value);
  }

  const date = release_date ? format(new Date(release_date), 'MMMM d, yyyy') : null;

  return (
    <App2Consumer>
      {
        (moviesGenres) => {
          return (
            <Card key={id} size="small" className="movie-card" bodyStyle={{ padding: 0 }}>
              <Space align="start" style={{}} size={8}>
                <Image width={180} height={281} src={poster_path ? `${imagePath}${poster_path}` : no_poster} alt="Poster" />

                <div className="movie-card__descriptionContainer" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', flexDirection: 'column', height: '279px' }}>
                  <div className="movie-card__descriptionwaper">
                    <div className="movie-card__titleContainer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Title level={4} style={{ margin: 0, marginRight: 'auto', }}>{title}</Title>
                      <NumberAround num={vote_average} />
                    </div>
                    <Text type="secondary">{date}</Text>
                    <br />
                    <Space>
                      {genre_ids.slice(0, 3).map((el: number) => {
                        return (
                          <Button size="small">
                            {moviesGenres.filter((genre: any) => genre.id === el)[0]['name']}
                          </Button>
                        )
                      })}
                    </Space>
                    <br />
                    <Text type='secondary'>{TextShortener(overview)}</Text>
                  </div>
                  <Rate count={10} allowHalf onChange={ChangeRate} defaultValue={rating} />
                </div>

              </Space>
            </Card>
          )
        }
      }
    </App2Consumer>

  )
}