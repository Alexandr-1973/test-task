import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../../components/CamperCard/CamperCard";
// import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Search from "../../components/Search/Search";
import css from "./CatalogPage.module.css";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/campersFetchFunctions";
import { campersSelector, selectError } from "../../redux/campersSlice";
import { filtersSelector } from "../../redux/filtersSlice";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const campersArray = useSelector(campersSelector);
  const filtersObject=useSelector(filtersSelector).filters;
  const error = useSelector(selectError);
  console.log(error);
  

  console.log(campersArray);

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
        <Search setPage={setPage}/>
        {/* <div> */}
        {/* render CamperCards */}
        {(error || campersArray.length === 0) && <p>Not found</p>}
        {!error && campersArray.length>0 &&
        <div>
        <ul>
          {campersArray.map((item) => {
            return (
              <li key={item._id}>
                <CamperCard item={item} />
              </li>
            );
          })}
        </ul>
        {/* <CamperCard />
      </div> */}
        {campersArray.length === 4 && (
          <button onClick={handleClick}>Load more</button>
        )}

</div>}
      </div>
      {/* <DetailsModal isOpen={isModal} onClose={closeModal} modalFoto={modalFoto} /> */}
    </>
  );
};

export default CatalogPage;
