import React from "react";
import logo from './images/campuspro(6).png';
import duplex from './images/duplex.jpeg';
import house from './images/house.jpeg';
import mansion from './images/mansion.jpeg';
import apartment from './images/apartment.jpeg';
import { Link } from 'react-router-dom';
import speaker from "./images/speakers.png";
import A100 from "./images/A100-speaker.png";
import music from "./images/music-speaker.png";
import zealot from "./images/speaker-zealot.png";
import bed from "./images/bed.png";
import bedmat from "./images/bed-mat.png";
import bedpocket from "./images/bed-pocket.png";


const BuyPage = () => {
  const header = 'Mp3 Speakers';
  const beds = 'Mattresses';
  const light = 'Ringlights';

  const handleClick = (e) => {
    
  }

  return (
  <>
    <navbar className='bp1-navbar'>
      <div className="bp1-logo">
        <Link to='/'><img src={logo} alt='logo' className="bp1-logo" /></Link>
      </div>
      {/* <input type="text" className="bp1-input" /> */}

    
      <select className="bp1-select">
          <option value='0' className="bp1-input cate-gory gory">Category</option><hr />
          <option value='1' className="bp1-input cate-gory">Spoons</option>
          <option value='2' className="bp1-input cate-gory">Electric Gas</option>
          <option value='3' className="bp1-input cate-gory">Mattress</option>
          <option value='4' className="bp1-input cate-gory">Electric iron</option>
          <option value='5' className="bp1-input cate-gory">House</option>
          <option value='6' className="bp1-input cate-gory">Car</option>
          <option value='7' className="bp1-input cate-gory">Ringlight</option>
          <option value='8' className="bp1-input cate-gory">Mp3 speaker</option>
          <option value='9' className="bp1-input cate-gory">Lands</option>
        </select>
      <div>
        <button className="bp1-p">Items available for buy</button>
      </div>
    </navbar>
    
  
    <section className="bp1-buy-sec">
      <button type="button" className="bp1-header">
        {header}
      </button>
    <div className="bp1-overall">
      <div className="bp1-houses">
        <img src={speaker} alt='duplex' className="bp1-duplex" onClick={handleClick}/>
        <button className="bp-btn">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>
 
      <div className="bp1-houses">
        <img src={A100} alt='duplex' className="bp1-duplex" />
        <button className="bp-btn">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={music} alt='duplex' className="bp1-duplex" id="bp1-music" />
        <button className="bp-btn" id="link">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      </div>

      <div className="bp1-houses">
        <img src={zealot} alt='duplex' className="bp1-duplex" />
        <button className="bp-btn">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>
      </div>
      <button type="button" className="bp1-btn">
        <Link to='/'>See More</Link>
      </button>


      <button type="button" className="bp1-header">
        {beds}
      </button>
    <div className="bp1-overall">
      <div className="bp1-houses">
        <img src={bed} alt='duplex' className="bp1-duplex" />
        <button className="bp-btn" id="link">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={bedmat} alt='duplex' className="bp1-duplex" />
        <button className="bp-btn">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={bedpocket} alt='duplex' className="bp1-duplex" />
        <button className="bp-btn">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={apartment} alt='duplex' className="bp1-duplex" />
        <button className="bp-btn">
          <Link to='/buyPage2' className="bp1-Link">View Details</Link>
        </button>
      </div>
      </div>
      <button type="button" className="bp1-btn">
        See More
      </button>



      <button type="button" className="bp1-header">
        {light}
      </button>
    <div className="bp1-overall">
      <div className="bp1-houses">
        <img src={duplex} alt='duplex' className="bp1-duplex" />
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={house} alt='duplex' className="bp1-duplex" />
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={mansion} alt='duplex' className="bp1-duplex" />
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={apartment} alt='duplex' className="bp1-duplex" />
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>
      </div>
      <button type="button" className="bp1-btn">
        View More
      </button>

    </section>


    </>
  )
}

export default BuyPage;
