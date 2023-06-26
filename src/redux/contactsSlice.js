import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      state.push(action.payload); // return [...state, action.payload];
    },
    deleteContacts(state, action) {
      state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

//  JSON.parse(window.localStorage.getItem('contacts')) ||
