import { useState } from 'react';
import './CampusFeatures.css';
import React from 'react';

const CampusFeatures = () => {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
  }

  return (
    <div>
      <section className="section-1">
        {/* <h1 className="main-head">
          Campus Features
        </h1>
        <select name="" id="" className="c-select">
          <option value="">Select Campus Location</option>
        </select><br/> */}

        <h1 className='cam'>Campus Features: </h1>
        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>24hrs Electricity</label>
        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>CCTV camera</label>
        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Security Guard</label>
        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Gym</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>2 bedroom</label>
        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>3 bedroom</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Air Conditioned</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Swimming Pool</label><br/>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Parking Space</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Laundry room</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Internet</label><br/>

        <button type="button" onClick={handleChange} className='feat-btn'>
          {!change ? 'See more features' : 'Hide features'}
        </button>
        <br/>
        {change ? (<div>
          <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Near by Supermarket</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Near by Bank</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Near by Hospital</label><br/>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Near by Mall</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="" id='input'>Near by Church</label>

        <input type="checkbox" name="" id="" />
        <label htmlFor="">Well fenced</label><br/>
        </div>) 
          : 
          <div>
            
          </div>}
        
      </section>
    </div>
    )
}

export default CampusFeatures;