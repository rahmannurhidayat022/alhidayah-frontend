import { createSlice } from "@reduxjs/toolkit";
import {
	getHomeData,
	getInstitutionProfile,
	getTelpNumber,
	getVisiMisiData,
	searchDonationHistory,
} from "../actions/landing-action";

const initialState = {
	articles: null,
	galleries: null,
	telphone: null,
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

const landingSlice = createSlice({
	name: "landing",
	initialState,
	reducers: {},
	extraReducers: {
		[getHomeData.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getHomeData.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.articles = payload?.articles;
			state.galleries = payload?.galleries;
		},
		[getHomeData.rejected]: (state, { payload }) => {
			state.loading = false;
			state.erorr = payload;
		},
		[getTelpNumber.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getTelpNumber.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.telphone = payload?.no_telp;
		},
		[getTelpNumber.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getInstitutionProfile.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getInstitutionProfile.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.item = payload;
		},
		[getInstitutionProfile.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getVisiMisiData.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getVisiMisiData.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.item = payload;
		},
		[getVisiMisiData.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[searchDonationHistory.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[searchDonationHistory.fulfilled]: (state, { payload }) => {
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
		[searchDonationHistory.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default landingSlice.reducer;
