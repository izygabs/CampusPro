const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// import { useState, } from "react";
// import React from "react";
// import './Signup.css'

// const Signup = (props) => {
//     const [focused, setFocused] = useState(false)
//     const {label, onChange,errorMessage, id, ...inputProps } = props;
//     const handleFocuse = (e) => {
//         setFocused(true)
//     }
//   return (
//     <div className="sp-form-one">
//         <form>
//             <label>{label}</label>
//             <input {...inputProps} onChange={onChange} 
//             onBlur={handleFocuse}
//             onFocus={() => inputProps.name==='confirmPassword' && setFocused(true)} 
//             focused={focused.toString()}/>
//             <span>{errorMessage}</span>
//         </form>
        
//     </div>
//   )
// }

// export default Signup