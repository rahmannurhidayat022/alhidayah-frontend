import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'UI',
	initialState: {
		offcanvasVisible: false,
		alert: {
			isShow: false,
			variant: '',
			message: '',
		},
	},
	reducers: {
		offcanvasToggle: (state) => {
			state.offcanvasVisible = !state.offcanvasVisible;
		},
		showAlert: (state, action) => {
			state.alert.isShow = true;
			state.alert.message = action.payload.message;
			state.alert.variant = action.payload.variant;
		},
		closeAlert: (state) => {
			state.alert.isShow = false;
			state.alert.message = '';
			state.alert.variant = '';
		},
	},
});

export const { offcanvasToggle, showAlert, closeAlert } = uiSlice.actions;
export default uiSlice.reducer;
