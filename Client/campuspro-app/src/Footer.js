import React from 'react'
import './Footer.css'
import email from './images/email.png'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin (2).png'
import twitter from './images/twitter.png'
import youtube from './images/youtube.png'



const Footer = () => {
  return (
    <div className='fp-main-header'>
        <div className='fp-header'>
            <h3 className='fp-h3'>Have some questions about our work? </h3>
            <button className='fp-btn'>MORE ABOUT US</button>
        </div>

        <footer className='fp-main'>
            <div className='fp-main-one'>
                <h3 className='fp-campus'>CAMPUSPRO</h3>
                <p className='fp-moto'>Bringing affordable<br /> 
                houses closer to your doorstep
                </p>
            </div>

            <div className='fp-company'>
                <h3 className='fp-about-com'>COMPANY</h3>
                <u className='fp-p'>
                    <li>About us</li>
                    <li>Our services</li>
                    <li>Contacts</li>
                    <li>Blog</li>
                </u>
            </div>

            <div className='fp-contact'>
                <h3 className='fp-contact-num'>CONTACT</h3>
                <div className='all-contact'>
                    <span className='fp-info'><img className='email-box' src={email} alt='email'/>info@campuspro.com</span>
                    <span className='fp-number'>+234-8099275325</span>
                </div>
                <div className='fp-img-all'>
                    <img className='one' src={instagram} alt='instagram image'/>
                    <img className='two' src={facebook} alt='facebook image'/>
                    <img className='three'src={linkedin} alt='linkedin image'/>
                    <img className='four'src={twitter} alt='twitter image'/>
                    <img className='five' src={youtube} alt='youtube image' />
                </div>
            </div>

            <div className='fp-address'>
                <h3 className='fp-add'>ADDRESS</h3>
                <p className='fp-add-one'>101, Awolowo Road, Ikoyi, Lagos, Nigeria </p>
            </div>

            <div className='fp-newsletter'>
                <h3 className='fp-news'>Newsletter</h3>
                <input className='fp-input' type='text' placeholder='name'/>
                <input className='fp-input1' type='email' placeholder='email'/>
                <button className='fp-btn-one'>REGISTER NOW</button>
            </div>
        </footer>
    </div>
  )
}

export default Footer