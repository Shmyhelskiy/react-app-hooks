import React, { useState } from "react";
import "./ContractsList.css";

const contracts = ({ state }) => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="wraper">
      <p>{state[0].firstName}</p>
      <p>{count}</p>
    </div>
  );
};

export default contracts;
