import React, { useState } from "react";
import "../AddItems.css";
import { useFormik } from "formik";
import * as yup from "yup";
import campData from "../campus";
import { useNavigate } from "react-router";

const EditItems = (props) => {
  const data = props.data;
  const navigator = useNavigate();
  const [msg, setMsg] = useState("");

  const cancelEdit = (e) => {
    e.preventDefault();

  }
  // const handleClick = () => console.log(msg);

  const formik = useFormik({
    initialValues: {
      itemName: data.itemName,
      price: data.price,
      category: data.category,
      quantity: data.quantity,
      campus: data.campus,
      location: data.location,
      negotiable: data.negotiable,
      description: data.description,
      itemImages: [],
    },

    onSubmit: async (values, { resetForm }) => {
      // console.log(data);
      try {
        const formData = new FormData();
        values.itemImages.forEach((file) => {
          formData.append("itemImages", file);
        });
        formData.append("itemName", values.itemName);
        formData.append("price", values.price);
        formData.append("category", values.category);
        formData.append("quantity", values.quantity);
        formData.append("negotiable", values.negotiable);
        formData.append("campus", values.campus);
        formData.append("location", values.location);
        formData.append("description", values.description);

        const response = await fetch(`/api/item/${data._id}`, {
          method: "PUT",
          body: formData,
        });

        const result = await response.json();
        switch (response.status) {
          case 201:
            alert(result.Message);
            resetForm();
            break;
          case 400:
            alert(result.Message);
            break;
          case 401:
            alert(result.Message);
            navigator("/login");
            break;
          case 403:
            alert(result.Message);
            break;
          case 406:
            setMsg(result.Message);
            break;
          default:
            alert(result.Message);
            break;
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    },
  });

  return (
    <div className="add-items-div">
      <form
        className="add-items-form"
        onSubmit={formik.handleSubmit}
        enctype="multipart/form-data"
        method="put"
      >
        <div>
          <label for="itemName">Item's Name</label>
          <br />
          <input
            className="add-items-inputs"
            placeholder={data.itemName}
            type="text"
            name="itemName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.itemName}
          />
        </div>
        <div>
          <label for="description">Item's Description:</label>
          <br />
          <input
            className="add-items-inputs"
            placeholder={data.description}
            type="text"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </div>

        <div>
          <label for="price">Item's Price:</label>
          <br />
          <input
            className="add-items-inputs"
            placeholder={data.price}
            type="number"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </div>

        <div>
          <label for="quantity">Number of Item:</label>
          <br />
          <input
            className="add-items-inputs"
            placeholder={data.quantity}
            type="number"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
        </div>

        <div>
          <label for="location">
            Item's Location:
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder={data.location}
            type="text"
            name="location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
        </div>

        <div>
          <label for="campus">
            Campus location:
            {/* <span className="add-item-hysteric">*</span> */}
          </label>
          <br />
          {/* <input
            className="add-items-inputs"
            placeholder={data.campus}
            type="text"
            name="campus"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.campus}
          /> */}
          <select className="add-items-inputs"  name="campus"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // value={formik.values.location}
            >
          <option>{data.campus}</option>
          {campData.map((uni,index) => {
            return (
              <option value={uni.abbr} key={index}>
                {uni.abbr}
              </option>
            );
          })}
        </select>
        </div>

        <div>
          <label for="category">Item's Category:</label>
          <br />
          <select
            className="addItem-category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option
              value=""
              className="bp1-input cate-gory gory"
              label="Select a category"
            />

            <hr />
            <option
              value="Clothings"
              className="bp1-input cate-gory"
              label="Clothings"
            />

            <option
              value="Kitchen Utensils"
              className="bp1-input cate-gory"
              label="  Kitchen Utensils"
            />

            <option
              value="Home Appliances"
              className="bp1-input cate-gory"
              label=" Home Appliances"
            />

            <option
              value="Phones & Computers"
              className="bp1-input cate-gory"
              label=" Phones & Computers"
            />

            <option
              value="Electronic Gadgets"
              className="bp1-input cate-gory"
              label="  Electronic Gadgets"
            />

            <option
              value="Books"
              className="bp1-input cate-gory"
              label=" Books"
            />

            <option
              value="Furnitures"
              className="bp1-input cate-gory"
              label=" Furnitures"
            />

            <option
              value="Others"
              className="bp1-input cate-gory"
              label=" Others"
            />
          </select>
        </div>
        {/* <br /> */}
        <div>
          <label>
            <input
              className="add-item-checkbox"
              type="checkbox"
              name="negotiable"
              checked={formik.values.negotiable}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            Is the price negotiable?
          </label>
          {/* <p>Negotiable {isChecked ? "YES" : "NO"}</p> */}
        </div>
        <div className="add-items-images">
          <label for="Items-image">
            Upload items pictures
            <span className="add-item-hysteric">min:3, max:10</span>
            <input
              type="file"
              multiple
              name="itemImages"
              style={{
                display: "block",
                margin: "10px 0",
                border: "1px solid ",
                // padding: ".375rem .75rem",
                width: "25rem",
                cursor: "pointer",
              }}
              onChange={(event) => {
                formik.setFieldValue(
                  "itemImages",
                  Array.from(event.currentTarget.files)
                );
              }}
              onBlur={formik.handleBlur}
            />
          </label>
        </div>

        <div className="edit-item-btn">
          <button type="submit">Add Item</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditItems;
