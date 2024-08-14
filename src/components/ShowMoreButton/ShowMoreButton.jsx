import { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";


const ShowMoreButton=()=>{

	const [isModal, setIsModal] = useState(false);

	const closeModal = () => {
		setIsModal(false);
	  };

	return(
		<>
		<button onClick={()=>{setIsModal(true)}}>Show more</button>
		<DetailsModal isOpen={isModal} onClose={closeModal} />
		</>
	)
}

export default ShowMoreButton;