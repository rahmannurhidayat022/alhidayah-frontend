import { createAsyncThunk } from "@reduxjs/toolkit";

const URL_API = process.env.REACT_APP_URL_APP + "yayasan";

export const addInstitutionData = createAsyncThunk(
  "institution/addInstitutionData",
  async (
    {
      nama_yayasan,
      akte_notaris,
      kemenkumham,
      npwp,
      sk_kota,
      sk_provinsi,
      profil_yayasan,
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + userToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama_yayasan,
          akte_notaris,
          kemenkumham,
          npwp,
          sk_kota,
          sk_provinsi,
          profil_yayasan,
        }),
      });
      if (!response.ok) throw new Error("Gagal menambahkan data yayasan");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.value);
    }
  }
);

export const updateInstitutionData = createAsyncThunk(
  "institution/updateInstitutionData",
  async (
    {
      id,
      nama_yayasan,
      akte_notaris,
      kemenkumham,
      npwp,
      sk_kota,
      sk_provinsi,
      profil_yayasan,
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_API + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({
          nama_yayasan,
          akte_notaris,
          kemenkumham,
          npwp,
          sk_kota,
          sk_provinsi,
          profil_yayasan,
        }),
      });
      if (!response.ok) throw new Error("Gagal memperbaharui data yayasan.");
      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteInstitutionDataById = createAsyncThunk('institution/deleteInstitutionDataById' async (id, { getState, rejectWithValue }) => {
  try {
    const { user } = getState();
    const { userToken } = user;
    const response = await fetch(URL_API + '/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + userToken,
      },
    })
    if (!response.ok) throw new Error('Gagal menghapus data yayasan.');
    const { message } = await response.json();
    return message;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getInstitutionData = createAsyncThunk('institution/getInstitutionData', async (arg, { rejectWithValue }) => {
  try {
    const response = await fetch(URL_API);
    if (!response.ok) throw new Error('Gagal fetching data yayasan');
    const { data } = await response.json();
    return data[0] || null;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})
