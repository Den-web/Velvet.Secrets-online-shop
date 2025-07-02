import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import dropdownReducer from './dropdownSlice';
import { api } from './productsApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dropdown: dropdownReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
