import React, { useState, useEffect } from "react";

import './HeaderTabs.css';
import { Input, Tabs, TabsProps } from "antd";

export default function Header(props: any) {

  const [currentTab, setCurrentTab] = useState(1);

  const [inputValue, setInputValue] = useState('');

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
    <>
      <Tabs defaultActiveKey="Search" items={items} onChange={onchange} />
      <Input placeholder="Type to search..." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
    </>
  )

}