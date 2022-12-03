import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import landingSlice from './landing-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
		auth: authSlice,
	},
});

export default store;
