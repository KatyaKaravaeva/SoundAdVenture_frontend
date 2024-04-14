import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import cancelIcon from "../../asserts/images/cancel.svg";

const Modal = ({ isOpen, isDone, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  if (!isModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={style.modal}>
        <div
          className={isDone ? style.modal_content : style.modal_content_not_all}
        >
          <button className={style.close_button} onClick={closeModal}>
            <img src={cancelIcon} alt="Close" />
          </button>
          <div className={style.content}>{children}</div>
          <div className={style.buttons}>
            <button className={style.button} onClick={closeModal}>
              Ок
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
