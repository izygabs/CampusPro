import React from 'react';
import logo from './images/campuspro(6).png';
import './buyPage1.css';
import Contents from './contents.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BuyPage = () => {
  const [query, setQuery] = useState('');
  const [dropDownQuery, setdropDownQuery] = useState('');

<<<<<<<<< Temporary merge branch 1
  const handleClick = (e) => {
    alert(`
    4 master bedroom and good parking space
    Location: Surulere avenue
    Price: 90m naira
    `)
  }

  return (
  <div className="bp1-body">
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
    
=========
  const [update, setUpdate] = useState('');
>>>>>>>>> Temporary merge branch 2
  


  const handleChange = (e) => {
    setdropDownQuery(e.target.value)
  } 


  
  return (
    <div className="main">
      <navbar className="navbar">
        <Link to="/">
        <img src={logo} alt='logo' className='logo' />
        </Link>
        <input type="search" name="input" id="search" placeholder='Search items...' onChange={(e) => setQuery(e.target.value)} />
        <div id='p'>
        <p id='paragraph'>Items Available for buy</p>
        </div>
      </navbar>

      <select value={update} onChange={handleChange} className='select'>
        <option value=' '>Select Item to Display</option><hr/>
        <option value='Clothings'>Clothings</option>
        <option value='Kitchen Utensils'>Kitchen Utensils</option>
        <option value='Phones & Computers'>Phones and Computers</option>
        <option value='Home Appliances'>Home Appliances</option>
        <option value='Furnitures'>Furnitures</option>
        <option value='Electronic Gadgets'>Electronic Gadgets</option>
        <option value='Books'>Books</option>
        <option value='Others'>Others</option>
      </select>

<<<<<<<<< Temporary merge branch 1
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

=========
      <section className='section'>
        {Contents.filter((items) => items.description.toLowerCase().includes( query || dropDownQuery )).map((items) => (
          <div key={items.id} className='items'>
            <img src={items.image} alt="item" className='images'/>
            <p id='p-i'>{items.description}<br/> {items.price} <br/> <button className='btn'><Link to='/buyPage2' id='link-btn'>View Details</Link></button></p>
          </div>
        </div>
        <button type="button" className="bp1-btn">
          View More
        </button>
      </section>
    </div>
  );
};

export default BuyPage;
