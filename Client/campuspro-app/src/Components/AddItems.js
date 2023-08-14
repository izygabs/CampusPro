import React, { useState } from "react";
import "../AddItems.css";

const AddItems = (prop) => {
  const [formData, setFormdate] = useState({
    itemName: "",
    price: "",
    category: "",
    quantity: " ",
    campus: "",
    location: "",
    negotiable: "",
    description: "",
  });

  const [error, setError] = useState({});
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="add-items-div">
      <form className="add-items-form" onSubmit={prop.submit}>
        <div>
          <p id="requiredInfo">* are required fields</p>
          <label for="itemName">
            Name of the item<span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter item Name"
            type="text"
            name="itemName"
            // value={formData.itemName}
          />
          {error.itemName && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>
        <div>
          <label for="description">
            Tell us something about the item
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter item description"
            type="text"
            name="description"
            // value={formData.description}
          />
          {error.description && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="price">
            What is the Price?<span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter item Price"
            type="number"
            name="price"
            // value={formData.price}
          />
          {error.price && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="quantity">
            What is the quantity?<span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter number of items"
            type="number"
            name="quantity"
            // value={formData.quantity}
          />
          {error.quantity && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="location">
            Tell us the about the location of the item
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter item's address"
            type="text"
            name="location"
            // value={formData.location}
          />
          {error.location && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="campus">
            Which Campus is the item located?
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter the campus name here"
            type="text"
            name="campus"
            // value={formData.campus}
          />
          {error.campus && (
            <p className="addItems-error-message">error.message</p>
          )}
        </div>

        <div>
          <label for="category">
            Catogory of the Item<span className="add-item-hysteric">*</span>
          </label>
          <br />
          <select
            className="addItem-category"
            name="category"
            // value={formData.category}
          >
            <option value="" className="bp1-input cate-gory gory">
              Select the category
            </option>
            <hr />
            <option value="Clothings" className="bp1-input cate-gory">
              Clothings
            </option>
            <option value="Kitchen Utensils" className="bp1-input cate-gory">
              Kitchen Utensils
            </option>
            <option value="Home Appliances" className="bp1-input cate-gory">
              Home Appliances
            </option>
            <option value="Phones & Computers" className="bp1-input cate-gory">
              Phones & Computers
            </option>
            <option value="Electronic Gadgets" className="bp1-input cate-gory">
              Electronic Gadgets
            </option>
            <option value="Books" className="bp1-input cate-gory">
              Books
            </option>
            <option value="Furnitures" className="bp1-input cate-gory">
              Furnitures
            </option>
            <option value="Others" className="bp1-input cate-gory">
              Others
            </option>
          </select>
          {error.category && (
            <p className="addItems-error-message">error.message</p>
          )}
        </div>
        {/* <br /> */}
        <div>
          <label>
            <input
              className="add-item-checkbox"
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckboxChange}
            />
            Is the price negotiable?
          </label>
          {/* <p>Negotiable {isChecked ? "YES" : "NO"}</p> */}
        </div>
        <div className="add-item-btn">
          <button onSubmit="">Add Item</button>
        </div>
      </form>
      <form className="add-items-images">
        <label for="Items-image">
          Upload items pictures<span className="add-item-hysteric">*</span>
        </label>
        <input type="file" name="itemImages" />
      </form>
    </div>
  );
};

export default AddItems;
