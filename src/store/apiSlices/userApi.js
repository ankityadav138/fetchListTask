import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, GET_USERS} from '../../utils/config';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getUsers: builder.mutation({
      query: params => ({
        url: GET_USERS,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const {useGetUsersMutation} = userApi;
