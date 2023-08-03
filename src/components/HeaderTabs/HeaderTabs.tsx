import React, { useState, useEffect } from "react";

import './HeaderTabs.css';
import { Space, Tabs, TabsProps } from "antd";
import SearchInput from "../SearchInput";

export default function Header(props: any) {

  const [currentTab, setCurrentTab] = useState(1);



  function onchange(key: string) {
    console.log(key)
  }

  const items: TabsProps['items'] = [
    {
      key: 'Search',
      label: 'Search',

    },
    {
      key: 'Rated',
      label: 'Rated',

    },
  ]

  return (
    <Space direction="vertical">
      <Tabs defaultActiveKey="Search" items={items} onChange={onchange} />
      <SearchInput onChangeInput={props.onChangeInput} />

    </Space>
  )

}