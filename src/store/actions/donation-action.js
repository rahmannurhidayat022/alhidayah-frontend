import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_API = process.env.REACT_APP_URL_API + 'donate';

export const userSendDonation = createAsyncThunk(
	'donation/userSendDonation',
	async (
		{
			jenis_donasi,
			nominal,
			nama,
			alamat,
			rekening_id,
			telepon,
			email,
			keterangan,
			bukti_pembayaran,
		},
		{ rejectWithValue }
	) => {
		try {
			const formData = new FormData();
			formData.append('jenis_donasi', jenis_donasi);
			formData.append('nominal', nominal);
			formData.append('nama', nama);
			formData.append('alamat', alamat);
			formData.append('rekening_id', rekening_id);
			formData.append('telepon', telepon);
			formData.append('email', email);
			formData.append('keterangan', keterangan);
			formData.append('bukti_pembayaran', bukti_pembayaran);

			const response = await fetch(URL_API, {
				method: 'POST',
				body: formData,
			});

			if (!response.ok)
				throw new Error(
					'Gagal melakukan donasi, pastikan semua yang anda isi sudah benar sesuai ketentuan. silahkan coba lagi'
				);

			return 'Berhasil melakukan donasi, silahkan cek email anda.';
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const approveDonationRequest = createAsyncThunk(
	'donation/approveDonationRequest',
	async (id, { getState, rejectWithValue }) => {
		try {
			const { user } = getState();
			const { userToken } = user;
			const response = await fetch(URL_API + '/' + id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + userToken,
				},
				body: JSON.stringify({ status: 'approve' }),
			});

			if (!response.ok) throw new Error('Gagal mengubah status ke Approve');

			const { message } = await response.json();
			return message;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const rejectDonationRequest = createAsyncThunk(
	'donation/rejectDonationRequest',
	async (id, { getState, rejectWithValue }) => {
		try {
			const { user } = getState();
			const { userToken } = user;
			const response = await fetch(URL_API + '/' + id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + userToken,
				},
				body: JSON.stringify({ status: 'reject' }),
			});

			if (!response.ok) throw new Error('Gagal mengubah status ke Reject');

			const { message } = await response.json();
			return message;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const getAllDonationData = createAsyncThunk(
	'donation/getAllDonationData',
	async (arg, { rejectDonationRequest }) => {
		try {
			const response = await fetch(URL_API);

			if (!response.ok) throw new Error('Gagal Fetching data donasi');

			const { data } = await response.json();
			return data;
		} catch (error) {
			return rejectDonationRequest(error.message);
		}
	}
);

export const getDonationDataById = createAsyncThunk(
	'donation/getDonationDataById',
	async (id, { rejectDonationRequest }) => {
		try {
			const response = await fetch(URL_API + '/' + id);

			if (!response.ok) throw new Error('Gagal Fetching data donasi');

			const { data } = await response.json();
			return data;
		} catch (error) {
			return rejectDonationRequest(error.message);
		}
	}
);

export const deleteDonationDataById = createAsyncThunk(
	'donation/deleteDonationDataById',
	async (id, { getState, rejectDonationRequest }) => {
		try {
			const { user } = getState();
			const { userToken } = user;
			const response = await fetch(URL_API + '/' + id, {
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + userToken,
				},
			});

			if (!response.ok) throw new Error('Gagal menghapus data donasi');
			const { message } = await response.json();
			return message;
		} catch (error) {
			return rejectDonationRequest(error.message);
		}
	}
);
