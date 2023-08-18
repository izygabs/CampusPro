import logo from "./images/campuspro(6).png";
import house from "./images/house1.jpg";
import {useParams} from 'react-router-dom'
import React, { useState, useEffect} from "react";

function RentPage2 (pass) {
  const [datas, setDatas] = useState([]);


 

 //using the hook to display the fetch data on load
 useEffect(()=>{
    
  fetcher()
  
},[] )

//function to fetch properties from the database
const {id} = useParams()
const url= `/api/property/${id}`
const fetcher = async()=> {
  try {
    console.log(id)
    console.log(url)
    const info = await fetch(url)
    const data2 = await info.json()
    const result = data2
    console.log(result)
     setDatas(result)
    
  } catch (error) {
    console.log(error)
  }
}

  return (
  <div>
  {datas&&(
         <div className="rentpage-main">
         <div className="hp-header">
           <div className="hp-logo-div">
             <div>
               <img src={logo} className="hp-logo" alt="" />
             </div>
           </div>
           {/* <div>
             <input  onChange={sort} placeholder="Search for hostels around your school. example: oou" className="hp-select-button"/>
   
           </div> */}
           <div>
             <button className="hp-login-button">Login</button>
           </div>
         </div>
   
         <section className="sp2-main-sector">
           <div className="sp2-divs">
             <img className="sp2-main-img" src={house} alt="" />
           </div>
           <div className="sp2-divs2">
             { datas.houseProperties ? <p> Description: {datas.houseProperties}</p> : null}
             <p>campus {datas.campusName}</p>
             <p>Amount/Annum : {Number(datas.price).toLocaleString()}</p>
             <p>Campus Address: {datas.location} </p>
           </div>
         </section>
   
         <div className="sp-2-img-div">
           <div>
             <img />
           </div>
           <div>
             <img />
           </div>
           <div>
             <img />
           </div>
           <div>
             <img />
           </div>
           <div>
             <img />
           </div>
         </div>
   
         <div className="sp2-agent-info">
           <button>view agent contact</button>
         </div>
       </div>
  )}
  </div>

  );
}

export default RentPage2;
