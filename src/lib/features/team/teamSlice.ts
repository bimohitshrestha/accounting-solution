
import { createSlice } from "@reduxjs/toolkit";
import { TeamItem } from "./teamInterface";
import { getTeamList } from "./teamAction";



interface ErrorPayload {
  error?: string;
  password?: string;
  Error?: string;
  non_field_errors?: string;
}

interface ServiceListState {
  loading: boolean;
  isloadingServiceList: boolean;
  isError: boolean;
  isDownloading: boolean;
  isSuccess: boolean;
  message:string;
  TeamList:TeamItem[],

}

const initialState: ServiceListState = {
  isDownloading: false,
  isloadingServiceList: false,
  loading: false,
  isError: false,
  isSuccess:false,
  message:"",
  TeamList:[]
  
 
  
};

const teamListSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
   
    
  },
  extraReducers: (builder) => {
    builder
      // getColumnList action
      .addCase(getTeamList.pending, (state) => {
        state.isloadingServiceList = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getTeamList.fulfilled, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = true;
        state.TeamList = action.payload ?? [];
        state.message = "Column list fetched successfully";
      })
      .addCase(getTeamList.rejected, (state, action) => {
        state.isloadingServiceList = false;
        state.isSuccess = false;
        state.isError = true;
        // const temp: any = action.payload ?? connectionErr;
        // state.errorData = temp.data.message;
      })
     
  },
});
export const {
 
} = teamListSlice.actions;
export default teamListSlice.reducer;