import { createSlice } from "@reduxjs/toolkit";
import { NewsItem } from "./newsInterface";
import { getNewsList, postSubscriber } from "./newsAction";
import { getServiceList } from "../services/serviceAction";



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
  isloadingNewsList: boolean;
  isError: boolean;
  isDownloading: boolean;
  isSuccess: boolean;
  message:string;
  NewsList:NewsItem[],

}

const initialState: ServiceListState = {
  isDownloading: false,
  isloadingNewsList: false,
  loading: false,
  isError: false,
  isSuccess:false,
  message:"",
  NewsList:[]
  
 
  
};

const newsListSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
   
    
  },
  extraReducers: (builder) => {
    builder
      // getColumnList action
      .addCase(getNewsList.pending, (state) => {
        state.isloadingNewsList = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getNewsList.fulfilled, (state, action) => {
        state.isloadingNewsList = false;
        state.isSuccess = true;
        state.NewsList = action.payload ?? [];
        state.message = "Column list fetched successfully";
      })
      .addCase(getServiceList.rejected, (state, action) => {
        state.isloadingNewsList = false;
        state.isSuccess = false;
        state.isError = true;
        // const temp: any = action.payload ?? connectionErr;
        // state.errorData = temp.data.message;
      })
     
        .addCase(postSubscriber.pending, (state) => {
              state.loading = true;
              state.isError = false;
              state.isSuccess = false;
            })
            .addCase(postSubscriber.fulfilled, (state) => {
              state.loading = false;
              state.isSuccess = true;
            })
            .addCase(postSubscriber.rejected, (state, action) => {
              state.loading = false;
              state.isError = true;
            });
  },
});
export const {
 
} = newsListSlice.actions;
export default newsListSlice.reducer;