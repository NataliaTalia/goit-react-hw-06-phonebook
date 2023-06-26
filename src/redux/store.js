import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import filterSlice from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice,
  },
});

export const persistor = persistStore(store);
