import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner">
      <img className="pic" src={props.src} alt={props.alt} />
      <img className="cloud" src="images/cloud-light.png" alt="cloud" />
      <div className="title">
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default Banner;
