import { createSlice } from "@reduxjs/toolkit";
import {
	createGallery,
	deleteGalleryById,
	getAllGallery,
	getGalleryById,
	updateGalleryById,
} from "../actions/gallery-action";

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

const gallerySlice = createSlice({
	name: "gallery",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllGallery.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getAllGallery.fulfilled]: (state, { payload }) => {
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
		[getAllGallery.rejected]: (state) => {
			state.loading = false;
		},
		[getGalleryById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getGalleryById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.item = payload;
		},
		[getGalleryById.rejected]: (state) => {
			state.loading = false;
		},
		[createGallery.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[createGallery.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[createGallery.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[deleteGalleryById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[deleteGalleryById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[deleteGalleryById.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[updateGalleryById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[updateGalleryById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[updateGalleryById.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default gallerySlice.reducer;
