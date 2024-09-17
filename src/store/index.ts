import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';

// this store is not in use anymore. 
export const oldStore = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    favorite: favoriteReducer
  }
});

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  favorite: favoriteReducer
});
const persistConfig = {
  key: 'root',
  storage, // using localStorage to persist the Redux store
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;