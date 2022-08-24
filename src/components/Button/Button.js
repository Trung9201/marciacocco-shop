import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ to, href, children, onClick, ...passProps }) => {
  let Comp = "button";
  const props = { onClick };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className="button" {...props}>
      {children}
    </Comp>
  );
};

export default Button;
