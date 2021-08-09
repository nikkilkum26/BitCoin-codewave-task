import React from "react";
import img from "../assets/1200px-BTC_Logo.svg.png";
import "./SmallCards.css";

const SmallCard = () => {
  return (
    <div className="smlCard">
      <img className="logo" src={img} alt="logo" />

      <div className="title">
        <div className="title">BitCoin BTC</div>
        <div className="price">$3987890098</div>
      </div>
      <div className="rates">
        <div className="text">3.22%</div>
      </div>
    </div>
  );
};

export default SmallCard;
