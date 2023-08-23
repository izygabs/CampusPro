import React from "react";
import { useState, useEffect } from "react";
import edit from "../images/edit-icon.png";
import del from "../images/delete-icon.png";
import OverlayComponent from "./OverlayComp";
import AddItems from "./AddItems";
import { useNavigate } from "react-router";
import PropertiesCard from "./PropertiesCard";

const ItemTray = (props) => {
  const navigate = useNavigate();
  const [allProperties, setAllProperties] = useState(true);
  const [newProperties, setNewProperties] = useState(false);
  const [editingProperties, setEditingProperties] = useState(false);
  const [publishedProperties, setPublishedProperties] = useState(false);
  const [unpublishedProperties, setUnpublishedProperties] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [data, setData] = useState([]);
  let url = "";

  function setall() {
    setAllProperties(true);
    setEditingProperties(false);
    setNewProperties(false);
    setPublishedProperties(false);
    setUnpublishedProperties(false);
  }
  function setEditing() {
    setAllProperties(false);
    setEditingProperties(true);
    setNewProperties(false);
    setPublishedProperties(false);
    setUnpublishedProperties(false);
  }
  function setNew() {
    setAllProperties(false);
    setEditingProperties(false);
    setNewProperties(true);
    setPublishedProperties(false);
    setUnpublishedProperties(false);
  }
  function setPublished() {
    setAllProperties(false);
    setEditingProperties(false);
    setNewProperties(false);
    setPublishedProperties(true);
    setUnpublishedProperties(false);
  }
  function setunpublished() {
    setAllProperties(false);
    setEditingProperties(false);
    setNewProperties(false);
    setPublishedProperties(false);
    setUnpublishedProperties(true);
  }

  const handleButtonClicked = (component) => {
    setSelectedComponent(component);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };
  useEffect(() => {
    fetcher();
  }, [fetcher]);
  const fetcher = async () => {
    url = `/api/itemsByMerch/${props.id}`;

    console.log("url :", url);
    try {
      const req = await fetch(url);
      const res = await req.json();
      const info = await res.Items;
      setData(info);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(props.id);
  //   console.log(data);

  return (
    <div className="property-tray">
      <div className="pt-createProperty">
        <h3>Items</h3>
        <button
          className="pt-create-button"
          onClick={() =>
            handleButtonClicked(
              !props.isTokenExp ? navigate("/login") : <AddItems />
            )
          }
        >
          + Create Item
        </button>
      </div>
      <section className="pt-nav-div">
        <div className="pt-nav-btns">
          <button
            className={allProperties ? "pt-nav-btn01" : "pt-nav-btn1"}
            onClick={setall}
          >
            All Item
          </button>
          <button
            className={newProperties ? "pt-nav-btn01" : "pt-nav-btn1"}
            onClick={setNew}
          >
            New
          </button>
          <button
            className={editingProperties ? "pt-nav-btn01" : "pt-nav-btn1"}
            onClick={setEditing}
          >
            Editing
          </button>
          <button
            className={publishedProperties ? "pt-nav-btn01" : "pt-nav-btn1"}
            onClick={setPublished}
          >
            Published
          </button>
          <button
            className={unpublishedProperties ? "pt-nav-btn01" : "pt-nav-btn1"}
            onClick={setunpublished}
          >
            Unpublished
          </button>
        </div>
        <div className="pt-properties-filter">
          <input type="search" placeholder="Search by name or address..." />
        </div>
      </section>

      {!showOverlay ? (
        data ? (
          <section className="pt-properties-display">
            {data.map((data) => {
              return <PropertiesCard data={data} />;
            })}
          </section>
        ) : (
          <div className="pt-empty-array">
            <p>create your first item today</p>
          </div>
        )
      ) : (
        <OverlayComponent
          component={selectedComponent}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};
export default ItemTray;
