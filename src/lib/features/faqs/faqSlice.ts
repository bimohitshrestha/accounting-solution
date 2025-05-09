// import { createSlice } from "@reduxjs/toolkit";

// import { getServiceList } from "../services/serviceAction";




// interface ErrorPayload {
//   error?: string;
//   password?: string;
//   Error?: string;
//   non_field_errors?: string;
// }
// interface ColumnState {
//   loading: boolean;
//   isSuccess: boolean;
//   columnValueById: { id: string; value: string }[];
//   message: string;
// }
// interface Service {
//   Service_name: string;
//   excel_Service_name: string;
//   is_entity: boolean;
//   is_required: boolean;

//   position: number;
//   is_visible: boolean;
//   has_error: boolean;
//   has_prompt: boolean;
// }
// interface ServiceListState {
//   loading: boolean;
//   isLoadingBlogList: boolean;
//   isError: boolean;
//   isDownloading: boolean;
//   isSuccess: boolean;
//   message:string;
//   BlogList:BlogItem[],

// }

// const initialState: ServiceListState = {
//   isDownloading: false,
//   isLoadingBlogList: false,
//   loading: false,
//   isError: false,
//   isSuccess:false,
//   message:"",
//   BlogList:[]
  
 
  
// };

// const newsListSlice = createSlice({
//   name: "news",
//   initialState,
//   reducers: {
   
    
//   },
//   extraReducers: (builder) => {
//     builder
//       // getColumnList action
//       .addCase(getBlogList.pending, (state) => {
//         state.isLoadingBlogList = true;
//         state.isError = false;
//         state.isSuccess = false;
//         state.message = "";
//       })
//       .addCase(getBlogList.fulfilled, (state, action) => {
//         state.isLoadingBlogList = false;
//         state.isSuccess = true;
//         state.BlogList = action.payload ?? [];
//         state.message = "Column list fetched successfully";
//       })
//       .addCase(getBlogList.rejected, (state, action) => {
//         state.isLoadingBlogList = false;
//         state.isSuccess = false;
//         state.isError = true;
//         // const temp: any = action.payload ?? connectionErr;
//         // state.errorData = temp.data.message;
//       })
     
//   },
// });
// export const {
 
// } = newsListSlice.actions;
// export default newsListSlice.reducer;