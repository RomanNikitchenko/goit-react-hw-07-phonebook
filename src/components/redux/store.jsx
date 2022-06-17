import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './phonebook/contactSlice';
import phonebookReducer from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;
