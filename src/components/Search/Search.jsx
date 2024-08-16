import { useSelector } from "react-redux";
import { filtersSelector } from "../../redux/filtersSlice";

const Search = () => {
  const checkBoxArray = Object.keys(useSelector(filtersSelector).equipment);
  console.log(checkBoxArray);
  // const checkBoxArray = [];

  const radioButtonsArray = Object.keys(useSelector(filtersSelector).type);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("kuku");

    const formData = new FormData(e.target);
    console.log(formData.getAll("formData"));
    // console.log(Object((formData.get("example")));

    const filtersArray = formData.getAll("formData");

    const filtersObject = (filtersArray) => {
      let paramsObject = {
        location: filtersArray[0],
      };

      for (let i = 1; i <= filtersArray.length - 1; i += 1) {
        if (filtersArray[i] === "AC") {
          paramsObject = {
            AC: 1,
            ...paramsObject,
          };
        }
        if (filtersArray[i] === "Automatic") {
          paramsObject = {
            transmission: "automatic",
            ...paramsObject,
          };
        }

        if (filtersArray[i] === "Kitchen") {
          paramsObject = {
            kitchen: 1,
            ...paramsObject,
          };
        }
        if (filtersArray[i] === "TV") {
          paramsObject = {
            TV: 1,
            ...paramsObject,
          };
        }
        if (filtersArray[i] === "Shower/WC") {
          paramsObject = {
            shower: 1,
            ...paramsObject,
          };
        }

        if (filtersArray[i] === "Van") {
          paramsObject = {
            form: "panelTruck",
            ...paramsObject,
          };
        }
        if (filtersArray[i] === "Fully Integrated") {
          paramsObject = {
            form: "fullyIntegrated",
            ...paramsObject,
          };
        }
        if (filtersArray[i] === "Alcove") {
          paramsObject = {
            form: "alcove",
            ...paramsObject,
          };
        }
      }
      return paramsObject;
    };
    console.log(filtersObject(filtersArray));
  };

  return (
    <div>
      <form id="formElem" onSubmit={(e) => onSubmit(e)}>
        <p>location</p>
        <input type="text" name="formData" />

        <div>
          <p>filters</p>
          <h3>vehicle equioment</h3>
          <ul>
            {checkBoxArray.map((item) => {
              return (
                <li key={item}>
                  <label>
                    <input type="checkbox" name="formData" value={item} />
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <h3>vehicle type</h3>
        <ul>
          {radioButtonsArray.map((item) => {
            return (
              <li key={item}>
                <label>
                  <input type="radio" name="formData" value={item} />
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
