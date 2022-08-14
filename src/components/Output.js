import React from "react";
import "./Output.css";

const Output = ({ message, cnt }) => {
  return (
    <>
      <h1>{message}</h1>
      <h2>{cnt}</h2>
    </>
  );
};

export default Output;
