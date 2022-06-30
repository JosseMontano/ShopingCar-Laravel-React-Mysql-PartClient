import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";

const Modal = ({edad}) => {
  let refbtnModal = useRef();
  let refWindowsModal = useRef();

  const handleToggleModal = () => {
    refWindowsModal.current.style.display = "block";
  };
  const handleCloseModal = () => {
    refWindowsModal.current.style.display = "none";
  };
  return (
    <>
      <button ref={refbtnModal} onClick={handleToggleModal}>
        Añadir
      </button>
      <div ref={refWindowsModal} className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <p>edad: {edad}</p>
        </div>
      </div>
    </>
  );
}

Modal.defaultProps={
    edad:1
}

export default Modal;
