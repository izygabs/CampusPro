import React, { useState } from "react";

const AddItems = (prop) => {
  const [itemName, setItemName] = useState("");
  const [price, setItemPrice] = useState("");
  const [category, setItemCategory] = useState("");
  const [description, setItemDescription] = useState("");
  const [quantity, setItemQuantity] = useState("");
  const [campus, setItemCampus] = useState("");
  const [location, setItemLocation] = useState("");
  const [negotiable, setItemNegotiable] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="add-items-div">
      <form className="add-items-form" onSubmit={prop.submit}>
        <label for="item-name">
          Item Name<span className="add-item-hysteric">*</span>
        </label>
        <input
          placeholder="Enter item Name"
          type="text"
          name="itemName"
          value={itemName}
        />
        <span>{message}</span>
        <br />
        <label for="item-description">
          Description<span className="add-item-hysteric">*</span>
        </label>
        <input
          placeholder="Enter item description"
          type="text"
          name="description"
          value={description}
        />
        <span>{message}</span>
        <br />
        <label for="item-price">
          Price<span className="add-item-hysteric">*</span>
        </label>
        <input
          placeholder="Enter item Price"
          type="text"
          name="price"
          value={price}
        />
        <span>{message}</span>
        <br />
        <label for="item-quantity">
          No of Items<span className="add-item-hysteric">*</span>
        </label>
        <input
          placeholder="Enter number of items"
          type="text"
          name="itemName"
          value={quantity}
        />
        <span>{message}</span>
        <br />
        <label for="item-quantity">
          No of Items<span className="add-item-hysteric">*</span>
        </label>
        <input
          placeholder="Enter number of items"
          type="text"
          name="itemName"
          value={quantity}
        />
        <span>{message}</span>
        <br />
        <label for="item-quantity">
          No of Items<span className="add-item-hysteric">*</span>
        </label>
        <select className="bp1-select" name="category">
          <option value="0" className="bp1-input cate-gory gory">
            Category
          </option>
          <hr />
          <option value="1" className="bp1-input cate-gory">
            Spoons
          </option>
          <option value="2" className="bp1-input cate-gory">
            Electric Gas
          </option>
          <option value="3" className="bp1-input cate-gory">
            Mattress
          </option>
          <option value="4" className="bp1-input cate-gory">
            Electric iron
          </option>
          <option value="5" className="bp1-input cate-gory">
            House
          </option>
          <option value="6" className="bp1-input cate-gory">
            Car
          </option>
          <option value="7" className="bp1-input cate-gory">
            Ringlight
          </option>
          <option value="8" className="bp1-input cate-gory">
            Mp3 speaker
          </option>
          <option value="9" className="bp1-input cate-gory">
            Lands
          </option>
        </select>
      </form>
    </div>
  );
};

export default AddItems;
