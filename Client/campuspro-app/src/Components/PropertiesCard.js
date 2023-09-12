import React, { useState } from "react";
import edit from "../images/edit-icon.png";
import del from "../images/delete-icon.png";
import Modal from "react-modal";
import AddItems from "./AddItems";

// import { useDataContext } from "./DataContext";

const PropertiesCard = (prop) => {
  // const data = prop.data;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [data, setData] = useState(prop.data);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const editItem = (id, name) => {
    console.log("item name", name);
    console.log("ID", id);
    setModalIsOpen(true);
    openModal();
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  //function to delete a paticular item
  const deleter = async (id) => {
    const url = `/api/item/${id}`;
    const option = { method: "DELETE" };
    let resposnse = await fetch(url, option);

    console.log(resposnse.Message);
    alert("Item deleted");
    setShowConfirmation(false);

    // setTimeout("window.location.reload()", 100);
  };

  return (
  <div>
   {data ? <div key={data._id} className="pt-properties">
      <div className="pt-props-img-div">
        <img className="pt-image" src={`${data.itemPictures[0]}`} />
      </div>
      <div className="pt-props-price-div">
        <p className="pt-texts">Item name</p>
        <p>{data.itemName}</p>
      </div>
      <div className="pt-props-desc-div">
        <p className="pt-texts">Campus Name</p>
        <p>{data.campus}</p>
      </div>
      <div className="pt-props-campus-div">
        <p className="pt-texts">STATUS</p>
        <p>{data.itemStatus}</p>
      </div>
      <div className="pt-props-posted-div">
        <button onClick={() => editItem(data._id, data.itemName)}>
          <img className="pt-edit-btn" src={edit} />
        </button>

        <button
          type="button"
          class="btn btn-primary"
          // Click={() => deleter(data._id)}
          onClick={handleDelete}
        >
          {!showConfirmation && <img className="pt-delete-btn" src={del} />}
        </button>
        {/* <p className="pt-edit">Edit</p> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Success Modal"
          className="editItem_modal"
          overlayClassName="editItem_overlayModal"
        >
          <AddItems />
        </Modal>
        {/* <p className="pt-delete">Delete</p> */}

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}

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
    
    <div>NO Items</div>}
  </div>
  );
};
export default PropertiesCard;
