import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../../components/CamperCard/CamperCard";
// import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Search from "../../components/Search/Search";
import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersFetchFunctions";
import { campersSelector } from "../../redux/campersSlice";

const CatalogPage = () => {
  const campersArray = useSelector(campersSelector);
  console.log(campersArray);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
     <div className={css.gendiv}>
      <Search />
      {/* <div> */}
        {/* render CamperCards */}


        <ul>
          {
            campersArray.map((item)=>{
              return (
                <li key={item._id}>
                  <CamperCard item={item}/>

                </li>
              )

            })
          }
        </ul>
        {/* <CamperCard />
      </div> */}
    </div>
    {/* <DetailsModal isOpen={isModal} onClose={closeModal} modalFoto={modalFoto} /> */}
    </>
   
  );
};

export default CatalogPage;
