import { useSelector } from "react-redux";
import { filtersSelector } from "../../redux/filtersSlice";

const Search = () => {
  const checkBoxArray = Object.keys(useSelector(filtersSelector).equipment);
  console.log(checkBoxArray);

  const radioButtonsArray = Object.keys(useSelector(filtersSelector).type);

  return (
    <div>
      <form>
        <p>location</p>
        <input type="text" />
      </form>
      <div>
        <p>filters</p>
        <h3>vehicle equioment</h3>
        <ul>
          {checkBoxArray.map((item) => {
            return (
              <li key={item}>
                <label>
                  <input type="checkbox" name="equipment" value={item} />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <form>
        <h3>vehicle type</h3>
        <ul>
          {radioButtonsArray.map((item) => {
            return (
              <li key={item}>
                <label>
                  <input type="radio" name="type" value={item} />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
        <button type="submit">Search</button>
      </form>
      
    </div>
  );
};

export default Search;
