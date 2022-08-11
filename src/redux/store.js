import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contacts/contacts-reduser';

const store = configureStore({
  reducer: {
    contact: contactReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
