import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/campuspro(6).png';
import { useState } from 'react';

const Navbar = () => {

  const [query, setQuery] = useState('');

  return (
    <div>
       <navbar className="navbar">
          <Link to="/">
          <img src={logo} alt='logo' className='logo' />
          </Link>
          <input type="search" name="input" id="search" placeholder='Search items...' onChange={(e) => setQuery(e.target.value)} />
          <div id='p'>
          <p id='paragraph'>Items Available for buy</p>
        </div>
      </navbar>
    </div>
  )
}

export default Navbar;