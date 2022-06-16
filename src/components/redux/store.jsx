import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './phonebook/contactSlice';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development', // true //включение devTools при разработке
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;
