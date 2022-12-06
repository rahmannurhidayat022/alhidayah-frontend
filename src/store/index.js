import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './admin-slice';
import authSlice from './auth-slice';
import landingSlice from './landing-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
		auth: authSlice,
		admin: adminSlice,
	},
});

export default store;
