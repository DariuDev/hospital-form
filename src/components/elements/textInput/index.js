import React from "react";
import "./style.scss";

const TextInput = ({ value, label, required, onChange , type , max }) => {
  return (
    <div className="input-field">
      <input
        value={value}
        type={type ? type :"text"}
        required={required}
        spellCheck="false"
        onChange={(e) => onChange(e.target.value)}
        max={max}
        maxLength={max}
      />
      <label>{label}</label>
    </div>
  );
};
export default TextInput;
