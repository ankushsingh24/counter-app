import React from "react";
import "./Button.css";

const Button = ({ color, callme, label }) => {
  const myColor = `btn btn-${color}`;
  return (
    <>
      <button id="b" onClick={callme} className={myColor}>
        {label}
      </button>
    </>
  );
};

export default Button;
