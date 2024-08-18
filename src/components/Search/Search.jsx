import { useDispatch } from "react-redux";
import { filtersObject } from "../../utils/utils";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./Search.module.css";
import sprite from "../../images/sprite.svg";
import { setIcon } from "../../utils/setIcon";

const Search = ({ setPage }) => {
  const dispatch = useDispatch();
  

  const checkBoxArray = ["AC", "Automatic", "Kitchen", "TV", "Shower/WC"];

  const radioButtonsArray = ["Van", "Fully Integrated", "Alcove"];

  const onSubmit = (e) => {
    e.preventDefault();

    

    const formData = new FormData(e.target);
    

    const filtersArray = formData.getAll("formData");

    setPage(1);
    dispatch(changeFilter(filtersObject(filtersArray)));
  };

  return (
    <div className={css.genDiv}>
      <form className={css.form} id="formElem" onSubmit={(e) => onSubmit(e)}>
        <div>
          <p className={css.locationP}>Location</p>
          <input className={css.location} type="text" name="formData" />
        </div>
        <div>
          <p className={css.filtersP}>filters</p>
          <h3 className={css.equipmentH}>Vehicle equipment</h3>
          <ul className={css.checkBoxUl}>
            {checkBoxArray.map((item) => {
              return (
                <li key={item}>
                  <label className={css.radioLabel}>
                    <input
                      className={css.customCheckBox}
                      type="checkbox"
                      name="formData"
                      value={item}
                    />
                    <span className={css.span}>
                      <svg className={css.icon} width="33" height="33">
                        <use href={`${sprite}#${setIcon(item)}`}></use>
                      </svg>

                      {item}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <h3 className={css.equipmentTypeH}>Vehicle type</h3>
        <ul className={css.radioUl}>
          {radioButtonsArray.map((item) => {
            return (
              <li className={css.radioLi} key={item}>
                <label className={css.radioLabel}>
                  <input
                    className={css.customCheckBox}
                    type="radio"
                    name="formData"
                    value={item}
                  />
                  <span className={css.span}>
                    <svg className={css.icon} width="33" height="33">
                      <use href={`${sprite}#${setIcon(item)}`}></use>
                    </svg>

                    {item}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        <button className={css.formButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
