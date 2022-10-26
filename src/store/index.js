import { configureStore } from '@reduxjs/toolkit';
import landingSlice from './landing-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
	},
});

export default store;
