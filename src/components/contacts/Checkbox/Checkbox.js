import React from "react";
import "./Checkbox.css"
const Checkbox = ({ lable, value, onChange }) => {
  return (
    <lable className ="lable-content">
      <input type="checkbox" checked={value} onChange={onChange} />
      {lable}
    </lable>
  );
};

export default Checkbox;
