import { useEffect, useState } from "react";
import CamperCard from "../../components/CamperCard/CamperCard";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  const [favoriteCampers, setFavoriteCampers] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteCampers"));
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter({}));
  }, [dispatch]);

  console.log(favoriteCampers);

  const handleClick = (id) => {
    const newFavoriteArray = favoriteCampers.filter((item) => item._id !== id);
    localStorage.setItem("favoriteCampers", JSON.stringify(newFavoriteArray));
    setFavoriteCampers(newFavoriteArray);
  };

  return (
    <ul className={css.genUl}>
      {(!favoriteCampers || favoriteCampers.length === 0) && (
        <p>No favorite campers adverts</p>
      )}
      {favoriteCampers &&
        favoriteCampers.map((item) => {
          return (
            <li className={css.genLi} key={item._id}>
              <CamperCard item={item} />
              <button
                className={css.deleteBtn}
                onClick={() => handleClick(item._id)}
              >
                Delete from favorite
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default FavoritePage;
