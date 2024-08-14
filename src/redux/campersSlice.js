import {
  createSlice,
  isFulfilled,
  // isPending,
  // isRejected,
  // createSelector,
} from "@reduxjs/toolkit";
//   import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: [],
  // loading: false,
  // error: null,
};

const campersSlice = createSlice({
  name: "items",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      // .addMatcher(isPending, (state) => {
      //   state.loading = true;
      // })
      .addMatcher(isFulfilled, (state, action) => {
        //   state.loading = false;
        //   state.error = null;
        state.items = action.payload;
      });
    // .addMatcher(isRejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const campersReducer = campersSlice.reducer;
export const campersSelector = (state) => state.campers.items;
