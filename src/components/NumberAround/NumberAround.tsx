import React, { useState, useEffect } from "react";

import './NumberAround.css';
import { Color } from "antd/es/color-picker";

export default function NumberAround({ num }: any) {
  num = Number(num.toFixed(1));
  const rateVeryBad = {
    borderColor: "#E90000",
  };
  const rateBad = {
    borderColor: "#E97E00",
  };
  const rateGood = {
    borderColor: "#E9D100",
  };
  const rateVeryGood = {
    borderColor: "#66E900",
  };

  let borderColor = (num <= 3) ? rateVeryBad :
    (num <= 5) ? rateBad :
      (num <= 7) ? rateGood : rateVeryGood;




  /*

    От 0 до 3 - #E90000
    От 3 до 5 - #E97E00
    От 5 до 7 - #E9D100
    Выше 7 - #66E900
*/
  return (
    <p className="NumberAround" style={borderColor}>{num}</p>
  )
}