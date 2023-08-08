import { useState } from "react";
import Signup from "./signUp";
import css from './Signup.css'

function Signup2() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    alternateNumber:"",
    address:"",
    password:'',
    confirmPassword:"",
  });

  const input = [
    {
      id:1,
      name: 'Firstname Lastname',
      type: 'text',
      // placeholder: 'Firstname',
      errorMessage: 'Firstname should be 5-20 characters and should not include any special character',
      label: 'Firstname(* Required)',
      pattern:'^[a-zA-Z0-9]{3-16}$',
      pattern: "",
      require: true,
    },
    {
    
      id:2,
      name: 'Lastname',
      type: 'text',
      // placeholder: 'Lastname',
      errorMessage: 'Firstname should be 5-20 characters and should not include any special character',
      label: 'Lastname*',
      pattern:'^[a-zA-Z0-9]{3-16}$',
      pattern: "",
      require: true
    },
    {
      id:3,
      name: 'email',
      type: 'text',
      // placeholder: 'Email',
      errorMessage: 'It should be a valid email',
      pattern:'^[a-zA-Z0-9]{3-16}$',
      pattern: "",
      label: 'Email*',
      require: true
    },
    {
      id:4,
      name: 'phone number',
      type: 'text',
      // placeholder: 'Phone number',
      errorMessage: 'Number should be 1-11 character and should not include any letter character',
      label: 'Phone number*',
      pattern: '^((^+)(234){1}[0–9]{10})$',
      pattern: "",
      require: true,
    },
    {
      id:5,
      name: 'phone number two',
      type: 'text',
      // placeholder: 'Alternate Number',
      errorMessage: 'Number should be 1-11 character and should not include any letter character',
      label: 'Phone number two',
      pattern: '((^+)(234){1}[0–9]{10})$',
      pattern: "",
      require: true
    },
    {
      id:7,
      name: 'password',
      type: 'password',
      // placeholder: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter and 1 number',
      label: 'Password*',
      pattern:'^[a-zA-Z0-9{3-16}$',
      pattern: '',
      require: true
    },
    {
      id:8,
      name: 'confirmPassword',
      type: 'password',
      // placeholder: 'Confirm Password',
      errorMessage: 'forgot password? Sign in',
      label: 'Confirm Password*',
      pattern: values.password,
      require: true,
    },
  ]

     
     const handleSubmit = (e) => {
      e.preventDefault()
      // const data = new FormData(e.target)
     }
     const onChange = (e) =>{
      setValues({...values, [e.target.name]: e.target.value})
     }
     console.log(values)
  return (
    
    <div className="sp-main">
      
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        {input
        .map((input) => (
          <Signup key={input.id} {...input} value={values[input.name]}
          onChange={onChange}
          />
        ))}
        {/* <Signup name="lastname" placeholder="Lastname"/> */}
        <div className="sp-input-one">
          
        </div>
        <div className="sp-radio-box">
        <label for='agent'>Agent</label>
          <input type='radio' id='agent' value='Agent' name='seller' />
          {/* <label for='agent'>Agent</label> */}
          <br />
          <label for='merchant'>Merchant</label>
          <input type='radio' id='merchant' value='Merchant' name='seller'/>
          {/* <label for='merchant'>Merchant</label> */}
        </div>
        <button className="btn">Submit</button>
      </form>
      <div className="sp-photo">
        <h4>Insert photo</h4>
      </div>
    </div>
  );
}
export default Signup2;
          
          
                
              
            