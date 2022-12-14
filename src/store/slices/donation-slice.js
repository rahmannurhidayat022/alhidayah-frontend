import { createSlice } from '@reduxjs/toolkit';
import {
	approveDonationRequest,
	deleteDonationDataById,
	getAllDonationData,
	getDonationDataById,
	rejectDonationRequest,
	userSendDonation,
} from '../actions/donation-action';

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

const donationSlice = createSlice({
	name: 'donation',
	initialState,
	reducers: {},
	extraReducers: {
		[userSendDonation.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[userSendDonation.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[userSendDonation.rejected]: (state, { payload }) => {
			state.loading = false;
			state.erorr = payload;
		},
		[approveDonationRequest.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[approveDonationRequest.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[approveDonationRequest.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[rejectDonationRequest.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[rejectDonationRequest.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[rejectDonationRequest.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getAllDonationData.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getAllDonationData.fulfilled]: (state, { payload }) => {
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
		[getAllDonationData.rejected]: (state, { payload }) => {
			state.loading = false;
		},
		[getDonationDataById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getDonationDataById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
		},
		[getDonationDataById.rejected]: (state, { payload }) => {
			state.loading = false;
		},
		[deleteDonationDataById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[deleteDonationDataById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload;
		},
		[deleteDonationDataById.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default donationSlice.reducer;
