import React, { useState, useEffect } from "react";

import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, Space, Layout, Spin, Pagination } from 'antd';

import './App2.css';
import { Tabs, TabsProps } from "antd";
import SearchInput from "../SearchInput";
import { App2Provider } from "../App2Context";

import SearchPage from "../SearchPage";
import RatePage from "../RatePage";
import MovieApi from "../../servise/MovieApi";

export default function App2(props: any) {

  const movieApi = new MovieApi;

  const [currentTab, setCurrentTab] = useState('Search');
  const [guestSession, setGuestSession] = useState('');
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [windowSize, setWindowSize] = useState(document.documentElement.clientWidth);


  useEffect(() => {
    const guest = movieApi.createGuestSession();
    guest.then(response => {
      console.log('Guest session id = ', response.guest_session_id)
      setGuestSession(response.guest_session_id)
    });
    movieApi.getMoviesGenres().then(response => {
      //console.log(response);
      setMoviesGenres(response.genres);
      // console.log(moviesGenres);
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

  function onchangeTab(key: string) {
    // console.log(key)
    setCurrentTab(key);
  }

  function onChangeRate(id: number, rateValue: number) {
    // console.log('ChangeRate', id, ' rate ', rateValue);
    movieApi.addRating(id, guestSession, rateValue).then(res => console.log(res));
  }

  const items: TabsProps['items'] = [
    {
      key: 'Search',
      label: 'Search',
      children: <SearchPage onChangeRate={onChangeRate} windowSize={windowSize} />

    },
    {
      key: 'Rated',
      label: 'Rated',
      children: <RatePage guest_id={guestSession} onChangeRate={onChangeRate} windowSize={windowSize} />

    },
  ]

  return (

    <App2Provider value={moviesGenres}>
      <Layout className='wrapper' style={{ background: 'white' }}>
        <Content className='content'>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Tabs defaultActiveKey="Search" items={items} onChange={onchangeTab} destroyInactiveTabPane />
          </Space>
        </Content>
      </Layout>
    </App2Provider>

  )

}