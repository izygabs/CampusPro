import React from "react";
import edit from "../images/edit-icon.png";
import del from "../images/delete-icon.png";

const PropertiesCard = (prop) => {
  const data = prop.data;

  //function to delete a paticular item
  const deleter = (id) => {
    console.log("item id", id);
    const url = `/api/item/${id}`;
    const option = { method: "DELETE" };
    fetch(url, option).then((res) => console.log(res.status));

    alert(`item deleted successfully`);
    setTimeout(window.location.reload(), 1000);
  };

  // console.log(data)
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
        <button>
          {" "}
          <img className="pt-edit-btn" src={edit} />
        </button>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img className="pt-delete-btn" src={del} />
        </button>
        <p className="pt-edit">Edit</p>
        {/* <p className="pt-delete">Delete</p> */}

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div
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
        </div>
      </div>
    </div>
  );
};
export default PropertiesCard;
