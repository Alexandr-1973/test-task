import { createSlice } from "@reduxjs/toolkit";

const initialState = { location: "",
  equipment:{
    AC:false,
    Automatic:false,
    Kitchen:false,
    TV:false,
    "Shower/WC":false
  },
  type:{
    Van:false,
    "Fully Integrated": false,
    Alcove: false
  }
 };

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersSelector = (state) => state.filters;