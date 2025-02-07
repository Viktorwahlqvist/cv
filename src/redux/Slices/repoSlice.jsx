import { createSlice } from "@reduxjs/toolkit";
import { fetchRepos, fetchReadMe } from "../thunk/repoThunk";

const repoSlice = createSlice({
  name: "repos",
  initialState: {
    // Här lagras listan med repos
    repos: [],
    // Här lagras README-filerna per repo
    readmes: {},
    reposStatus: "idle",
    readmesStatus: "idle",
    error: null,
  },
  reducers: {},
  /*  extra reducer för att det ska vara en asynkron action. 
  builder är ett object som används för att lägga till olika cases som hanterar de
  olika pending, fulfilled och rejected.*/
  extraReducers: (builder) => {
    builder
      // Det har startat, men inte fått något svar ännu uppdaterar status till loading.
      .addCase(fetchRepos.pending, (state) => {
        state.reposStatus = "loading";
      })
      /* API anropet har lyckats, action.payload innehåller datan från api anropet
        så status uppdateras till succeeded och updaterar state.repos med datan genom
        action.payload. */
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.reposStatus = "succeeded";
        state.repos = action.payload;
      })
      /*Om API anropet misslyckas så blir det rejected, status uppdateras till failed
        och vi updaterar state.error med felmedelandet från action.error.message */
      .addCase(fetchRepos.rejected, (state, action) => {
        state.reposStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchReadMe.pending, (state) => {
        state.readmesStatus = "loading";
      })
      /*  API anropet har lyckats, action.payload innehåller namnet på repot som hämtades
        och link för image i reame. */
      .addCase(fetchReadMe.fulfilled, (state, action) => {
        state.readmesStatus = "succeeded";
        /* action.payload.repo är namnet på repot för den specifika readme filen. */
        state.readmes[action.payload.repo] = {
          links: action.payload.imageLinks,
          repoLinks: action.payload.repoLink,
        };
      })
      .addCase(fetchReadMe.rejected, (state, action) => {
        state.readmesStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default repoSlice.reducer;
