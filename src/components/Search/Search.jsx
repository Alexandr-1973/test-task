import { useDispatch, useSelector } from "react-redux";
import { filtersObject } from "../../utils/utils";
import { changeFilter } from "../../redux/filtersSlice";
import { filtersSelector } from "../../redux/filtersSlice";
import { useEffect } from "react";
// import { fetchCampers } from "../../redux/campersFetchFunctions";

const Search = ({setPage}) => {
  const dispatch = useDispatch();
  const a = useSelector(filtersSelector);
  console.log(a.filters);

  const checkBoxArray = ["AC", "Automatic", "Kitchen", "TV", "Shower/WC"];

  const radioButtonsArray = ["Van", "Fully Integrated", "Alcove"];

  // useEffect(()=>{
  //   dispatch(changeFilter({}));
  // },[dispatch])

  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log("kuku");

    const formData = new FormData(e.target);
    console.log(formData.getAll("formData"));
    // console.log(Object((formData.get("example")));

    const filtersArray = formData.getAll("formData");

    // console.log(filtersObject(filtersArray));
    setPage(1);
    dispatch(changeFilter(filtersObject(filtersArray)));

    // dispatch(fetchCampers({ page: 1, filters: filtersObject(filtersArray) }));
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
