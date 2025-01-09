import React, { useEffect, useState } from "react";
import "./CampusFeatures.css";
import "../AddItems.css";
import { useFormik } from "formik";
import * as yup from "yup";
import campData from "../campus";
import { useNavigate } from "react-router";
// import CampusFeatures from "../CampusFeatures";
import Campusfeatures from "./CampusFeatures";

const Createproperty = () => {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
  };
  const navigator = useNavigate();
  const [msg, setMsg] = useState("");

  // const handleClick = () => console.log(msg);
  const validationSchema = yup.object({
    description: yup
      .string()
      .required(" Description about the hostel is required"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Invalid Price"),
    negotiable: yup.boolean(),
    campusName: yup.string().required("Campus is Required"),
    location: yup.string().required("Address field is required"),
    hostelImages: yup
      .array()
      .min(5, "You must upload minimum of 5 pictures")
      .max(10, "You can upload maximum of 10 pictures"),
    hostelFeatures: yup
      .array()
      .min(3, "Minimum of 3 features must be selected"),
  });

  const handleCheckboxChange = (option) => {
    formik.setFieldValue(
      "hostelFeatures",
      formik.values.hostelFeatures.includes(option)
        ? formik.values.hostelFeatures.filter((item) => item !== option)
        : [...formik.values.hostelFeatures, option]
    );
  };
  const formik = useFormik({
    initialValues: {
      description: "",
      price: "",
      campusName: "",
      location: "",
      negotiable: false,
      hostelImages: [],
      hostelFeatures: [],
    },

    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Handle form submission
      // setMsg(() => values);
      console.log("Testing");

      try {
        const formData = new FormData();
        values.hostelImages.forEach((file) => {
          formData.append("hostelImages", file);
        });
        values.hostelFeatures.forEach((feat) => {
          formData.append("hostelFeatures", feat);
        });
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("negotiable", values.negotiable);
        formData.append("campusName", values.campusName);
        formData.append("location", values.location);

        const response = await fetch("/api/uploadProperties", {
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
            resetForm();

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
        action="/api/uploadProperties"
      >
        <div>
          <label for="description">
            Property Description
            <span className="add-item-hysteric">*</span>
          </label>
          <br />
          <input
            className="add-items-inputs"
            placeholder="Enter property description"
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

        <div>
          <label for="location">
            Property Location
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
         

          <select className="add-items-inputs"  name="campusName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // value={formik.values.location}
            >
          <option>Select Campus</option>
          {campData.map((uni,index) => {
            return (
              <option value={uni.abbr} key={index}>
                {uni.abbr}
              </option>
            );
          })}
        </select>
          {formik.touched.campus && formik.errors.campus && (
            <p className="addItem-error-message">{formik.errors.campus}</p>
          )}
        </div>

        {/* <Campusfeatures /> */}
        <section className="section-1">
          <h1 className="cam">Campus Features: </h1>

          <div className="CP-checkbox-div">
            <div className="cpt-chechbox-div">
              <input
                type="checkbox"
                name="hostelFeatures"
                value="2 bedroom"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "2 bedroom"}
                onChange={() => handleCheckboxChange("2 bedroom")}
              />
              <label htmlFor="hostelFeatures" id="input">
                2 bedroom
              </label>
              {/* </div>

            <div className="cpty-chechbox-div"> */}
              <input
                type="checkbox"
                name="hostelFeatures"
                value="3 bedroom"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "3 bedroom"}
                onChange={() => handleCheckboxChange("3 bedroom")}
              />
              <label htmlFor="" id="input">
                1 bedroom
              </label>
              <input
                type="checkbox"
                name="hostelFeatures"
                value="24hrs Electricity"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "24hrs Electricity"}
                onChange={() => handleCheckboxChange("24hrs Electricity")}
              />
              <label htmlFor="" id="input">
                4 bedroom
              </label>
              <input
                type="checkbox"
                name="hostelFeatures"
                value="24hrs Electricity"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "24hrs Electricity"}
                onChange={() => handleCheckboxChange("24hrs Electricity")}
              />
              <label htmlFor="" id="input">
                2 bedroom
              </label>
              <input
                type="checkbox"
                name="hostelFeatures"
                value="24hrs Electricity"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "24hrs Electricity"}
                onChange={() => handleCheckboxChange("24hrs Electricity")}
              />
              <label htmlFor="" id="input">
                self contain apartment
              </label>
              <input
                type="checkbox"
                name="hostelFeatures"
                value="24hrs Electricity"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "24hrs Electricity"}
                onChange={() => handleCheckboxChange("24hrs Electricity")}
              />
              <label htmlFor="hostelFeatures" id="input">
                24hrs Electricity
              </label>

              {/* <div className="cpty-chechbox-div"> */}

              {/* </div>

            <div className="cpty-chechbox-div"> */}
            </div>

            <div className="cpt-chechbox-div">
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Gym"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Gym"}
                onChange={() => handleCheckboxChange("Gym")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Gym
              </label>
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Security Guard"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Security Guard"}
                onChange={() => handleCheckboxChange("Security Guard")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Security Guard
              </label>
              <input
                type="checkbox"
                name="hostelFeatures"
                value="CCTV camera"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "CCTV camera"}
                onChange={() => handleCheckboxChange("CCTV camera")}
              />
              <label htmlFor="hostelFeatures" id="input">
                CCTV camera
              </label>
              {/* </div>

            <div className="cpty-chechbox-div"> */}
            </div>

            <div className="cpt-chechbox-div">
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Air Conditioned"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Air Conditioned"}
                onChange={() => handleCheckboxChange("Air Conditioned")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Air Conditioned
              </label>
              {/* </div>

            <div className="cpty-chechbox-div"> */}
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Swimming Pool"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Swimming Pool"}
                onChange={() => handleCheckboxChange("Swimming Pool")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Swimming Pool
              </label>
              {/* </div>

            <div className="cpty-chechbox-div"> */}
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Parking Space"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Parking Space"}
                onChange={() => handleCheckboxChange("Parking Space")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Parking Space
              </label>
            </div>

            <div className="cpt-chechbox-div">
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Laundry room"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Laundry room"}
                onChange={() => handleCheckboxChange("Laundry room")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Laundry room
              </label>
              {/* </div>

            <div className="cpty-chechbox-div"> */}
              <input
                type="checkbox"
                name="hostelFeatures"
                value="Internet"
                id="hostelFeatures"
                // checked={formik.values.hostelFeatures === "Internet"}
                onChange={() => handleCheckboxChange("Internet")}
              />
              <label htmlFor="hostelFeatures" id="input">
                Internet
              </label>
            </div>
          </div>

          <button type="button" onClick={handleChange} className="feat-btn">
            {!change ? "See more features" : "Hide features"}
          </button>
          <br />
          {change && (
            <div>
              <div className="cpt-chechbox-div">
                <input
                  type="checkbox"
                  name="hostelFeatures"
                  value="Near by Supermarket"
                  id="hostelFeatures"
                  // checked={
                  //   formik.values.hostelFeatures === "Near by Supermarket"
                  // }
                  onChange={() => handleCheckboxChange("Near by Supermarket")}
                />
                <label htmlFor="hostelFeatures" id="input">
                  Near by Supermarket
                </label>
                {/* </div>

              <div className="cpty-chechbox-div"> */}
                <input
                  type="checkbox"
                  name="hostelFeatures"
                  value="Near by Bank"
                  id="hostelFeatures"
                  // checked={formik.values.hostelFeatures === "Near by Bank"}
                  onChange={() => handleCheckboxChange("Near by Bank")}
                />
                <label htmlFor="hostelFeatures" id="input">
                  Near by Bank
                </label>
                {/* </div>

              <div className="cpty-chechbox-div"> */}
                <input
                  type="checkbox"
                  name="hostelFeatures"
                  value="Near by Hospital"
                  id="hostelFeatures"
                  // checked={formik.values.hostelFeatures === "Near by Hospital"}
                  onChange={() => handleCheckboxChange("Near by Hospital")}
                />
                <label htmlFor="hostelFeatures" id="input">
                  Near by Hospital
                </label>
              </div>
              {/* <br /> */}

              <div className="cpt-chechbox-div">
                <input
                  type="checkbox"
                  name="hostelFeatures"
                  value="Near by Mall"
                  id="hostelFeatures"
                  // checked={formik.values.hostelFeatures === "Near by Mall"}
                  onChange={() => handleCheckboxChange("Near by Mall")}
                />
                <label htmlFor="hostelFeatures" id="input">
                  Near by Mall
                </label>
                {/* </div>

              <div className="cpty-chechbox-div"> */}
                <input
                  type="checkbox"
                  name="hostelFeatures"
                  value="Near by Church"
                  id="hostelFeatures"
                  // checked={formik.values.hostelFeatures === "Near by Church"}
                  onChange={() => handleCheckboxChange("Near by Church")}
                />
                <label htmlFor="hostelFeatures" id="input">
                  Near by Church
                </label>
                {/* </div>

              <div className="cpty-chechbox-div"> */}
                <input
                  type="checkbox"
                  name="hostelFeatures"
                  value="Well fenced"
                  id="hostelFeatures"
                  // checked={formik.values.hostelFeatures === "Well fenced"}
                  onChange={() => handleCheckboxChange("Well fenced")}
                />
                <label htmlFor="hostelFeatures" id="input">
                  {" "}
                  Well fenced
                </label>
              </div>
            </div>
          )}
        </section>
        {formik.touched.hostelFeatures && formik.errors.hostelFeatures ? (
          <div className="addItem-error-message">
            {formik.errors.hostelFeatures}
          </div>
        ) : null}
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
              name="hostelImages"
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
                  "hostelImages",
                  Array.from(event.currentTarget.files)
                );
              }}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.hostelImages && formik.errors.hostelImages && (
            <p className="addItem-error-message">
              {formik.errors.hostelImages}
            </p>
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
