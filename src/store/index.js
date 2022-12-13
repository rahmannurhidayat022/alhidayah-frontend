import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './slices/article-slice';
import userSlice from './slices/user-slice';
import landingSlice from './slices/landing-slice';
import uiSlice from './slices/ui-slice';
import contactSlice from './slices/contact-slice';
import debitSlice from './slices/debit-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
		user: userSlice,
		article: articleSlice,
		contact: contactSlice,
		debit: debitSlice,
	},
});

export default store;
