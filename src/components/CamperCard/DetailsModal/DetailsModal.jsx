import Modal from "react-modal";
import css from "./DetailsModal.module.css";

const DetailsModal = ({ isOpen, onClose, modalFoto }) => {
  return (
    <div className={css["modal-div"]}>
      <Modal
        overlayClassName={css.overlay}
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={onClose}
        className={css.modal}
      >
        <img src={modalFoto} className={css.img} />
      </Modal>
    </div>
  );
};

export default DetailsModal;
