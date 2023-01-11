import { createSlice } from "@reduxjs/toolkit";
import {
  getAdministratorData,
  insertAdministratorData,
  removeAdministratorData,
  updateAdministratorData,
} from "../actions/administrator-action";

const initialState = {
  items: null,
  item: null,
  loading: false,
  success: null,
  error: null,
  pagination: {
    firstPage: null,
    lastPage: null,
    next: null,
    prev: null,
    links: null,
    totalItem: null,
    totalPage: null,
    currentPage: null,
  },
};

const administratorSlice = createSlice({
  name: "administrator",
  initialState,
  reducers: {},
  extraReducers: {
    [getAdministratorData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [getAdministratorData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.data;
      state.pagination.firstPage = payload.first_page_url;
      state.pagination.lastPage = payload.last_page_url;
      state.pagination.next = payload.next_page_url;
      state.pagination.prev = payload.prev_page_url;
      state.pagination.links = payload.links;
      state.pagination.totalItem = payload.total;
      state.pagination.totalPage = payload.last_page;
      state.pagination.currentPage = payload.current_page;
    },
    [getAdministratorData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [insertAdministratorData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [insertAdministratorData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [insertAdministratorData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateAdministratorData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [updateAdministratorData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [updateAdministratorData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [removeAdministratorData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [removeAdministratorData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [removeAdministratorData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default administratorSlice.reducer;
