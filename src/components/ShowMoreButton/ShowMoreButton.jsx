import { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import { fetchCamperById } from "../../redux/campersFetchFunctions";

const ShowMoreButton = ({ id }) => {
  const [camperValue, setCamperValue] = useState();
  const [isModal, setIsModal] = useState(false);

  const handleClick = async (id) => {
    const camper = await fetchCamperById(id);
    console.log(camper);
    setCamperValue(camper);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <button onClick={() => handleClick(id)}>Show more</button>
      <DetailsModal
        isOpen={isModal}
        onClose={closeModal}
        camperValue={camperValue}
      />
    </>
  );
};

export default ShowMoreButton;
