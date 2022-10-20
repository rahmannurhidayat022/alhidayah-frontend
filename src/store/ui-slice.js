import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'UI',
	initialState: {
		offcanvasVisible: false,
	},
	reducers: {
		offcanvasToggle: (state) => {
			state.offcanvasVisible = !state.offcanvasVisible;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
