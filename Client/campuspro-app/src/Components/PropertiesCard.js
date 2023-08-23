import React from "react";
import edit from "../images/edit-icon.png";
import del from "../images/delete-icon.png";

const PropertiesCard = (prop) => {
  const data = prop.data;
  return (
    <div key={data._id} className="pt-properties">
      <div className="pt-props-img-div">
        <img className="pt-image" src={`${data.itemPictures[3]}`} />
      </div>
      <div className="pt-props-price-div">
        <p className="pt-texts">Item name</p>
        <p>{data.itemName}</p>
        <p>{data.category}</p>
      </div>
      <div className="pt-props-desc-div">
        <p className="pt-texts">Campus Name</p>
        <p>{data.campus}</p>
      </div>
      <div className="pt-props-campus-div">
        <p className="pt-texts">Apartment Price</p>
        <p>#{Number(data.price).toLocaleString()}</p>
      </div>
      <div className="pt-props-posted-div">
        <button>
          {" "}
          <img className="pt-edit-btn" src={edit} />
        </button>
        <button>
          {" "}
          <img className="pt-delete-btn" src={del} />
        </button>
        <p className="pt-edit">Edit</p>
        <p className="pt-delete">Delete</p>
      </div>
    </div>
  );
};
export default PropertiesCard;
