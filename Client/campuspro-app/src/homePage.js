import React from "react";
import logo from './logo22.png'
import data from "./data"
import { useState } from "react";
import Schools from "./schools";
import{Link} from 'react-router-dom'


function HomePage() {
const [datas ,setDatas]= useState(data)
// const [camp , setCamp]=useState('')


function change(e){
  // e.preventDefault()
  const pal = (e.target.value)
  console.log(pal)

  if (pal){
  const filt = datas.filter((place) => place.campus.toLowerCase().startsWith(pal.toLowerCase()))
  setDatas(filt)
}else {
  setDatas(data)
}

}
const house = datas.map((aparte)=>{
  return <Schools key={aparte.id}
   {...aparte} />
})
  return(
    <div>
      <div className="hp-header">
        <div className="hp-logo-div">
          <div>
           <img src={logo} className="hp-logo"/>
          </div>
          <div>
            <p>CampusPro</p>
          </div> 
        </div>
        <div>
          <input onChange={change} placeholder="Search for hostels around your school. example: oou" className="hp-select-button"/>

          {/* <select onChange={change} className="hp-select-button">
              <option value={'lasu'}>LASU</option>
              <option value={'unilag'}>UNILAG</option>
              <option value={'laspotech'}>LASPOTECH</option>
              <option value={'ui'}>UI(Ibadan)</option>
              <option value={'the polytechnic ibadan'}>THE POLYTECHNIC IBADAN</option>
              <option value={'oou'}>OOU</option>
              <option value={'oau'}>OAU</option>
              <option value={'jabu'}>JABU</option>
              <option value={'mapoly'}>MAPOLY</option>
              <option value={'osu'}>OSU</option>
              <option value={'eksu'}>EKSU</option>
          </select> */}
        </div>
        <div>
          <button className="hp-login-button">Login</button>
        </div>
      </div>
        

      <section className="hp-section1">
          <div className="hp-buy-div">
            <p className="hp-heading">BUY A PROPERTY</p>
            <p className="hp-texts">Explore various properties listed for sale around your campus</p>
            <Link className="link" to='/'>
                <button className="hp-button-link">
                    Buy a property
                </button>
              </Link>
          </div>

          <div className="hp-sell-div">
            <p className="hp-heading">SELL A PROPERTY </p>
            <p className="hp-texts">Become a merchant and sell properties on CampusPro.</p>
            <Link className="link" to=''>
                <button className="hp-button-link">
                   Sell a property
                </button>
              </Link>
          </div>

          <div className="hp-rent-div">
            <p className="hp-heading">RENT A PROPERTY </p>
            <p className="hp-texts">Navigate through pletora of hostels around your campus</p>
              <Link className="link" to='/01-rentPage'>
                <button className="hp-button-link">
                    Rent a property
                </button>
              </Link>
          </div>
      </section>

      <p className="hp-view-hostels">View Hostels Around Your Campus</p>
      <div className="hp-school">
          {house}
      </div>
     
    </div>
  )
  }


export default HomePage;
