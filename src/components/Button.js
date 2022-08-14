import React from "react";

const Button = ({ color, callme, label }) => {
  const myColor = `btn btn-${color}`;
  return (
    // <div>
    <button onClick={callme} className={myColor}>
      {label}
    </button>
    // </div>
  );
};

export default Button;
