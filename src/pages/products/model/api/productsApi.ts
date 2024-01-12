import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Products } from "../types";
import { DUMMY_JSON_URL } from "@/shared/lib/constants";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: DUMMY_JSON_URL }),
  endpoints: (builder) => ({
    getProductsList: builder.query<Products, void>({
      query: () => "/products",
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export const useGetProductsList = productsApi.useGetProductsListQuery;
