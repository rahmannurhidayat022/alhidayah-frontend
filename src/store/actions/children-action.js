import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_APP = process.env.REACT_APP_URL_API + "anak";

export const getAllChildrenData = createAsyncThunk(
  "children/getAllChildrenData",
  async (url = URL_APP, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal fetching data anak");
      const { data } = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getChildrenDataById = createAsyncThunk(
  "children/getChildrenDataById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(URL_APP + "/" + id);
      if (!response.ok) throw new Error("Gagal fetching data anak");
      const { data } = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addChildrenData = createAsyncThunk(
  "children/addChildrenData",
  async (
    {
      nama_anak,
      nik,
      tempat_lahir,
      jenis_kelamin,
      tanggal_lahir,
      nama_ibu,
      nama_ayah,
      status,
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_APP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({
          nama_anak,
          nik,
          tempat_lahir,
          jenis_kelamin,
          tanggal_lahir,
          nama_ibu,
          nama_ayah,
          status,
        }),
      });
      if (!response.ok) throw new Error("Gagal menambahkan data anak");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteChildrenDataById = createAsyncThunk(
  "children/deleteChildrenDataById",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_APP + "/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (!response.ok) throw new Error("Gagal menghapus data anak");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateChildrenDataById = createAsyncThunk(
  "children/updateChildrenDataById",
  async (
    {
      id,
      nama_anak,
      nik,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      nama_ibu,
      nama_ayah,
      status,
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_APP + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({
          nama_anak,
          nama_ayah,
          nama_ibu,
          nik,
          tempat_lahir,
          tanggal_lahir,
          jenis_kelamin,
          status,
        }),
      });
      if (!response.ok) throw new Error("Gagal memperbaharui data anak");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
