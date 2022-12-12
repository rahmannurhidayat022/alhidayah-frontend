import { createSlice } from '@reduxjs/toolkit';
import {
	deleteUserById,
	forgotPassword,
	getUsers,
	loginUser,
	registerUser,
	resetPassword,
	updateUser,
} from '../actions/user-action';

const userToken = localStorage.getItem('userToken')
	? localStorage.getItem('userToken')
	: null;

const userInfo = localStorage.getItem('userInfo')
	? localStorage.getItem('userInfo')
	: null;

const initialState = {
	userInfo,
	userToken,
	items: null,
	item: null,
	loading: false,
	error: null,
	success: null,
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

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('userToken');
			localStorage.removeItem('userInfo');
			state.loading = false;
			state.userInfo = null;
			state.error = null;
			state.success = null;
		},
	},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = 'Login berhasil.';
			state.userInfo = payload.data;
			state.userToken = payload.access_token;
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[registerUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[registerUser.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'User berhasil terdaftar';
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getUsers.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[getUsers.fulfilled]: (state, { payload }) => {
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
		[getUsers.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[forgotPassword.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[forgotPassword.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Cek email anda untuk melakukan reset password';
		},
		[forgotPassword.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[resetPassword.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[resetPassword.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Password berhasil diperbaharui, silahkan login';
		},
		[resetPassword.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[updateUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[updateUser.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Berhasil memperbaharui data user';
		},
		[updateUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[deleteUserById.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[deleteUserById.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Berhasil menghapus data user';
		},
		[deleteUserById.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
