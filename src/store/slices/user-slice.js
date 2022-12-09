import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../actions/user-action';

const userToken = localStorage.getItem('userToken')
	? localStorage.getItem('userToken')
	: null;

const userInfo = localStorage.getItem('userInfo')
	? localStorage.getItem('userInfo')
	: null;

const initialState = {
	loading: false,
	userInfo,
	userToken,
	error: null,
	success: null,
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
	},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
