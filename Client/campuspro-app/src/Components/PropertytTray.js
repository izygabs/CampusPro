import React from "react";
import { useState, useEffect } from "react";
import edit from "../images/edit-icon.png"
import del from "../images/delete-icon.png"

const PropertyTray = (props) => {
    const [allProperties, setAllProperties]= useState(true)
    const [newProperties, setNewProperties]= useState(false)
    const [editingProperties, setEditingProperties]= useState(false)
    const [publishedProperties, setPublishedProperties]= useState(false)
    const [unpublishedProperties, setUnpublishedProperties]= useState(false)

    const [data, setData] =useState([])

    function setall(){
      setAllProperties(true)
      setEditingProperties(false)
      setNewProperties(false)
      setPublishedProperties(false)
      setUnpublishedProperties(false)
    }
    function setEditing(){
      setAllProperties(false)
      setEditingProperties(true)
      setNewProperties(false)
      setPublishedProperties(false)
      setUnpublishedProperties(false)
    }
    function setNew(){
      setAllProperties(false)
      setEditingProperties(false)
      setNewProperties(true)
      setPublishedProperties(false)
      setUnpublishedProperties(false)
    }
    function setPublished(){
      setAllProperties(false)
      setEditingProperties(false)
      setNewProperties(false)
      setPublishedProperties(true)
      setUnpublishedProperties(false)
    }
    function setunpublished(){
      setAllProperties(false)
      setEditingProperties(false)
      setNewProperties(false)
      setPublishedProperties(false)
      setUnpublishedProperties(true)
    }


  useEffect(()=>{
    fetcher()
  }, [])
  const fetcher = async ()=> {
    try{
      const req = await fetch(`/api/itemsByMerch/64dea0a4f95fd237125a3d47`)
      const res = await req.json()
      const info = await res.Items
      setData(info)
      console.log(data)

    }catch(error){
      console.log(error)
    }
  }

  console.log(props.id)
  console.log(data)

  return (
    <div className="property-tray">
      <div className="pt-createProperty">
        <h3>Properties</h3>
        <button className="pt-create-button">+ Create Property</button>
      </div>
      <section className="pt-nav-div">
        <div className="pt-nav-btns">
          <button className={allProperties?"pt-nav-btn01": "pt-nav-btn1"} onClick={setall} >All Properties</button>
          <button className={newProperties?"pt-nav-btn01": "pt-nav-btn1"} onClick={setNew}>New</button>
          <button className={editingProperties ? "pt-nav-btn01": "pt-nav-btn1"} onClick={setEditing} >Editing</button>
          <button className={publishedProperties ? "pt-nav-btn01": "pt-nav-btn1"} onClick={setPublished} >Published</button>
          <button className={unpublishedProperties ? "pt-nav-btn01": "pt-nav-btn1"} onClick={setunpublished}>Unpublished</button>
        </div>
        <div className="pt-properties-filter">
          <input type="search" placeholder="Search by name or address..."/>
        </div>
      </section>
      {
        data.length > 1? (
        <section className="pt-properties-display">
          {data.map((data)=>{
            return(
              <div key={data._id} className="pt-properties">
                  <div className="pt-props-img-div">
                      <img className="pt-image" src={`${data.itemPictures[3]}`}/>
                  </div>
                  <div className="pt-props-price-div">
                    <p className="pt-texts">Item name</p>
                    <p>{data.itemName}</p>
                    <p>{data.category}</p>
                  </div>
                  <div className="pt-props-desc-div">
                    <p className="pt-texts">Campus Name</p>
                    <p>{data.campus}</p>
                    </div>
                  <div className="pt-props-campus-div">
                    <p className="pt-texts">Apartment Price</p>
                    <p>#{Number(data.price).toLocaleString()}</p>
                  </div>
                  <div className="pt-props-posted-div">
                    <button> <img className="pt-edit-btn" src={edit}/></button>
                    <button> <img className="pt-delete-btn" src={del}/></button>
                    <p className="pt-edit">Edit</p>
                    <p className="pt-delete">Delete</p>
                    
                  </div>
            </div>
            )
          })}

      </section>): <div> create your first property today</div>
      }
      
    </div>
  );
};
export default PropertyTray;
