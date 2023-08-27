import logo from './images/campuspro(6).png';
import './buyPage1.css';
import { useEffect, useState } from 'react';
import React from 'react';
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
      const data = await res.json()
      console.log(data)
      setHoldData(data.Items)
      console.log(holddata)
    } catch(err) {
      console.log(err);
    }
  }

  // console.log(items.itemPictures);

  const handleChange = (e) => {
    setdropDownQuery(e.target.value)
  } 

  

  console.log(holddata); 

  return (
    <div className="bpage-main">

      <navbar className="bpage-navbar">
        <Link to="/">
        <img src={logo} alt='logo' className='bp1-logo' />
        </Link>
        <input type="search" name="input" id="bp1-search" placeholder='Search items...' onChange={(e) => setQuery(e.target.value)} />
        <div id='p'>
        {/* <p id='paragraph'>Items Available for buy</p> */}
        </div>
      </navbar>
                                    
      {/* <select value={update} onChange={handleChange} className='bp1-select'>
        <option value=' '>Select Item to Display</option><hr/>
        <option value='Clothings'>Clothings</option>
        <option value='Kitchen Utensils'>Kitchen Utensils</option>
        <option value='Phones & Computers'>Phones and Computers</option>
        <option value='Home Appliances'>Home Appliances</option>
        <option value='Furnitures'>Furnitures</option>
        <option value='Electronic Gadgets'>Electronic Gadgets</option>
        <option value='Books'>Books</option>
        <option value='Others'>Others</option>
  </select> */}

      <section className='bp1-section'>
        {holddata.map((items) => {
          return(
            <div key={items.id} className='bp1-items'>
              <div className='bp1-img-div'>
                <img src={`${items.itemPictures[1]}`} alt='image' className='bp1-normal-img' />
              </div>
                <p id='bp1-p-i'> <br/>  <br/> 
            
              <button className='bp1-btn'><Link to={`/holddata/${items._id}`} id='bp1-link-btn'>
                View Details
                </Link>
                </button>
                </p>
          </div>
          )
          
        })}
      </section>
    </div>
  )
}

export default BuyPage;