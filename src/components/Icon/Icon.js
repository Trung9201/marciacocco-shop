import React from "react";
import { Link } from "react-router-dom";
import "./Icon.css";

const Icon = (props) => {
  return (
    <div className="icon">
      <Link to={props.path}>
        <img src={props.src} alt={props.alt} />
        <h3>{props.text}</h3>
      </Link>
    </div>
  );
};

export default Icon;
