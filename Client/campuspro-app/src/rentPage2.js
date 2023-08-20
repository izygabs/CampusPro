import logo from "./images/campuspro(6).png";
import house from "./images/house1.jpg";
import {useParams} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";


function RentPage2 (pass) {
  const [datas, setDatas] = useState([]);
  const [arr, setArr] = useState([]);
  const [agent, setAgent] = useState(false);
  const [other, setOthers]=useState(null);

 

 //using the hook to display the fetch data on load
 useEffect(()=>{
    
  fetcher()
},[] )

//filter properties according to agent id
// const similar = async ()=>{
//   const req = await fetch("/api/allProperties")
//   const res = await req.json()
//   console.log(res.Properties)
//   const properties = res.Properties
//   setArr([properties])
//   console.log(arr)

//   const simi = arr.filter((simis)=>
//     simis.agentID.toUpperString() == datas.agentID.toUpperString()
//   );

//   setOthers(simi)
//   // console.log(other)

// }

//function to fetch properties from the database
const {id} = useParams()
const url= `/api/property/${id}`
const fetcher = async()=> {
  try {
    const info = await fetch(url)
    const data2 = await info.json()
    const result = data2
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
  // const hideAgent = ()=>{
  //   setAgent(false)
  //   console.log(agent)
  // }

  return (  

  <div className="rentpage2">
     <div className="rentpage-main">
         <div className="hp-header2">
           <div className="hp-logo-div">
             <div>
               <img src={logo} className="hp-logo" alt="" />
             </div>
           </div>
           <div>
             <button className="hp-login-button">Login</button>
           </div>
         </div>
   
          <div className="sp2-carousel-div">
            <section className="sp2-main-sector">
              <Carousel controls={true} indicators={true}>
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
                <Carousel.Item>
                  {datas.hostelImages? <img  class="d-block w-100 sp2-carousel-img" src={`/${datas.hostelImages[5]}`}/>: null}
                </Carousel.Item>
              </Carousel> 
            </section>
            <div className="sp2-divs2">
                <p>Hostel Description: {datas.description}</p>
                  {datas.houseProperties ? <p>Hostel Properties: {datas.houseProperties.toString().split(",").join(', ')}</p> : null}
                <p>Campus Name: {datas.campusName}</p>
                <p>Amount/Annum : {Number(datas.price).toLocaleString()}</p>
                <p>Hostel Address: {datas.location} </p>
              </div>
          </div>
    
      </div>

      {agent? (
        <div>
            <div> Adetayo Jude </div>
            <div> 09021904099</div>
            <div> oladapoolusola97@gmail.com</div>
            <div> DISCLAIMER: CampusPro is not responsible for transacton between Agents/Merchats & Students</div>
        </div>
      
      ) : null}

      <div className="sp2-agent-info">
          <button onClick={viewAgent}>{!agent? 'View agent contact': 'Hide agent info'}</button>
      </div>


        {/* <button onClick={similar}>fetch similar</button> */}


      
  </div>

  );
}

export default RentPage2;
