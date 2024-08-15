import Modal from "react-modal";
import css from "./DetailsModal.module.css";

import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookForm from "../BookForm/BookForm";
import { useState } from "react";

const DetailsModal = ({ isOpen, onClose, camperValue }) => {
  console.log(camperValue);

  const [isElement, setIsElement] = useState(true);

  return (
    // <div className={css["modal-div"]}>
    <Modal
      overlayClassName={css.overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onClose}
      className={css.modal}
    >
      <div className={css.testdiv}>This is testdiv</div>
      {/* <img src="" className={css.img} /> */}

      <p onClick={() => setIsElement(true)}>Features</p>
      <p onClick={() => setIsElement(false)}>Reviews</p>
      {isElement && <Features />}
      {!isElement && <Reviews />}
      <BookForm />
    </Modal>
    // </div>
  );
};

export default DetailsModal;
