import { useState } from "react";
import React from "react";
// import './Signup.css'

const Signup = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;
  const handleFocuse = (e) => {
    setFocused(true);
  };
  return (
    <div className="sp-form-one">
      <form className="sp-phorm">
        <label className="sp-label">{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocuse}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          className="sp-Input"
        />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};

export default Signup;
