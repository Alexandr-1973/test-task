import { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import { fetchCamperById } from "../../redux/campersFetchFunctions";
import css from "./ShowMoreButton.module.css"

const ShowMoreButton = ({ camperValue }) => {
  // const [camperValue, setCamperValue] = useState();
  const [isModal, setIsModal] = useState(false);

  const handleClick = async () => {
    // const camper = await fetchCamperById(id);
    // console.log(camper);
    // setCamperValue(camper);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <button className={css.button} onClick={() => handleClick()}>Show more</button>
      <DetailsModal
        isOpen={isModal}
        onClose={closeModal}
        camperValue={camperValue}
      />
    </>
  );
};

export default ShowMoreButton;
