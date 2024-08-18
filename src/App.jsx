import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
