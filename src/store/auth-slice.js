import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'Auth',
	initialState: {
		isAuth: false,
		token: null,
		user: null,
	},
	reducers: {
		login: (state, action) => {
			localStorage.setItem('isAuth', action.payload.isAuth);
			localStorage.setItem('token', action.payload.token);
			state.isAuth = action.payload.isAuth;
			state.token = action.payload.token;
		},
		logout: (state, action) => {
			localStorage.removeItem('isAuth');
			localStorage.removeItem('token');
			state.isAuth = false;
			state.token = null;
		},
		getAuth: (state, action) => {
			state.isAuth = localStorage.getItem('isAuth') || false;
			state.token = localStorage.getItem('token') || null;
		},
	},
});

export const { login, logout, getAuth } = authSlice.actions;
export default authSlice.reducer;
