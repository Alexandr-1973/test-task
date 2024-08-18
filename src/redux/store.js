import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filtersSlice";
import { campersReducer } from "./campersSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filtersReducer,
  },
});

export default store;
