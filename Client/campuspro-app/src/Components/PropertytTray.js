import React from "react";
import { useState, useEffect } from "react";

const PropertyTray = (props) => {
  useEffect(()=>{

  })
  const fetch = async()=> {
    try{
      const req = await fetch(`/api/propertyByAgent/${id}`)
      const res = req.json()
      console.log(res)

    }catch(error){
      console.log(error)
    }
  }

  console.log(props.id)

  return (
    <div className="property-tray">
      <div className="pt-createProperty">
        <h3>Properties</h3>
        <button className="pt-create-button">+ Create Property</button>
      </div>
      <section className="pt-nav-div">
        <div className="pt-nav-btns">
          <button className="pt-nav-btn1" >All Properties</button>
          <button className="pt-nav-btn2" >New</button>
          <button className="pt-nav-btn3" >Editing</button>
          <button className="pt-nav-btn4" >Published</button>
          <button className="pt-nav-btn05" >Unpublished</button>
        </div>
        <div className="pt-properties-filter">
          <input type="search" placeholder="Search by name or address..."/>
        </div>
      </section>

      <section className="pt-properties-display">
        <div className="pt-properties">
          <div className="pt-props-img-div"></div>
          <div className="pt-props-desc-div"></div>
          <div className="pt-props-campus-div"></div>
          <div className="pt-props-price-div"></div>
          <div className="pt-props-posted-div"></div>
        </div>

        <div className="pt-properties">
          <div className="pt-props-img-div"></div>
          <div className="pt-props-desc-div"></div>
          <div className="pt-props-campus-div"></div>
          <div className="pt-props-price-div"></div>
          <div className="pt-props-posted-div"></div>
        </div>
        
        <div className="pt-properties">
          <div className="pt-props-img-div"></div>
          <div className="pt-props-desc-div"></div>
          <div className="pt-props-campus-div"></div>
          <div className="pt-props-price-div"></div>
          <div className="pt-props-posted-div"></div>
        </div>
      </section>
    </div>
  );
};
export default PropertyTray;
