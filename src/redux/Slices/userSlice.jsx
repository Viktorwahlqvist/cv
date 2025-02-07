import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunk/userThunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    userStatus: "idle",
  },
  reducers: {},
  /*Extra reducers för att det ska vara asynkron, bilder är ett objekt för olika case
  som vi får användning av med t.ex våran useEffect som körs om den är idle .osv */
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.userStatus = "loading";
      })
      /* Är det succeeded så betyder det att api anropet lyckades och data hämtades
       sparas i state.user */

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userStatus = "succeeded";
        state.user = action.payload;
      })
      /*Om det inte lyckades så blir status failed, och fel medelande sparas i state.error */
      .addCase(fetchUser.rejected, (state, action) => {
        state.userStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
