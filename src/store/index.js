import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./slices/article-slice";
import userSlice from "./slices/user-slice";
import landingSlice from "./slices/landing-slice";
import uiSlice from "./slices/ui-slice";
import contactSlice from "./slices/contact-slice";
import debitSlice from "./slices/debit-slice";
import donationSlice from "./slices/donation-slice";
import gallerySlice from "./slices/gallery-slice";
import institutionSlice from "./slices/institution-slice";
import childrenSlice from "./slices/children-slice";
import administratorSlice from "./slices/administrator-slice";
import dashboardSlice from "./slices/dashboard-slice";

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
		institution: institutionSlice,
		children: childrenSlice,
		administrator: administratorSlice,
		dashboard: dashboardSlice,
	},
});

export default store;
