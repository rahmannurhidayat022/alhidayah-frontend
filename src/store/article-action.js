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
