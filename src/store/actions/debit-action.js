import { createAsyncThunk } from "@reduxjs/toolkit";

const URL_API = process.env.REACT_APP_URL_API + "rekening";

export const getAllDebit = createAsyncThunk("debit/getAllDebit", async(url = URL_API, { rejectWithValue }) => {
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Gagal Fetch Rekening");

        const { data } = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getDebitById = createAsyncThunk("debit/getDebitById", async(id, { rejectWithValue }) => {
    try {
        const response = await fetch(URL_API + "/" + id);

        if (!response.ok) throw new Error("Gagal Fetch Rekening");

        const { data } = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const createDebit = createAsyncThunk("debit/createDebit", async({ nomor_rekening, nama_bank, atas_nama }, { getState, rejectWithValue }) => {
    try {
        const { user } = getState();
        const { userToken } = user;
        const response = await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + userToken,
            },
            body: JSON.stringify({ nomor_rekening, nama_bank, atas_nama }),
        });

        if (!response.ok) throw new Error("Gagal menambahkan data rekening");
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateDebit = createAsyncThunk("debit/updateDebit", async({ id, nomor_rekening, nama_bank, atas_nama }, { getState, rejectWithValue }) => {
    try {
        const { user } = getState();
        const { userToken } = user;
        const response = await fetch(URL_API + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + userToken,
            },
            body: JSON.stringify({ nomor_rekening, nama_bank, atas_nama }),
        });

        if (!response.ok) throw new Error("Gagal update data rekening");
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const deleteDebitById = createAsyncThunk("debit/deleteDebitById", async(id, { getState, rejectWithValue }) => {
    try {
        const { user } = getState();
        const { userToken } = user;
        const response = await fetch(URL_API + "/" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + userToken,
            },
        });

        if (!response.ok) throw new Error("Gagal delete data rekening");
    } catch (error) {
        return rejectWithValue(error.message);
    }
});