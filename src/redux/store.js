import { configureStore } from "@reduxjs/toolkit";
// import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";
import { campersReducer } from "./campersSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filtersReducer,
  },
});

export default store;
