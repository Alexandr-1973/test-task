import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66bcf5b724da2de7ff6c5b38.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  `campers/fetchAll`,
  async (info, thunkApi) => {
    try {
      const res = await axios.get(`/campers?$count&l=4&p=${info.page}`, {
        params: {
          ...info.filters,
        },
      });

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = async (id) => {
  try {
    const res = await axios.get(`/campers/${id}`);

    return res.data;
  } catch (error) {
    return error;
  }
};
