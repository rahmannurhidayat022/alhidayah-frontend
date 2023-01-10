import { createSlice } from "@reduxjs/toolkit";
import {
  changeReadStatus,
  deleteContactById,
  getAllContact,
  sendMail,
} from "../actions/contact-action";

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

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    [sendMail.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [sendMail.fulfilled]: (state) => {
      state.loading = false;
      state.success =
        "Pesan terkirim. Kami akan menghubungi anda melalui E-Mail yang tercantum.";
    },
    [sendMail.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getAllContact.pending]: (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    [getAllContact.fulfilled]: (state, { payload }) => {
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
    [getAllContact.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [deleteContactById.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [deleteContactById.fulfilled]: (state) => {
      state.loading = false;
      state.success = "Berhasil menghapus data kontak";
    },
    [deleteContactById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [changeReadStatus.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    [changeReadStatus.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [changeReadStatus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default contactSlice.reducer;
