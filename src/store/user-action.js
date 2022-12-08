import { createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINT } from '../temp/endpoint';

export const loginUser = createAsyncThunk(
	'user/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await fetch(ENDPOINT + 'login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error(
					'Gagal login, pastikan E-Mail dan Password anda sudah benar.'
				);
			}

			const json = await response.json();
			const { access_token, data } = json;

			localStorage.setItem('userToken', access_token);
			localStorage.setItem('userInfo', JSON.stringify(data));

			return json;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);
