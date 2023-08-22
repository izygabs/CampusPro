import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

function Editing() {
  const [editing, setEditing] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    if (!editing) setEditing(true);
    else setEditing(false);
  };

  const formik = useFormik({
    staticValues: {
      Description: "",
      Price: "",
      Campus: "",
      Location: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/property/:id", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.status === 201) {
          alert(data.message);
        } else if (response.status === 422) {
          alert(data.error);
        }
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div>
        <p>Edit</p>
        <button onClick={handleEditClick}>
          {!editing ? "Edit" : "Cancel"}
        </button>
      </div>
      {!editing ? (
        <hr />
      ) : (
        <div>
          <form className="ed-form" onSubmit={formik.handleEditClick}>
            <label>
              Description:
              <br />
              <input
                type="text"
                name="Description"
                onChange={formik.handleChange}
                // value={formik.values.Description}
                placeholder="Enter property description"
              />
            </label>
            <br />
            <label>
              Price: <br />
              <input
                type="text"
                name="Price"
                onChange={formik.handleChange}
                // value={formik.values.Price}
                placeholder="Enter property price "
              />
            </label>
            <br />
            <label>
              Location: <br />
              <input
                type="text"
                name="Location"
                onChange={formik.handleChange}
                // value={formik.values.Location}
                placeholder="Enter property location"
              />
            </label>
            <br />
            <label>
              Campus: <br />
              <input
                type="text"
                name="Campus"
                onChange={formik.handleChange}
                // value={formik.values.Campus}
                placeholder="Enter the campus name here "
              />
            </label>
          </form>
          <button className="ed-btn" type="submit">
            Confirm
          </button>
        </div>
      )}
    </>
  );
}

export default Editing;
