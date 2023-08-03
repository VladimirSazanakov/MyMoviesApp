import React, { useState, useEffect } from "react";
import { Input } from "antd";

import './SearchInput.css';

export default function SearchInput(props: any) {

  const [inputValue, setInputValue] = useState('');

  let timeOutId: any;

  function onChanche(event: any) {
    setInputValue(event.target.value);
    clearTimeout(timeOutId);
  }

  useEffect(() => {
    timeOutId = setTimeout(() => { props.onChangeInput(inputValue) }, 2000);
  }, [inputValue])

  return (
    <Input className="SearchInput" placeholder="Type to search..." value={inputValue} onChange={onChanche} />
  )
}