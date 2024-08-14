// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import Navigation from "./components/Navigation/Navigation";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchCampers } from "./redux/campersFetchFunctions";

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCampers());
  // }, []);


  return (
    <>
      <Navigation />
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />}>
          {/* <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} /> */}
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
