import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const tokenHeaderControl = {
    set(tokenHeaderControl) {
        axios.defaults.headers.common.Authorization = `Bearer ${tokenHeaderControl}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

export const registration = createAsyncThunk(
    "auth/registration",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("users/signup", credentials);
            tokenHeaderControl.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post("users/login", credentials);
            tokenHeaderControl.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async thunkAPI => {
    try {
        const { data } = await axios.post("users/logout");
        tokenHeaderControl.unset();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshCurrentUser = createAsyncThunk(
    "auth/current",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Error refresh current user.");
        }

        tokenHeaderControl.set(persistedToken);

        try {
            const { data } = await axios.get("users/current");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
