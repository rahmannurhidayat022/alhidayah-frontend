import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: {},
});

export default childrenSlice.reducer;
