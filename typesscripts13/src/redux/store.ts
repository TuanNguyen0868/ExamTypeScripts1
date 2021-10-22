import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';
import { productSlice } from './productSlice';

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
