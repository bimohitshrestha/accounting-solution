import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";




export const getBlogList = createAsyncThunk(
    "blogList/getBlogList",
    async (_, thunkAPI) => {
      try {
        const response = await api.get("/api/blogs/");
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



