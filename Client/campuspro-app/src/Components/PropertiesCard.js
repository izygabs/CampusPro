import React, { useState } from "react";
import edit from "../images/edit-icon.png";
import del from "../images/delete-icon.png";
import Modal from "react-modal";
import EditItem from "./EditItem";

// import { useDataContext } from "./DataContext";

const PropertiesCard = (prop) => {
  // const data = prop.data;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [data, setData] = useState(prop.data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //   const { deleter } = useDataContext();
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

    // console.log(resposnse.Message);
    alert("Item deleted");
    setShowConfirmation(false);

    // setTimeout("window.location.reload()", 100);
  };

  return (
    <div key={data._id} className="pt-properties">
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

        <button type="button" class="btn btn-primary" onClick={handleDelete}>
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
          <EditItem  data={data}/>
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
        {/* <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Confirm delete{" "}
                <span className="pt-confirm-btn">{data.itemName}</span>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => deleter(data._id)}
                >
                  <span className="pt-del-text">Confirm</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default PropertiesCard;
