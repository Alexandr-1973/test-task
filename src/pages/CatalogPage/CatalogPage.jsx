import CamperCard from "../../components/CamperCard/CamperCard";
import Search from "../../components/Search/Search";

const CatalogPage = () => {
    return <div>
        <Search />
        <div>
            {/* render CamperCards */}
            <CamperCard />
        </div>
  </div>;
};

export default CatalogPage;
