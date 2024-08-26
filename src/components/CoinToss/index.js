import { useState } from "react";
import "./index.css";

const CoinToss = () => {
  const HEADS_IMG_URL =
    "https://assets.ccbp.in/frontend/react-js/heads-img.png";

  const TAILS_IMG_URL =
    "https://assets.ccbp.in/frontend/react-js/tails-img.png";

  const [tossResultImage, setTossResultImage] = useState(HEADS_IMG_URL);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2);
    if (tossResult === 0) {
      setTossResultImage(HEADS_IMG_URL);
      setHeadsCount(headsCount + 1);
    } else {
      setTossResultImage(TAILS_IMG_URL);
      setTailsCount(tailsCount + 1);
    }
  };
  const totalCount = headsCount + tailsCount;
  return (
    <>
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinToss;
