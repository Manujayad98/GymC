import React from "react";
import "./popup.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <p>Remove "Table Name"</p> 
        </div>
        <div className="body">
          <p>Are you sure you want to delete this record?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button id="removeBtn">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;