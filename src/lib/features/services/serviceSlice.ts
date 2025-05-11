import { createSlice } from "@reduxjs/toolkit";
import { getOrganizationInfo, getServiceList, getTestimonialList, submitQuery } from "./serviceAction";
import { ClientData, Company, ServiceItem } from "./serviceInterface";


interface ErrorPayload {
  error?: string;
  password?: string;
  Error?: string;
  non_field_errors?: string;
}
interface ColumnState {
  loading: boolean;
  isSuccess: boolean;
  columnValueById: { id: string; value: string }[];
  message: string;
}
interface Service {
  Service_name: string;
  excel_Service_name: string;
  is_entity: boolean;
  is_required: boolean;

  position: number;
  is_visible: boolean;
  has_error: boolean;
  has_prompt: boolean;
}
interface ServiceListState {
  loading: boolean;
  isloadingServiceList: boolean;
  isError: boolean;
  isDownloading: boolean;
  isSuccess: boolean;
  message:string;
  ServiceList:ServiceItem[],
  TestimonialList:ClientData[],
  OrganizationList:Company[],

}

const initialState: ServiceListState = {
  isDownloading: false,
  isloadingServiceList: false,
  loading: false,
  isError: false,
  isSuccess:false,
  message:"",
  ServiceList:[],
  TestimonialList:[],
  OrganizationList:[]
  
 
  
};

const serviceListSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
   
    
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getServiceList.pending, (state) => {
        state.isloadingServiceList = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getServiceList.fulfilled, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = true;
        state.ServiceList = action.payload ?? [];
        state.message = "Column list fetched successfully";
      })
      .addCase(getServiceList.rejected, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = false;
        state.isError = true;
        // const temp: any = action.payload ?? connectionErr;
        // state.errorData = temp.data.message;
      })

        .addCase(getTestimonialList.pending, (state) => {
        state.isloadingServiceList = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getTestimonialList.fulfilled, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = true;
        state.TestimonialList = action.payload ?? [];
        state.message = "Column list fetched successfully";
      })
      .addCase(getTestimonialList.rejected, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = false;
        state.isError = true;
        // const temp: any = action.payload ?? connectionErr;
        // state.errorData = temp.data.message;
      })

      .addCase(getOrganizationInfo.pending, (state) => {
        state.isloadingServiceList = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getOrganizationInfo.fulfilled, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = true;
        state.OrganizationList = action.payload ?? [];
        state.message = "Column list fetched successfully";
      })
      .addCase(getOrganizationInfo.rejected, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = false;
        state.isError = true;
        // const temp: any = action.payload ?? connectionErr;
        // state.errorData = temp.data.message;
      })

       .addCase(submitQuery.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(submitQuery.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(submitQuery.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
      });
     
  },
});
export const {
 
} = serviceListSlice.actions;
export default serviceListSlice.reducer;