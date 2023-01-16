import { createSlice } from "@reduxjs/toolkit";
import { createDashboard, getAllDashboard } from "../actions/debit-action";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllDashboard.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [getDashboardById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.item = payload;
    },
    [getDashboardById.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [createDashboard.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [createDashboard.fulfilled]: (state) => {
      state.loading = false;
      state.success = "Berhasil menambahakan dashboard";
    },
  },
});

export default dashboardSlice.reducer;
