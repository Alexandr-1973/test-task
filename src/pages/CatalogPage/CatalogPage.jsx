import CamperCard from "../../components/CamperCard/CamperCard";
import Search from "../../components/Search/Search";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.gendiv}>
      <Search />
      <div>
        {/* render CamperCards */}
        <CamperCard />
      </div>
    </div>
  );
};

export default CatalogPage;
