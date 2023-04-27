import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";

const persistConfig = {
    key: "contacts",
    storage,
    blacklist: ["filter"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        });
    },
});

export const persistor = persistStore(store);
