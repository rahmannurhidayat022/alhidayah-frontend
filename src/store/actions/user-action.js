import { createAsyncThunk } from "@reduxjs/toolkit";

const URL_API = process.env.REACT_APP_URL_API;
const USER_URL_API = URL_API + "user";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch(URL_API + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(
                    "Gagal login, pastikan E-Mail dan Password anda sudah benar."
                );
            }

            const json = await response.json();
            const { access_token, data } = json;

            localStorage.setItem("userToken", access_token);
            localStorage.setItem("userInfo", JSON.stringify(data));

            return json;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (
        { name, role, email, password, password_confirmation },
        { getState, rejectWithValue }
    ) => {
        try {
            const { user } = getState();
            const { userToken } = user;
            const response = await fetch(URL_API + "register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + userToken,
                },
                body: JSON.stringify({
                    name,
                    role,
                    email,
                    password,
                    password_confirmation,
                }),
            });

            if (!response.ok) throw new Error("Gagal mendaftarkan akun");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (url = USER_URL_API, { rejectWithValue }) => {
        try {
            const response = await fetch(url);
            const { data } = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const forgotPassword = createAsyncThunk(
    "user/forgotPassword",
    async ({ email }, { rejectWithValue }) => {
        try {
            const response = await fetch(URL_API + "forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error("Email tidak ditemukan");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const resetPassword = createAsyncThunk(
    "user/resetPassword",
    async (
        { token, email, password, password_confirmation },
        { rejectWithValue }
    ) => {
        try {
            const response = await fetch(URL_API + "reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, email, password, password_confirmation }),
            });

            if (!response.ok) throw new Error("Gagal melakukan reset password");
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (dataForm, { getState, rejectWithValue }) => {
        try {
            const { user } = getState();
            const { userToken, userInfo } = user;
            const response = await fetch(URL_API + "user/" + dataForm?.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + userToken,
                },
                body: JSON.stringify(dataForm),
            });

            if (!response.ok) throw new Error("Gagal melakukan update data user");
            const { message, data } = await response.json();
            if (data?.id === userInfo.id)
                localStorage.setItem("userInfo", JSON.stringify(data));

            return message;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUserById = createAsyncThunk(
    "user/deleteUserById",
    async (id, { getState, rejectWithValue }) => {
        try {
            const { user } = getState();
            const { userToken } = user;
            const response = await fetch(URL_API + "user/" + id, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + userToken,
                },
            });

            if (!response.ok) throw new Error("Gagal menghapus daa user");
            const { message } = await response.json();
            return message;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getUserById = createAsyncThunk(
    "user/getUserById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(USER_URL_API + "/" + id);
            if (!response.ok) throw new Error("Fetching failed...");
            const { data } = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
