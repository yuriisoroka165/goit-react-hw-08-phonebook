import { createSlice } from "@reduxjs/toolkit";

import { registration, login } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuthorized: false,
};

// const hadlePending = state => {
//     state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
        },
    },
});

export const authReducer = authSlice.reducer;
