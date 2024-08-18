import { createSlice, isFulfilled, isRejected } from "@reduxjs/toolkit";

const initialState = {
  items: [],

  error: null,
};

const campersSlice = createSlice({
  name: "items",
  initialState: initialState,
  extraReducers: (builder) => {
    builder

      .addMatcher(isFulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(isRejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const campersSelector = (state) => state.campers.items;
export const selectError = (state) => state.campers.error;
