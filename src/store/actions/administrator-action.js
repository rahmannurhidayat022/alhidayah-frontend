import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_API = process.env.REACT_APP_URL_API + "pengurus";

export const insertAdministratorData = createAsyncThunk(
  "administrator/insertAdministratorData",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Gagal menambahkan data pengurus");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAdministratorData = createAsyncThunk(
  "administrator/updateAdministratorData",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_API + "/" + data.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Gagal memperbaharui data pengurus");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeAdministratorData = createAsyncThunk(
  "administrator/removeAdministratorData",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_API + "/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (!response.ok) throw new Error("Gagal menghapus data pengurus");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAdministratorData = createAsyncThunk(
  "administrator/getAdministratorData",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = await fetch(URL_API);
      if (!response.ok) throw new Error("Fetching Failed...");
      const { data } = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAdministratorDataById = createAsyncThunk(
  "administrator/getAdministratorDataById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(URL_API + "/" + id);
      if (!response.ok) throw new Error("Fetching Failed...");
      const { data } = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
