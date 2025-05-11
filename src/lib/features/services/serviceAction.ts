import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { QueryPayload } from "./serviceInterface";
import { create } from "node:domain";




export const getServiceList = createAsyncThunk(
    "serviceList/getBomList",
    async (_, thunkAPI) => {
      try {
        const response = await api.get("/api/services/");
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

 export const getTestimonialList = createAsyncThunk(
    "serviceList/getTestimonialList",
    async (_, thunkAPI) => {
      try {
        const response = await api.get("/api/testimonials/");
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

   export const getOrganizationInfo = createAsyncThunk(
    "serviceList/getOrganizationInfo",
    async (_, thunkAPI) => {
      try {
        const response = await api.get("/api/organization/");
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


export const submitQuery = createAsyncThunk(
  'serviceList/submitQuery',
  async (payload: QueryPayload, thunkAPI) => {
    try {
      const response = await api.post('/api/query/', payload);
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

