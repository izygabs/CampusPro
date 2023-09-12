import React, { useState } from "react";
import edit from "../images/edit-icon.png";
import del from "../images/delete-icon.png";

const PropertiesCard2 = (prop) => {
  const data = prop.data;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };


  //function to delete a paticular item
  const deleter = (id)=>{
    const url= `/api/property/${id}`
    const option = {method : "DELETE"}
    fetch(url, option)
    .then(res => console.log(res.status))
   
    alert(`item deleted successfully`)
    setTimeout("window.location.reload()",1000);
    }
    
// console.log(data)
  return (
<div>
    { data? <div key={data._id} className="pt-properties">
      <div className="pt-props-img-div">
        <img className="pt-image" src={`${data.hostelImages[0]}`} />
      </div>
      <div className="pt-props-price-div">
        <p className="pt-texts">Hostel Type</p>
        <p>{data.hostelFeatures[0]}</p>
    
      </div>
      <div className="pt-props-desc-div">
        <p className="pt-texts">Campus Name</p>
        <p>{data.campusName}</p>
      </div>
      <div className="pt-props-campus-div">
        <p className="pt-texts">STATUS</p>
        <p>{data.hostelStatus}</p>
      </div>
      <div className="pt-props-posted-div">
        <button>
          <img className="pt-edit-btn" src={edit} />
        </button>
      
        <button type="button" class="btn btn-primary" onClick={handleDelete} >
           {!showConfirmation && <img className="pt-delete-btn" src={del} />}
        </button>
        {/* <p className="pt-edit">Edit</p> */}

        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>{`Are you sure you want to delete?`}</p>

            <button
              onClick={() => deleter(data._id, data)}
              className="deleteButton"
            >
              Yes
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="deleteButton"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>: 
     <div> No Properties</div> }
    </div>
  );
};
export default PropertiesCard2;
