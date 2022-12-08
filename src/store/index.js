import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './article-slice';
import userSlice from './user-slice';
import landingSlice from './landing-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
		user: userSlice,
		article: articleSlice,
	},
});

export default store;
