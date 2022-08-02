import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer.js";
import cartReducer from "../reducers/cartReducer.js";

/* const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Naveen9698",
    }),
  ],
}; */

/* const bigReducer = combineReducers({
  favouritesReducer,
  cartReducer,
}); */

const bigReducer = favouritesReducer;

/* const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store); */

export const store = configureStore({
  reducer: bigReducer,
});

export default store;
