import { configureStore } from '@reduxjs/toolkit';
import adminSlice from './admin-slice';
import userSlice from './user-slice';
import landingSlice from './landing-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
		user: userSlice,
		admin: adminSlice,
	},
});

export default store;
