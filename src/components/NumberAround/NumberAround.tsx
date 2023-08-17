
import './NumberAround.css';

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

  return (
    <p className="NumberAround" style={borderColor}>{num}</p>
  )
}