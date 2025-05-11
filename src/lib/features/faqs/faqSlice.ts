import { createSlice } from "@reduxjs/toolkit";

import { getServiceList } from "../services/serviceAction";
import { getFaqList } from "./faqAction";
import { FAQItem } from "./faqInterface";




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
  isLoadingFaq: boolean;
  isError: boolean;
  isDownloading: boolean;
  isSuccess: boolean;
  message:string;
  FaqList:FAQItem[],

}

const initialState: ServiceListState = {
  isDownloading: false,
  isLoadingFaq: false,
  loading: false,
  isError: false,
  isSuccess:false,
  message:"",
  FaqList:[]
  
 
  
};

const faqsListSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
   
    
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getFaqList.pending, (state) => {
        state.isLoadingFaq = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getFaqList.fulfilled, (state, action) => {
        state.isLoadingFaq = false;
        state.isSuccess = true;
        state.FaqList = action.payload ?? [];
        state.message = "Column list fetched successfully";
      })
      .addCase(getFaqList.rejected, (state, action) => {
        state.isLoadingFaq = false;
        state.isSuccess = false;
        state.isError = true;
        // const temp: any = action.payload ?? connectionErr;
        // state.errorData = temp.data.message;
      })
     
  },
});
export const {
 
} = faqsListSlice.actions;
export default faqsListSlice.reducer;