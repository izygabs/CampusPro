import React from 'react';
import './Signup.css'
import  key  from './images/key.png'
import user from './images/user.png'
import email from './images/email.png'
import number from './images/num.png'



// import gold from './gold.png'


const Signup = () => {
  return (
    <div>
        <form className='sp-form'>
            <h1>Sign Up</h1>
            <div className='header'>
                <label className='sp-label' htmlFor='firstName'>Firstname:</label><br />
                <input className='sp-input' type='text' id='name'/><br />
                <img className='sp-user-img' src={user} alt='user image'/>
                
                <label className='sp-label1' htmlFor='lastName'>Lastname:</label><br />
                <input className='sp-input1' type='text' id='name'/><br />

                <label className='sp-email-label' htmlFor='email'>Email:</label><br />
                <input className='sp-email-input' type='text'/><br />
                <img className='sp-email-img' src={email} alt='email image'/>

                <label className='sp-number1' htmlFor='number'>Phone number:</label><br />
                <input className='sp-number2' type='number'/><br />
                <img className='sp-number-img' src={number} alt='call image'/>

                <label className='sp-number3' htmlFor='number'>Alternate number:</label><br />
                <input className='sp-number4' type='number'/><br />

                <label className='sp-pwd1' htmlFor='password'>Password:</label><br />
                <input className='sp-pwd2' type='text'/><br />
                <img className='sp-img-key' src={key} alt='key image'/>

                <label className='sp-pwd3' htmlFor='password'>Confirm Password:</label><br />
                <input className='sp-pwd4' type='password'/>
                 
                
                
                <br />
            <div className='main'>
                <div className="checks1">
                  <input className='sp' type='checkbox'/>
                  <label className='sp-agent' htmlFor='agent'>Agent</label>
                </div>

                <div className='checks'>
                  <input className='sp-input2' type='checkbox'/>
                  <label className='sp-merchant1' htmlFor='merchant'>Merchant</label>
                </div>
            </div>
            </div>
            <span className='sp-signup'>
                <h5>Already signup?<a href='h'>Login</a></h5>
            </span>
            <div className='btn3'>
                <button className='sp-btn'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
          
          
                
              
            