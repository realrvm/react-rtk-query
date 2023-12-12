import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../lib/consts";

export const $api = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => headers,
  }),
  endpoints: () => ({}),
});
