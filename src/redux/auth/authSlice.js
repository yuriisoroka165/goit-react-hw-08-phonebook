import { createSlice } from "@reduxjs/toolkit";

import {
    registration,
    login,
    logout,
    refreshCurrentUser,
} from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuthorized: false,
    isLoading: false,
    error: null,
};

const hadlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [registration.pending]: hadlePending,
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
        },
        [registration.rejected]: handleRejected,
        [login.pending]: hadlePending,
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
        },
        [login.rejected]: handleRejected,
        [logout.pending]: hadlePending,
        [logout.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isAuthorized = false;
            state.isLoading = false;
            state.error = null;
        },
        [logout.rejected]: handleRejected,
        [refreshCurrentUser.pending]: hadlePending,
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isAuthorized = true;
        },
        [refreshCurrentUser.rejected]: handleRejected,
    },
});

export const authReducer = authSlice.reducer;
