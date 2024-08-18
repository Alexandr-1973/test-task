import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";

const Reviews = ({ camperValue }) => {
  const keyArray = [1, 2, 3, 4, 5];

  return (
    <ul className={css.genUl}>
      {camperValue.reviews.map((item) => {
        return (
          <li key={camperValue.reviews.indexOf(item)}>
            <div className={css.nameDiv}>
              <p className={css.nameA}>{item.reviewer_name[0]}</p>
              <div className={css.starDiv}>
                <h4 className={css.name}>{item.reviewer_name}</h4>
                <ul className={css.starUl}>
                  {keyArray.map((num) => {
                    return (
                      <li key={keyArray.indexOf(num)}>
                        <FaStar
                          className={
                            css[
                              `${
                                num <= item.reviewer_rating ? "yellow" : "gray"
                              }`
                            ]
                          }
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p className={css.comment}>{item.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
