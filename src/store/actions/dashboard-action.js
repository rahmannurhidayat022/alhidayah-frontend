import { createAsyncThunk } from "@reduxjs/toolkit";

const URL_API = process.env.REACT_APP_URL_API + "dashboard";

export const getAllDashboard = createAsyncThunk("dashboard/getAllDashboard", async (_arg, { rejectWithValue }) => {
  try {
    const response = await fetch(URL_API);

    if (!response.ok) throw new Error("Gagal Fetch Dashboard");

    const { data } = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
