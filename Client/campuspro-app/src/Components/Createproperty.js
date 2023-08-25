import React, { useState } from "react";
import "../AddItems.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
// import CampusFeatures from "../CampusFeatures";
import Campusfeatures from "./CampusFeatures";

const Createproperty = () => {
  const navigator = useNavigate();
  const [msg, setMsg] = useState("");

  // const handleClick = () => console.log(msg);
  const validationSchema = yup.object({
    description: yup.string().required(" Hostel description is required"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Invalid Price"),
   
    negotiable: yup.boolean(),
    campusName: yup.string().required("Campus name is required"),
    location: yup.string().required("Address field is required"),
    hostelImages: yup
      .array()
      .min(5, "You must upload minimum of 5 pictures")
      .max(10, "You can upload maximum of 10 pictures"),
      houseProperties: yup
      .array()
      .required("You select some features of the hostel")
      
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      price: "",
      campusName: "",
      location: "",
      negotiable: false,  
    hostelImages: [],
    houseProperties: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Handle form submission
      // setMsg(() => values);
      try {
        const formData = new FormData();
        values.hostelImages.forEach((file) => {
          formData.append("Hostel_Images", file);
        });
        values.houseProperties.forEach((feat) => {
          formData.append("houseProperties", feat);
        });
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("negotiable", values.negotiable);
        formData.append("campusName", values.campusName);
        formData.append("location", values.location);
    

        const response = await fetch("/api/uploadItems", {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: formData,
        });

        const result = await response.json();
        switch (response.status) {
          case 201:
            alert(result.Message);
            // navigator("/Dashboard");
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
        resetForm();
      } catch (error) {
        console.error("Error sending data:", error);
      }
      console.log(values);
    },
  });

  return (
    <div className="add-items-div">
      <form
        className="add-items-form"
        onSubmit={formik.handleSubmit}
        enctype="multipart/form-data"
        method="post"
        action="/api/uploadItems"
      >
        {/* <div>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.itemName}
          />
          {formik.touched.itemName && formik.errors.itemName && (
            <p className="addItem-error-message">{formik.errors.itemName}</p>
          )}
        </div> */}
        <div>
          <label for="description">
            Tell us something about the property
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter item description"
            type="text"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="addItem-error-message">{formik.errors.description}</p>
          )}
        </div>

        <div>
          <label for="price">
            What is the Price?<span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter property Price"
            type="number"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price && (
            <p className="addItem-error-message">{formik.errors.price}</p>
          )}
        </div>

        {/* <div>
          <label for="quantity">
            What is the quantity?<span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter number of items"
            type="number"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <p className="addItem-error-message">{formik.errors.quantity}</p>
          )}
        </div> */}

        <div>
          <label for="location">
            Tell us the about the location of the property
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter property address"
            type="text"
            name="location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location && (
            <p className="addItem-error-message">{formik.errors.location}</p>
          )}
        </div>

        <div>
          <label for="campus">
            Which Campus is the property located?
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter the campus name here"
            type="text"
            name="campus"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.campus}
          />
          {formik.touched.campus && formik.errors.campus && (
            <p className="addItem-error-message">{formik.errors.campus}</p>
          )}
        </div>

        {/* <div>
          <label for="category">
            Catogory of the Item<span className="add-item-hysteric">*</span>
          </label>
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
          {formik.touched.category && formik.errors.category && (
            <p className="addItem-error-message">{formik.errors.category}</p>
          )}
        </div> */}
        <Campusfeatures />
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
            <span className="add-item-hysteric">min:5, max:10</span>
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
          {formik.touched.itemImages && formik.errors.itemImages && (
            <p className="addItem-error-message">{formik.errors.itemImages}</p>
          )}
        </div>

        <div className="add-item-btn">
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default Createproperty;