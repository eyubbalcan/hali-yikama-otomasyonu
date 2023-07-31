import React from "react";
import "./input.css";

function Input({ type, placeHolder, onChange, autoComplete }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}

export default Input;
