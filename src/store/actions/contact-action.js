import { createAsyncThunk } from "@reduxjs/toolkit";
import resolveApiPath from "../../utils/resolveApiPath";

const URL_API = process.env.REACT_APP_URL_API + "contact";

export const sendMail = createAsyncThunk(
  "contact/sendMail",
  async ({ name, subject, email, keterangan }, { rejectWithValue }) => {
    try {
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, subject, email, keterangan }),
      });

      if (!response.ok) throw new Error("Gagal mengirim pesan");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllContact = createAsyncThunk(
  "contact/getAllContact",
  async ({ url, query }, { rejectWithValue }) => {
    try {
      const validUrl = resolveApiPath({ baseUrl: URL_API, url, query });
      const response = await fetch(validUrl);
      const { data } = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contact/deleteContactById",
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
      if (!response.ok) throw new Error("Gagal menghapus data kontak");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeReadStatus = createAsyncThunk(
  "contact/changeReadStatus",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const { userToken } = user;
      const response = await fetch(URL_API + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
        body: JSON.stringify({ is_read: "yes" }),
      });

      const { message } = await response.json();
      return message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
