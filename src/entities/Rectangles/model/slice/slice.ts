import { createSlice } from "@reduxjs/toolkit";
import { getCoordinates } from "../services/GetCoordinates";
import { RectangleSchema } from "../types/type";

const initialState: RectangleSchema = {
  data: null,
  isLoading: false,
};

const rectanglesSlice = createSlice({
  name: "rectangles",
  initialState,
  reducers: {
    setCoordinates: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoordinates.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getCoordinates.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getCoordinates.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: rectanglesActions } = rectanglesSlice;
export const { reducer: rectanglesReducer } = rectanglesSlice;
