import logo from "./images/campuspro(6).png";
import house from "./images/house1.jpg";
import {useParams} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import location from "./images/location-icon.png";


function RentPage2 (pass) {
  const [datas, setDatas] = useState([]);
  const [ars, setArs] = useState(false);
  const [agent, setAgent] = useState(false);
  const [other, setOther]=useState([]);
 

 //using the hook to display the fetch data on load
 useEffect(()=>{
    fetcher()
  
},[] )

//fetch similar properties according to agent id
const similar = async (agentID)=>{
  try{
    console.log(agentID)
  const req = await fetch(`/api/propertyByAgent/${agentID}`)
  console.log(req)
  const res = await req.json()
  console.log(res)
  setOther(res)
  console.log(res)
  // console.log(other)
  setArs(true)
}catch (error){
  console.log(error)
}
}

//function to fetch properties from the database
const {id} = useParams()
const url= `/api/property/${id}`
const fetcher = async ()=> {
  try {
    const info = await fetch(url)
    const data2 = await info.json()
    const result = data2.Property
    console.log(result)
     setDatas(result)
    
  } catch (error) {
    console.log(error)
  }
}

  const viewAgent = ()=>{
    setAgent(!agent)
    console.log(agent)
  }


  return (  

  <div className="rentpage2">
     <div className="rentpage-main">
          <Navbar />
   
          <div className="sp2-carousel-div">
            <section className="sp2-main-sector">
              <Carousel controls={true} indicators={true} class>
                <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[0]}`}/>: null}
                </Carousel.Item>
                <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[1]}`}/>: null}
                </Carousel.Item>
                <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[2]}`}/>: null}
                </Carousel.Item>
                <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[3]}`}/>: null}
                </Carousel.Item>
                <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[4]}`}/>: null}
                </Carousel.Item>
                {/* <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[5]}`}/>: null}
                </Carousel.Item> */}
              </Carousel> 
            </section>
            <div className="sp2-divs2">
              <div className="sp2-divs2-text">
                <p className="sp2-divs2-text-span">APARTMENT PROPERTIES</p>
                <p> <span>Hostel Description:</span> {datas.description}</p>
                  {datas.houseProperties ? <p> <span>Hostel Properties:</span> {datas.houseProperties.toString().split(",").join(', ')}  </p> : null}
                <p> <span>Campus Name:</span> {datas.campusName} </p>
                <p><span>Amount/Annum :</span> #{Number(datas.price).toLocaleString()} </p>
                <p> <span> Hostel Address:</span> {datas.location} </p>
              </div>

              <div className="sp2-divs2-details">
                {agent? (
                    <div>
                        <p className="sp2-divs2-text-span">AGENT DETAILS</p>
                        <p> {datas.agentID.firstName} {datas.agentID.lastName} </p>
                        <p> {datas.agentID.phoneNumber}</p>
                        <p> {datas.agentID.email}</p>
                        <marquee>
                           DISCLAIMER: <span className="sp2-disclaimer">CampusPro</span> is not responsible for transacton between Agents/Merchats & Students.  DISCLAIMER: <span className="sp2-disclaimer">CampusPro</span> is not responsible for transacton between Agents/Merchats & Students.
                        </marquee>
                    </div>
                  ) : null}
              </div>

              <div className="sp2-agent-info">
                <button onClick={viewAgent}>{!agent? 'View agent contact': 'Hide agent info'}</button>
              </div>
              
            </div>
          </div>
    
      </div>



      <div className="sp2-agents">
        {!ars?
        <div className="sp2-agent-info">
            <button onClick={()=>similar(datas.agentID._id)}> View similar Properties by this Agent</button>
        </div>: null}
      </div>

      {ars? ( <div>
        <div className="sp2-similar-props-div">
        <p className="sp2-similar-props">Other properties posted by this Agent</p>
        </div>
        <div className="sp-sub-div22">
            {other.map(other =>{
              return(
                <div key={other._id} className="sp-sub-div">
                  <div className="sp-img-div">
                    <img className="sp-other-img" src={other.hostelImages ? `/${other.hostelImages[0]}`: null} />
                    <div>
                      <img className="hp-locate" src={location} />
                      <p>{other.campusName}</p>
                    </div>
                  </div>
                  <div className="sp-text-div">
                    <p>{other.hostelFeatures[0]}</p>
                    <p>#{Number(other.price).toLocaleString()}</p>

                    <Link className="sp2-linkk" to={`/rentproperty/${other._id}`}>
                      <button onClick={ ()=>setTimeout("window.location.reload()",1000)}>View this property</button>
                    </Link>
                  </div>
                </div>
              )})} 
    </div>
    </div>) :null}

 

      
  </div>

  );
}

export default RentPage2;
