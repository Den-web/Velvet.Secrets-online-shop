import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Product = { id: string; name: string; price: number };

export const api = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = api;
