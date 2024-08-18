import { fetchCamperById } from "../../redux/campersFetchFunctions";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { addToLS } from "../../utils/utils";
import { useEffect, useState } from "react";
import css from "./CamperCard.module.css";
import { renderElemArray } from "../../utils/utils";
import { FiHeart } from "react-icons/fi";
import sprite from "../../images/sprite.svg";
import { setIcon } from "../../utils/setIcon";

const CamperCard = ({ item }) => {
  const {
    name,

    price,
    rating,
    reviews,
    location,
    description,
    _id,
  } = item;

  const elem = ["adults", "automatic", "petrol", "kitchen", "beds", "AC"];

  const renderArray = renderElemArray(elem, item);

  const [classHeart, setClassHeart] = useState();

  useEffect(() => {
    const favoriteCampersLS =
      JSON.parse(localStorage.getItem("favoriteCampers")) || [];
    const isCopy = favoriteCampersLS.some((item) => item._id === _id);
    if (isCopy) {
      setClassHeart("red");
    } else {
      setClassHeart("white");
    }
  }, [_id]);

  const handleClick = async (id) => {
    setClassHeart("red");
    const camper = await fetchCamperById(id);

    addToLS(camper, id);
  };

  return (
    <div className={css.genDiv}>
      <img src={item.gallery[0]} alt="Camper's photo" className={css.img} />
      <div className={css.textBlockDiv}>
        <div className={css.genTitleDiv}>
          <div className={css.titleDiv}>
            <h3 className={css.title}>{name}</h3>
            <div className={css.priceDiv}>
              <p className={css.price}>&euro;{price}</p>
              <button
                className={css.heartButton}
                onClick={() => handleClick(_id)}
              >
                <FiHeart className={css[classHeart]} />
              </button>
            </div>
          </div>
          <div className={css.reviewsDiv}>
            <p className={css.reviewsText}>
              {rating}({reviews.length} reviews)
            </p>
            <p className={css.reviewsLocation}>{location}</p>
          </div>
        </div>
        <div className={css.descriptionDiv}>
          <p className={css.description}>{description}</p>
        </div>
        <ul className={css.elemUl}>
          {renderArray.map((item) => {
            return (
              <li key={renderArray.indexOf(item)} className={css.elemLi}>
                <svg className={css.icon} width="15" height="16">
                  <use href={`${sprite}#${setIcon(item)}`}></use>
                </svg>
                <p className={css.elemP}>{item}</p>
              </li>
            );
          })}
        </ul>

        <ShowMoreButton camperValue={item} />
      </div>
    </div>
  );
};

export default CamperCard;
