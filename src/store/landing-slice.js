import { createSlice } from '@reduxjs/toolkit';

const landingSlice = createSlice({
	name: 'landing page store',
	initialState: {
		sendEmail: {
			error: {},
			success: {},
			loading: false,
			data: null,
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

				state.sendEmail.error = {};
				state.sendEmail.success = {
					message:
						'Pesan berhasil terkirim, kami akan menghubungi kembali melalui E-Mail yang telah anda cantumkan sebelumnya',
				};
			} catch (error) {
				state.sendEmail.success = {};
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
	},
});

export const { sendingEmail, turnOffLoadingSendEmail, turnOnLoadingSendEmail } =
	landingSlice.actions;
export default landingSlice.reducer;
