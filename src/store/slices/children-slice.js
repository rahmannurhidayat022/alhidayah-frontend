import { createSlice } from "@reduxjs/toolkit";
import {
  addChildrenData,
  deleteChildrenDataById,
  getAllChildrenData,
  getChildrenDataById,
  updateChildrenDataById,
} from "../actions/children-action";

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

const childrenSlice = createSlice({
  name: "children",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllChildrenData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [getAllChildrenData.fulfilled]: (state, { payload }) => {
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
    [getAllChildrenData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getChildrenDataById.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [getChildrenDataById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.item = payload;
    },
    [getChildrenDataById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateChildrenDataById.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [updateChildrenDataById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [updateChildrenDataById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addChildrenData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [addChildrenData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [addChildrenData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteChildrenDataById.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [deleteChildrenDataById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [deleteChildrenDataById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default childrenSlice.reducer;
