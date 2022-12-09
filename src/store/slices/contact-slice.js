import { createSlice } from '@reduxjs/toolkit';
import { sendMail } from '../actions/contact-action';

const initialState = {
	loading: false,
	success: null,
	error: null,
};

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {},
	extraReducers: {
		[sendMail.pending]: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		[sendMail.fulfilled]: (state) => {
			state.loading = false;
			state.success =
				'Pesan terkirim. Kami akan menghubungi anda melalui E-Mail yang tercantum.';
		},
		[sendMail.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default contactSlice.reducer;
