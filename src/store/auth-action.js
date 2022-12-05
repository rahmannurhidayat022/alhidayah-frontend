import { ENDPOINT } from '../temp/endpoint';
import { login } from './auth-slice';
import { showAlert } from './ui-slice';

export const signInRequest = (data) => {
	return async (dispatch) => {
		dispatch(
			showAlert({
				variant: 'info',
				message: 'Sedang diproses...',
			})
		);

		const sendRequest = async () => {
			const response = await fetch(ENDPOINT + 'login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					email: data.email,
					password: data.password,
				}),
			});

			if (!response.ok) {
				throw new Error(
					'Gagal Login, Pastikan E-Mail dan Password yang anda masukan sudah benar.'
				);
			}

			const resJson = await response.json();
			return resJson;
		};

		try {
			const response = await sendRequest();
			dispatch(
				login({
					isAuth: true,
					token: response.access_token,
					data: response.data,
				})
			);

			dispatch(
				showAlert({
					variant: 'success',
					message: 'Login Berhasil.',
				})
			);
		} catch (error) {
			dispatch(
				showAlert({
					variant: 'failed',
					message: error.message,
				})
			);
		}
	};
};
