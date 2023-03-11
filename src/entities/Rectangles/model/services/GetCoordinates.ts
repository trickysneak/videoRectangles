import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {} from "redux-thunk/extend-redux";
import { rectanglesActions } from "../..";
import { RectangleResponse } from "../types/type";

export const getCoordinates = createAsyncThunk(
  "rectangles/GetRectangles",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<RectangleResponse[]>(
        "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd"
      );

      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(rectanglesActions.setCoordinates(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
