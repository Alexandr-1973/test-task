import CamperCard from "../../components/CamperCard/CamperCard";
// import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Search from "../../components/Search/Search";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
     <div className={css.gendiv}>
      <Search />
      <div>
        {/* render CamperCards */}
        <CamperCard />
      </div>
    </div>
    {/* <DetailsModal isOpen={isModal} onClose={closeModal} modalFoto={modalFoto} /> */}
    </>
   
  );
};

export default CatalogPage;
