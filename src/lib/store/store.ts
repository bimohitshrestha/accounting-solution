import { configureStore } from "@reduxjs/toolkit";

import serviceSlice from "../features/services/serviceSlice";
import teamSlice from "../features/team/teamSlice";
import newsSlice from "../features/newsletter/newsSlice";
import blogSlice from "../features/blog/blogSlice";







const store = configureStore({
  reducer: {
    
    service: serviceSlice,
    team:teamSlice,
    news:newsSlice,
    blog:blogSlice
  
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(toastMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;