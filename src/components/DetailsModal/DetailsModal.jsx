import Modal from "react-modal";
import css from "./DetailsModal.module.css";

import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookForm from "../BookForm/BookForm";
import { useState } from "react";

const DetailsModal = ({ isOpen, onClose, camperValue }) => {
  console.log(camperValue);
  const { name, rating, price, reviews, location, gallery, description } =
    camperValue;

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
      <div className={css.genDiv}>
        <div className={css.titleBlockDiv}>
          <div className={css.titleDiv}>
            <h3 className={css.title}>{name}</h3>
            <button className={css.closeButton} onClick={onClose}>
              X
            </button>
          </div>
          <div className={css.reviewsDiv}>
            <p className={css.reviewsText}>
              {rating}({reviews.length} reviews)
            </p>
            <p className={css.reviewsLocation}>{location}</p>
          </div>
          <p className={css.price}>&euro;{price}</p>
        </div>
        <div className={css.imgDiv}>
          <ul className={css.imgUl}>
            {gallery.map((item) => {
              return (
                <li className={css.imgLi} key={gallery.indexOf(item)}>
                  <img src={item} alt="Camper's photo" className={css.img} />
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div> */}
        <p className={css.descriptionP}>{description}</p>
        {/* </div> */}

        {/* <div className={css.testdiv}>This is testdiv</div> */}
        {/* <img src="" className={css.img} /> */}
        <ul className={css.togleUl}>
          <li className={css[`${isElement}`]}>
            <p className={css.elemP} onClick={() => setIsElement(true)}>
              Features
            </p>
          </li>
          <li className={css[`${!isElement}`]}>
            <p className={css.elemP} onClick={() => setIsElement(false)}>
              Reviews
            </p>
          </li>
        </ul>
        <div className={css.detailsDiv}>
        {isElement && <Features camperValue={camperValue}/>}
        {!isElement && <Reviews />}
        <BookForm />
        </div>
      </div>
    </Modal>
    // </div>
  );
};

export default DetailsModal;
