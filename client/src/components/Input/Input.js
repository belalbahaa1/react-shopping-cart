import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        required
        name={props.name}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
