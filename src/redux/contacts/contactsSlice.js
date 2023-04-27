import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
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

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: hadlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = true;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: hadlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = true;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: hadlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = true;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
});

export const contactsReducer = contactsSlice.reducer;
