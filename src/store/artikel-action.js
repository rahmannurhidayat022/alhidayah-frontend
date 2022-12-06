import { ENDPOINT } from '../temp/endpoint';
import { addArticles } from './admin-slice';
import { showAlert } from './ui-slice';

export const storeArtikel = (data) => {
	return async (dispatch) => {
		dispatch(
			showAlert({
				variant: 'info',
				message: 'Sedang mengirim data...',
			})
		);

		const token = localStorage.getItem('token');
		const request = async () => {
			const formdata = new FormData();
			formdata.append('title', data.title);
			formdata.append('desc', data.desc);
			formdata.append('slug', data.slug);
			formdata.append('image', data.image);
			formdata.append('author_id', data.author_id);

			const response = await fetch(ENDPOINT + 'article', {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + token,
				},
				body: formdata,
			});

			if (!response.ok) {
				throw new Error('Gagal menambahkan data Artikel.');
			}

			const resJson = await response.json();
			return resJson;
		};

		try {
			const response = await request();
			dispatch(addArticles(response.data));
			dispatch(
				showAlert({
					variant: 'success',
					message: 'Data Artikel berhasil ditambahkan.',
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

export const getArticles = (setArticles) => {
	return async (dispatch) => {
		dispatch(
			showAlert({
				variant: 'info',
				message: 'Sedang memuat data artikel',
			})
		);

		const request = async () => {
			const response = await fetch(ENDPOINT + 'article');

			if (!response.ok) {
				throw new Error('Gagal memuat data artikel');
			}

			const resJson = await response.json();
			return resJson;
		};

		try {
			const response = await request();
			setArticles(response.data);
			dispatch(
				showAlert({
					variant: 'success',
					message: 'Berhasil memuat data artikel',
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
