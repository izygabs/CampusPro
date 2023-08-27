import React from 'react'
import campus1 from './images/campus1.jpg'
import offcampus2 from './images/offcampus2.jpg'
import offcampus3 from './images/offcampus3.jpg'
import items from './images/items.jpg'
import item2 from './images/item2.jpg'
import items3 from './images/items3.jpg'
import './OurServices.css'

const OurServices = () => {
  return (
    <div className='fp-container_header'>
      <div className='fp-p-main'>
        <p className='fp-p1'>Our services is basically connecting buyers to sellers.
          We connect fresh students who are looking for accomodation around the their 
          campuses in order to avoid long distance away from their respective campuses.
        </p>
        <p className='fp-p2'>We also connect newly admitted students who wished to buy learning materials
          from the graduating students who want to sell off their items such as textbooks,
          drawing sheets, as well as household materials such as mattress and electronics 
        </p>
      </div>
      <div className='fp-campus-image'>
        <h4 className='h-apartment'>Apartments</h4>
        <img className='fp-camp1' src={campus1} alt='campus image' />
        <img className='fp-camp2' src={offcampus2} alt='campus image' />
        <img className='fp-camp3' src={offcampus3} alt='campus image' />
      </div>
      <div className='fp-items'>
        <h4 className='h-t'>Items</h4>
        <img className='item-one' src={items} alt='item image'/>
        <img className='item-two' src={item2} alt='item image'/>
        <img className='item-three' src={items3} alt='item image'/>
      </div>
    </div>
  )
}

export default OurServices