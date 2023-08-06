import React from "react";
import logo from './images/campuspro(6).png';
import duplex from './images/duplex.jpeg';
import house from './images/house.jpeg';
import mansion from './images/mansion.jpeg';
import apartment from './images/apartment.jpeg';
// import stove1 from './electric-stove.jpeg';
// import stove2 from './electric-stove-1.jpeg';
// import stove3 from './electric-stove-2.jpeg';
import { Link } from 'react-router-dom';


const BuyPage = () => {
  const header = 'Apartments';
  const electric = 'Electric Gas';
  const light = 'Ringlights';

  const handleClick = (e) => {
    alert(`
    4 master bedroom and good parking space
    Location: Surulere avenue
    Price: 90m naira
    `)
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
        <button className="bp1-p">Items for Buy</button>
      </div>
    </navbar>
    
  
    <section className="bp1-buy-sec">
      <button type="button" className="bp1-header">
        {header}
      </button>
    <div className="bp1-overall">
      <div className="bp1-houses">
        <img src={duplex} alt='duplex' className="bp1-duplex" onClick={handleClick}/>
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={house} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={mansion} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={apartment} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>
      </div>
      <button type="button" className="bp1-btn">
        <Link to='/'>See More</Link>
      </button>


      <button type="button" className="bp1-header">
        {electric}
      </button>
    <div className="bp1-overall">
      <div className="bp1-houses">
        <img src={mansion} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={mansion} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={mansion} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={apartment} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
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
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={house} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={mansion} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
        <button>
          <Link to='/buyPage2'>View Details</Link>
        </button>
      </div>

      <div className="bp1-houses">
        <img src={apartment} alt='duplex' className="bp1-duplex" />
        <p>4 master bedroom and good parking space</p>
        <p>Location: Surulere avenue</p>
        <p>Price: 90m naira </p>
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
