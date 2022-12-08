import { createSlice } from '@reduxjs/toolkit';
import {
	addArticle,
	deleteArticleById,
	getArticleById,
	getArticles,
} from './article-action';

const initialState = {
	items: null,
	item: null,
	loading: false,
	success: null,
	error: null,
	pagination: {
		firstPage: null,
		lastPage: null,
		next: null,
		prev: null,
		links: null,
		totalItem: null,
		totalPage: null,
		currentPage: null,
	},
};

const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: {
		[getArticles.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getArticles.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.items = payload.data;
			state.pagination.firstPage = payload.first_page_url;
			state.pagination.lastPage = payload.last_page_url;
			state.pagination.next = payload.next_page_url;
			state.pagination.prev = payload.prev_page_url;
			state.pagination.links = payload.links;
			state.pagination.totalItem = payload.total;
			state.pagination.totalPage = payload.last_page;
			state.pagination.currentPage = payload.current_page;
		},
		[getArticles.rejected]: (state, { payload }) => {
			state.loading = false;
		},
		[addArticle.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[addArticle.fulfilled]: (state) => {
			state.loading = false;
			state.success = 'Berhasil menambahkan data artikel';
		},
		[addArticle.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getArticleById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[getArticleById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.item = payload;
		},
		[getArticleById.rejected]: (state, { payload }) => {
			state.loading = false;
		},
		[deleteArticleById.pending]: (state) => {
			state.loading = true;
			state.success = null;
			state.error = null;
		},
		[deleteArticleById.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = 'Berhasil menghapus artikel';
		},
		[deleteArticleById.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default articleSlice.reducer;
