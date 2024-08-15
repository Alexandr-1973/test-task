import { fetchCamperById } from "../../redux/campersFetchFunctions";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { addToLS } from "../../utils/utils";
import { useEffect, useState } from "react";
import css from "./CamperCard.module.css"

const CamperCard = ({ item }) => {
  const { name, price, rating, reviews, location, description, _id } = item;

const [classHeart, setClassHeart] = useState();
  useEffect (()=>{
    const favoriteCampersLS =
    JSON.parse(localStorage.getItem("favoriteCampers")) || [];
    const isCopy = favoriteCampersLS.some((item) => item._id === _id);
    if (isCopy) {
setClassHeart("red");
    }
    else {
      setClassHeart("white");
    }

  },[_id])

  const handleClick = async (id) => {
    setClassHeart("red");
    const camper = await fetchCamperById(id);

    addToLS(camper, id);
    
  };

  return (
    <div>
      <img
      //   src=
      //   alt="Actor's photo"
      //   className={css.img}
      />
      <div>
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <button className = {css[classHeart]} onClick={() => handleClick(_id)}>heartFavorite</button>
        </div>
        <div>
          <p>
            {rating}({reviews.length} reviews){" "}
          </p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <ul>parametresList</ul>
        {/* <button>Show More</button> */}
        <ShowMoreButton id={_id} />
      </div>
    </div>
  );
};

export default CamperCard;
