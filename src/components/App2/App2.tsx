import React, { useState, useEffect } from "react";

import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, Space, Layout, Spin, Pagination } from 'antd';

import './App2.css';
import { Tabs, TabsProps } from "antd";
import SearchInput from "../SearchInput";

import SearchPage from "../SearchPage";
import RatePage from "../RatePage";
import MovieApi from "../../servise/MovieApi";

export default function App2(props: any) {

  const movieApi = new MovieApi;

  const [currentTab, setCurrentTab] = useState('Search');
  const [guestSession, setGuestSession] = useState('');

  useEffect(() => {
    const guest = movieApi.createGuestSession();
    guest.then(response => {
      console.log('Guest session id = ', response.guest_session_id)
      setGuestSession(response.guest_session_id)
    });

  }, []);

  function onchange(key: string) {
    console.log(key)
    setCurrentTab(key);
  }

  const items: TabsProps['items'] = [
    {
      key: 'Search',
      label: 'Search',
      children: <SearchPage />

    },
    {
      key: 'Rated',
      label: 'Rated',
      children: <RatePage />

    },
  ]

  return (

    <Layout className='wrapper'>

      <Content className='content'>
        <Space direction="vertical" align="center">
          <Tabs defaultActiveKey="Search" items={items} onChange={onchange} />
        </Space>
      </Content>
    </Layout>

  )

}