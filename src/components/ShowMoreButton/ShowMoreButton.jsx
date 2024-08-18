import { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";

import css from "./ShowMoreButton.module.css";

const ShowMoreButton = ({ camperValue }) => {
  const [isModal, setIsModal] = useState(false);

  const handleClick = async () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <button className={css.button} onClick={() => handleClick()}>
        Show more
      </button>
      <DetailsModal
        isOpen={isModal}
        onClose={closeModal}
        camperValue={camperValue}
      />
    </>
  );
};

export default ShowMoreButton;
