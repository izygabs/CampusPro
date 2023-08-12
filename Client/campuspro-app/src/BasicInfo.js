import React from 'react';



const BasicInfo = () => {

  return (
    <div className="main">
      <form className="form">
        <label for='property' className='bi-prop-type'>Before Start, tell us what's your property type</label><br/>
        <select>
          <input type="text" name="" id="" placeholder='Please name your property' />
          <option value='1'>2 bedroom apartment</option>
          <option value='2'>3 bedroom apartment</option>
          <option value='2'>face-me bedroom apartment</option>
          <option value='3'>4 bedroom apartment</option>
        </select>
          <br/>
        <label for='description' className='bi-desc'>Description</label><br/>
        <input type="text" name="" id="" placeholder='Describe your property'/>
          <br/>
        <label for='price' className='bi-price'>Price</label><br/>
        <input type="number" name="price" id="price" /><br/>

        <label for='campus' className='bi-location'>Campus Location</label><br/>
        <input type="text" name="location" id="location" /><br/>

        <label for='image' className='images'>Upload your Property image</label><br/>
        <input type="file" name="image" id="upload" />
      </form>
    </div>
  )
}

export default BasicInfo;