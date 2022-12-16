import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './slices/article-slice';
import userSlice from './slices/user-slice';
import landingSlice from './slices/landing-slice';
import uiSlice from './slices/ui-slice';
import contactSlice from './slices/contact-slice';
import debitSlice from './slices/debit-slice';
import donationSlice from './slices/donation-slice';
import gallerySlice from './slices/gallery-slice';

const store = configureStore({
	reducer: {
		ui: uiSlice,
		landing: landingSlice,
		user: userSlice,
		article: articleSlice,
		contact: contactSlice,
		debit: debitSlice,
		donation: donationSlice,
		gallery: gallerySlice,
	},
});

export default store;
