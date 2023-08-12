import React from 'react';
import './Signup.css'
import  key  from './lock_483408.png'
import user from './MicrosoftTeams-image (4).png'
import email from './MicrosoftTeams-image (6).png'
import number from './MicrosoftTeams-image (5).png'
import { Link } from 'react-router-dom';


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
                <input className='sp-pwd2' type='password'/><br />
                <img className='sp-img-key' src={key} alt='key image'/>

                <label className='sp-pwd3' htmlFor='password'>Confirm Password:</label><br />
                <input className='sp-pwd4' type='password'/>
                 
                
                
                <br />
            <div id='main'>
                <div id="checks">
                    <label className='sp-agent' htmlFor='agent'>Agent</label>
                    <input className='sp' type='checkbox'/>
                </div>

                <div id='checks'>
                    <label className='sp-merchant1' htmlFor='merchant'>Merchant</label>
                    <input className='sp-input2' type='checkbox'/>
                </div>
            </div>
            </div>
            <span className='sp-signup'>
                <h6>already signup? <button>
                <Link to='/login'>View Details</Link>
                </button></h6>
            </span>
            <div className='btn3'>
                <button className='sp-btn'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
          
          
                
              
            