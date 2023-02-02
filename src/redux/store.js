import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contact.slice';
import { filterReducer } from './Filter.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
