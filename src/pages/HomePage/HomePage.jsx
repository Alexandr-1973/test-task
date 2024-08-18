import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useEffect } from "react";
import css from "./HomePage.module.css"



const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(changeFilter({}));
  },[dispatch])

  return (
    <div className={css.genDiv}>
      <div>
        <img
        //   src=
        //   alt="Actor's photo"
        //   className={css.img}
        />
        <h2 className={css.title}>Campervan and RV Rental</h2>
        <p className={css.desP}>
          Campervanning is popular throughout the world! Our site is the perfect
          place to rent a campervan or RV and hit the road. The idea of the
          iconic road trips still attracts people from far and wide, all wanting
          to experience the splendor of its many landscapes. Curiosity draws in
          local and international crowds to all the wonders that can be found
          throughout the country. If you have a great sense of adventure and a
          love for the outdoors, our site is the perfect place to rental camper
          and enjoy a road trip.
        </p>
      </div>
      <div>
        <img
        //   src=
        //   alt="Actor's photo"
        //   className={css.img}
        />
        <h2 className={css.title}>Become a host</h2>
        <p className={css.desP}>
          Have you considered earning money when you do not use your RV? List
          your vehicle for free and rent it out whenever you want to.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
