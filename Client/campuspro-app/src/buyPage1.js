import React, { useEffect } from 'react';
import logo from './images/campuspro(6).png';
import './buyPage1.css';
import Contents from './contents.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const BuyPage = () => {
  const [query, setQuery] = useState('');
  const [dropDownQuery, setdropDownQuery] = useState('');

  const [update, setUpdate] = useState('');
  const [holddata, setHoldData] = useState([]);
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/allItems')
      console.log(res);
      const data = await res.json()
      setHoldData(data)
      console.log(holddata)
    } catch(err) {
      console.log(err);
    }
  }

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

      <section className='section'>
        {Contents.filter((items) => items.description.toLowerCase().includes( query || dropDownQuery )).map((items) => (
          <div key={items.id} className='items'>
            <img src={items.image} alt="item" className='images'/>
            <Link to={`/Contents/${items.id}`}>
            <p id='p-i'>{items.description}<br/> {items.price} <br/> <button className='btn'><Link to='/buyPage2' id='link-btn'>View Details</Link></button></p>
            </Link>
          </div>
        ))}
        {/* <button type="button"><Link to='/CampusFeatures'>Next</Link></button> */}
      </section>
    </div>
  )
}

export default BuyPage;