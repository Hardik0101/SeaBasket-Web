import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsDetails } from "../../Api/ApiCall/dataApi";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
  },
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    clearDetailsState: (state) => {
      state.details = [];
    },
  },
});

export const fetchDetails = createAsyncThunk(
  "data/fetchDetails",
  async (id, { dispatch }) => {
    try {
      const products = await getProductsDetails(id);
      dispatch(setDetails(products));
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const { setDetails, clearDetailsState } = detailsSlice.actions;
export default detailsSlice.reducer;
