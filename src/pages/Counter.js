import React from "react";
import Output from "../components/Output/Output";
import Button from "../components/Button/Button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);

  const minus = () => setCount(count - 1);

  return (
    <div className="container">
      <br />
      <div className="col-md-12 d-flex justify-content-center">
        <Output message="Counter App" />
      </div>

      <div className="col-md-12 d-flex justify-content-center">
        <Button color="primary" callme={plus} label="+" />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Button color="danger" callme={minus} label="-" />{" "}
      </div>

      <div className="col-md-12 d-flex justify-content-center">
        <Output cnt={count} />
      </div>
    </div>
  );
};

export default Counter;
