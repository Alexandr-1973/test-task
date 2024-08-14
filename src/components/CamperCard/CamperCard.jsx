import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

const CamperCard = ({item}) => {


  const {name, price, rating, reviews, location, description}=item;
  return (
    <div>
      <img
      //   src=
      //   alt="Actor's photo"
      //   className={css.img}
      />
      <div>
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <button>heartFavorite</button>
        </div>
        <div>
          <p>{rating}({reviews.length} reviews) </p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <ul>parametresList</ul>
        {/* <button>Show More</button> */}
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default CamperCard;
