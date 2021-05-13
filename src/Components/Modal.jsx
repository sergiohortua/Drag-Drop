import React from "react";
import ReactDOM from "react-dom";
import "../style/Modal.css";
import ClassBoard from "./ClassBoard";

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        <ClassBoard />
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
