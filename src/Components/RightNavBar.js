import React from "react";
import "./RightNavBar.css";
import addBaner from "../assets/Banner-ad.png";

const RightNavBar = () => {
  return (
    <div className="RightNav">
      <div>
        <select className="selectbox">
          <option value=" Calculator">Calculator</option>
          <option value=" Calculator"> Calculator</option>
          <option value="Calculator ">Calculator</option>
        </select>
      </div>
      <div className="highlight">
        <h5>HightLight</h5>
        <p>
          Bitcoin is a decentralized digital currency, without a central bank or
          single administrator, that can be sent from user to user on the
          peer-to-peer bitcoin network without the need for intermediaries.
        </p>
      </div>
      <img className="add-banner" src={addBaner} alt="adv banner" />
    </div>
  );
};

export default RightNavBar;
