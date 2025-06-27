import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
};

export const api = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = api;
