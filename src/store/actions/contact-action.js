import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_API = process.env.REACT_APP_URL_API;

export const sendMail = createAsyncThunk(
	'contact/sendMail',
	async ({ name, subject, email, keterangan }, { rejectWithValue }) => {
		try {
			const response = await fetch(URL_API + 'contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, subject, email, keterangan }),
			});

			if (!response.ok) throw new Error('Gagal mengirim pesan');
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
