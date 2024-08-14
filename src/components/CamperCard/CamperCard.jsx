import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

const CamperCard = () => {
  return (
    <div>
      <img
      //   src=
      //   alt="Actor's photo"
      //   className={css.img}
      />
      <div>
        <div>
          <h3>name</h3>
          <p>price</p>
          <button>heartFavorite</button>
        </div>
        <div>
          <p>raiting reviews</p>
          <p>location</p>
        </div>
        <p>description</p>
        <ul>parametresList</ul>
        {/* <button>Show More</button> */}
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default CamperCard;
