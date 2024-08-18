import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../../components/CamperCard/CamperCard";

import Search from "../../components/Search/Search";
import css from "./CatalogPage.module.css";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campersFetchFunctions";
import { campersSelector, selectError } from "../../redux/campersSlice";
import { filtersSelector } from "../../redux/filtersSlice";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const campersArray = useSelector(campersSelector);
  const filtersObject = useSelector(filtersSelector).filters;
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page, filters: filtersObject }));
  }, [page, filtersObject, dispatch]);

  const handleClick = () => {
    if (campersArray.length === 4) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className={css.gendiv}>
        <Search setPage={setPage} />

        {(error || campersArray.length === 0) && <p>Not found</p>}
        {!error && campersArray.length > 0 && (
          <div className={css.cardDiv}>
            <ul className={css.ulCard}>
              {campersArray.map((item) => {
                return (
                  <li key={item._id}>
                    <CamperCard item={item} />
                  </li>
                );
              })}
            </ul>

            {campersArray.length === 4 && (
              <button className={css.moreButton} onClick={handleClick}>
                Load more
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
