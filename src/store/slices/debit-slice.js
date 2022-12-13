import { createSlice } from '@reduxjs/toolkit';
import {
	createDebit,
	deleteDebitById,
	getAllDebit,
	getDebitById,
	updateDebit,
} from '../actions/debit-action';

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

const debitSlice = createSlice({
	name: 'debit',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllDebit.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[getAllDebit.fulfilled]: (state, { payload }) => {
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
		[getAllDebit.rejected]: (state) => {
			state.loading = false;
		},
		[getDebitById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getDebitById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.item = payload;
		},
		[getDebitById.rejected]: (state, { payload }) => {
			state.loading = false;
		},
		[createDebit.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[createDebit.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Berhasil menambahkan data rekening';
		},
		[createDebit.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[updateDebit.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[updateDebit.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Berhasil memperbaharui data rekening';
		},
		[updateDebit.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[deleteDebitById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[deleteDebitById.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Berhasil menghapus data rekening';
		},
		[deleteDebitById.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default debitSlice.reducer;
