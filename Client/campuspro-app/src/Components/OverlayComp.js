import React from "react";

function OverlayComponent({ component, onClose }) {
  return (
    <div className="overlay">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="overlay-content">{component}</div>
    </div>
  );
}

export default OverlayComponent;
