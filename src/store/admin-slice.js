import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
	name: 'Admin State',
	initialState: {
		articles: {
			data: [],
			count: 0,
		},
	},
	reducers: {
		addArticles: (state, action) => {
			state.articles.data.push(action.payload);
			state.articles.count = state.articles.data.length;
		},
	},
});

export const { addArticles } = adminSlice.actions;
export default adminSlice.reducer;
