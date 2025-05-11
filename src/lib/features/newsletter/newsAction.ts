import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { subscriber } from "./newsInterface";




export const getNewsList = createAsyncThunk(
    "newsList/getNewsList",
    async (_, thunkAPI) => {
      try {
        const response = await api.get("/api/newsletters/");
       return response.data
      } catch (error: any) {
        const err = {
          status: error.status,
          data: error.response.data.errors[0] ?? "Something went Wrong",
        };
        return thunkAPI.rejectWithValue(err);
      }
    }
  );

  export const postSubscriber = createAsyncThunk(
  'newsList/postSubscriber',
  async (payload: subscriber, thunkAPI) => {
    try {
      const response = await api.post('/api/subscribe/', payload);
      return response.data;
    } catch (error: any) {
        const err = {
          status: error.status,
          data: error.response.data.errors[0] ?? "Something went Wrong",
        };
        return thunkAPI.rejectWithValue(err);
      }
  }
);



