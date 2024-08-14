import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navagation = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : css["nav-link"])}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? css.active : css["nav-link"])}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? css.active : css["nav-link"])}
      >
        Favorite
      </NavLink>
    </nav>
  );
};

export default Navagation;
