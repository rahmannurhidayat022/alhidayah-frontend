import { createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINT } from '../temp/endpoint';

const ARTICLE_URI = ENDPOINT + 'article';

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
