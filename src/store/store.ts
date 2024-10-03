import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ExtrasSlice from './ExtrasSlice';
import SelectedItemSlice from './SelectedItemSlice';
import CartSlice from './CartSlice';
import { ItemsApi } from './ItemsApi';
import ActiveNavSlice from './activeNavSlice';
import FormInputs from './FormInputs';

const RootReducer = combineReducers({
  ExtrasSlice,
  SelectedItemSlice,
  CartSlice,
  ActiveNavSlice,
  FormInputs,
  [ItemsApi.reducerPath]: ItemsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['CartSlice'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ItemsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export default store;
