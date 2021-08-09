import React from "react";
import "./HomePage.css";
import LeftNavBar from "./LeftNavBar";
import MainContent from "./MainContent";
import RightNavBar from "./RightNavBar";

const HomePage = () => {
  return (
    <div className="content">
      <div className="leftside">
        <LeftNavBar />
      </div>

      <div className="maincontent">
        <MainContent />
      </div>

      <div className="rightside">
        <RightNavBar />
      </div>
    </div>
  );
};

export default HomePage;
