import React, { useState } from "react";

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
          <label for="itemName">
            Item Name:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter item Name"
            type="text"
            name="itemName"
            value={formData.itemName}
          />
          {error.itemName && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>
        <div>
          <label for="description">
            Description:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter item description"
            type="text"
            name="description"
            value={formData.description}
          />
          {error.description && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="price">
            Price:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter item Price"
            type="text"
            name="price"
            value={formData.price}
          />
          {error.price && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="quantity">
            No of Items:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter number of items"
            type="text"
            name="quantity"
            value={formData.quantity}
          />
          {error.quantity && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="location">
            Address:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter item's address"
            type="text"
            name="location"
            value={formData.location}
          />
          {error.location && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="campus">
            Address:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter the campus name here"
            type="text"
            name="campus"
            value={formData.campus}
          />
          {error.campus && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>

        <div>
          <label for="category">
            Category<span className="add-item-hysteric">*</span>
          </label>
          <select
            className="bp1-select"
            name="category"
            value={formData.category}
          >
            <option value="0" className="bp1-input cate-gory gory">
              Category
            </option>
            <hr />
            <option value="Clothings" className="bp1-input cate-gory">
              Clothings
            </option>
            <option value="Kitchen Utensils" className="bp1-input cate-gory">
              Kitchen Utensils
            </option>
            <option value="Mattress & Beddings" className="bp1-input cate-gory">
              Mattress & Beddings
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
            <option value="Others" className="bp1-input cate-gory">
              Others
            </option>
          </select>
          {error.category && (
            <span className="addItems-error-message">{error.message}</span>
          )}
        </div>
        <div>
          <label for="negotiable">
            Address:<span className="add-item-hysteric">*</span>
          </label>
          <input
            placeholder="Enter number of items"
            type="text"
            name="location"
            value={formData.location}
          />
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              // onChange={handleCheckboxChange}
            />
            Is the price negotiable?
          </label>
          {/* <p>Negotiable {isChecked ? "YES" : "NO"}</p> */}
        </div>
      </form>
    </div>
  );
};

export default AddItems;
