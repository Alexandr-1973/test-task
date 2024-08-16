import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { filtersSelector } from "./filtersSlice.js";
import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://66bcf5b724da2de7ff6c5b38.mockapi.io/";

// const params = {
//   // client_id: Client_ID,
//   // query: topic,
//   per_page: 4,
//   // page: page,
// };

export const fetchCampers = createAsyncThunk(
  `campers/fetchAll`,
  async (info, thunkApi) => {
    // const a = useSelector(filtersSelector).filters;
    // console.log(a.filters);
    // ?l=4&p=${page}

    try {
      const res = await axios.get(`/campers?l=4&p=${info.page}`, {
        params: {
          ...info.filters,
        },
      });
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = async (id) => {
  try {
    const res = await axios.get(`/campers/${id}`);

    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
};

// // `transformResponse` позволяет вносить изменения в данные ответа перед их передачей then/catch
// transformResponse: [function (data) {
//   // Делайте все, что хотите, чтобы преобразовать данные

//   return data;
// }]

// export const fetchCamperById = createAsyncThunk(
// 	`campers/fetchId`,
// 	async (id, thunkApi) => {
// 	  try {
// 		const res = await axios.get(`/campers/${id}`);

//     console.log(res.data);
// 		return res.data;
// 	  } catch (error) {
// 		return thunkApi.rejectWithValue(error.message);
// 	  }
// 	}
//   );
