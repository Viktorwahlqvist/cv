import { configureStore } from "@reduxjs/toolkit";
import reposReducer from "../Slices/repoSlice";
import userReducer from "../Slices/userSlice";

const store = configureStore({
  reducer: {
    repos: reposReducer,
    user: userReducer,
  },
});
export default store;
