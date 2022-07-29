import favouritesReducer from "../reducers/favouritesReducer.js";

import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Naveen9698",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, favouritesReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
