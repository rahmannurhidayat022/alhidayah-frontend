import { createSlice } from "@reduxjs/toolkit";
import {
  addInstitutionData,
  deleteInstitutionDataById,
  getInstitutionData,
  updateInstitutionData,
} from "../actions/institution-action";

const initialState = {
  item: null,
  loading: false,
  success: null,
  error: null,
};

const institutionSlice = createSlice({
  name: "institution",
  initialState,
  reducers: {},
  extraReducers: {
    [getInstitutionData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [getInstitutionData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.item = payload;
    },
    [getInstitutionData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addInstitutionData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [addInstitutionData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [addInstitutionData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateInstitutionData.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [updateInstitutionData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [updateInstitutionData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteInstitutionDataById.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [deleteInstitutionDataById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [deleteInstitutionDataById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default institutionSlice.reducer;
