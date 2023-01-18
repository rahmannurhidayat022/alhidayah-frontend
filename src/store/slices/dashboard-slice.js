import { createSlice } from "@reduxjs/toolkit";
import { getDashboardData } from "../actions/dashboard-action";

const initialState = {
  items: null,
  item: null,
  loading: false,
  success: null,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: {
    [getDashboardData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [getDashboardData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.item = payload;
    },
    [getDashboardData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default dashboardSlice.reducer;
