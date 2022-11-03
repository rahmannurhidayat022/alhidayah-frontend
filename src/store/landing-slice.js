import { createSlice } from '@reduxjs/toolkit';

const landingSlice = createSlice({
	name: 'landing page store',
	initialState: {
		sendEmail: {
			error: null,
			success: null,
			loading: false,
			data: null,
		},
		donation: {
			error: null,
			success: null,
			loading: false,
			data: null,
			file: null,
		},
	},
	reducers: {
		sendingEmail: (state, action) => {
			if (action.payload === undefined) {
				state.sendEmail.error = {
					message: 'data tidak boleh kosong!',
				};
				return;
			}

			try {
				state.sendEmail.data = action.payload;
				//POST api/kontak

				state.sendEmail.error = null;
				state.sendEmail.success = {
					message:
						'Pesan berhasil terkirim, kami akan menghubungi kembali melalui E-Mail yang telah anda cantumkan sebelumnya',
				};
			} catch (error) {
				state.sendEmail.success = null;
				state.sendEmail.error = {
					message: 'Pesan gagal terkirim',
				};
			}
		},
		turnOnLoadingSendEmail: (state) => {
			state.sendEmail.loading = true;
		},
		turnOffLoadingSendEmail: (state) => {
			state.sendEmail.loading = false;
		},
		saveToDonasiStore: (state, action) => {
			if (action.payload === undefined) {
				state.donation.error = {
					message: 'data tidak boleh kosong!',
				};
				return;
			}
			state.donation.data = action.payload;
		},
	},
});

export const {
	sendingEmail,
	turnOffLoadingSendEmail,
	turnOnLoadingSendEmail,
	saveToDonasiStore,
} = landingSlice.actions;
export default landingSlice.reducer;
