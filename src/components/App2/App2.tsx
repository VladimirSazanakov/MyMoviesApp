import { useState, useEffect } from "react";

import { Content } from 'antd/es/layout/layout';
import { Space, Layout, Alert, Tabs, TabsProps } from 'antd';
import { App2Provider } from "../App2Context";

import SearchPage from "../SearchPage";
import RatePage from "../RatePage";
import MovieApi from "../../servise/MovieApi";

import './App2.css';


export default function App2() {

  const movieApi = new MovieApi;

  const [guestSession, setGuestSession] = useState('');
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [windowSize, setWindowSize] = useState(document.documentElement.clientWidth);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const guest = movieApi.createGuestSession();
    guest.then(response => {
      // console.log('Guest session id = ', response.guest_session_id)
      setGuestSession(response.guest_session_id)
      setError(false);
    })
      .catch(() => {
        setError(true);
        // console.log('Error from App2', guest)
      });

    movieApi.getMoviesGenres().then(response => {
      // console.log(response);
      setMoviesGenres(response.genres);
      setError(false);
      // console.log(moviesGenres);
    })
      .catch(() => {
        setError(true);
        // console.log('Error from App2')

      })
    // setGuestSession('2db3d319150d2dd1068aebd519dab0b4')

    const handleResize = (event: any) => {
      setWindowSize(event.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  function onchangeTab() {
    setReload(false);
    // console.log('reload ', reload)
  }

  function onChangeRate(id: number, rateValue: number) {
    // console.log('ChangeRate', id, ' rate ', rateValue);
    movieApi.addRating(id, guestSession, rateValue);
    setReload(true);
    // console.log('on Cange rate', reload)
  }

  const items: TabsProps['items'] = [
    {
      key: 'Search',
      label: 'Search',
      children: error ? <Alert message="You No Have connection to server" description="Need check you connection or turn on VPN" type="info" /> : <SearchPage onChangeRate={onChangeRate} windowSize={windowSize} />

    },
    {
      key: 'Rated',
      label: 'Rated',
      children: error ? <Alert message="You No Have connection to server" description="Need check you connection or turn on VPN" type="info" /> : <RatePage reload={reload} guest_id={guestSession} onChangeRate={onChangeRate} windowSize={windowSize} />

    },
  ]

  return (

    <App2Provider value={moviesGenres}>
      <Layout className='wrapper' style={{ background: 'white' }}>
        <Content className='content'>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Tabs defaultActiveKey="Search" items={items} onChange={onchangeTab} centered={true} />
          </Space>
        </Content>
      </Layout>
    </App2Provider>
  )
}