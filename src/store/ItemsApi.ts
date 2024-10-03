import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IExtra, IItem } from '../Pages/Home';

export const ItemsApi = createApi({
  reducerPath: 'ItemsApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://661cbef6e7b95ad7fa6afb99.mockapi.io/',
    baseUrl: 'https://react-pizza-server.vercel.app/',
  }),
  endpoints: (builder) => ({
    getItems: builder.query<IItem[], string>({
      query: (query: string) => query,
    }),
    getExtras: builder.query<IExtra[], void>({
      query: () => 'extras',
    }),
  }),
});

export const { useGetItemsQuery, useGetExtrasQuery } = ItemsApi;
