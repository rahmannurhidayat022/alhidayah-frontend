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
			localStorage.setItem('user', JSON.stringify(action.payload.data));
			state.isAuth = action.payload.isAuth;
			state.token = action.payload.token;
			state.user = action.payload.data;
		},
		logout: (state, action) => {
			localStorage.removeItem('isAuth');
			localStorage.removeItem('token');
			state.isAuth = false;
			state.token = null;
		},
	},
});

export const { login, logout, getAuth } = authSlice.actions;
export default authSlice.reducer;
