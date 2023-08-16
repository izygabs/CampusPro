import React from 'react'
import './CampusFeatures.css';

const CampusFeatures = () => {
  return (
    <div>
      <section className="section-1">
        <h1 className="main-head">
          Campus Features
        </h1>
        <select name="" id="" className="select">
          <option value="">Select Campus Location</option>
        </select><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">24hrs Electricity</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">CCTV camera</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Security</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Gateman</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Borehole</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Well</label><br/>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Fenced</label>
      </section>
    </div>
  )
}

export default CampusFeatures;