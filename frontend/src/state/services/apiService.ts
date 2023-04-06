import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).login.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery,
    endpoints: (builder) => ({


    })
});


export const {

} = Api

