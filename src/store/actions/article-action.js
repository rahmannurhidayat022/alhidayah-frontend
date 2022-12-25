import { createAsyncThunk } from '@reduxjs/toolkit';

const ARTICLE_URI = process.env.REACT_APP_URL_API + 'article';

export const getArticles = createAsyncThunk(
	'article/getArticles',
	async (ARTICLE_ENDPOINT = ARTICLE_URI, { rejectWithValue }) => {
		try {
			const response = await fetch(ARTICLE_ENDPOINT);
			const { data } = await response.json();
			return data;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const addArticle = createAsyncThunk(
	'article/getArticle',
	async ({ title, desc, image, author_id }, { getState, rejectWithValue }) => {
		try {
			const formdata = new FormData();
			formdata.append('title', title);
			formdata.append('desc', desc);
			formdata.append('image', image);
			formdata.append('author_id', author_id);

			const { user } = getState();
			const { userToken } = user;

			const response = await fetch(ARTICLE_URI, {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + userToken,
				},
				body: formdata,
			});

			if (!response.ok) {
				throw new Error('Gagal menambahkan data Artikel.');
			}

			const resJson = await response.json();
			return resJson;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const getArticleById = createAsyncThunk(
	'article/getArticleById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await fetch(ARTICLE_URI + '/' + id);
			const { data } = await response.json();
			return data;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const updateArticleById = createAsyncThunk(
	'article/updateArticleById',
	async ({ id, title, desc, image }, { getState, rejectWithValue }) => {
		try {
			const { user } = getState();
			const { userToken } = user;
			const formData = new FormData();
			formData.append('title', title);
			formData.append('desc', desc);
			formData.append('image', image);
			formData.append('_method', 'PUT');
			const response = await fetch(ARTICLE_URI + '/' + id, {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + userToken,
				},
				body: formData,
			});

			if (!response.ok) throw new Error('Gagal memperbaharui data artikel');
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteArticleById = createAsyncThunk(
	'article/deleteArticleById',
	async (id, { getState, rejectWithValue }) => {
		try {
			const { user } = getState();
			const { userToken } = user;

			const response = await fetch(ARTICLE_URI + '/' + id, {
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + userToken,
				},
			});

			if (!response.ok) throw new Error('Gagal menghapus artikel.');
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);
