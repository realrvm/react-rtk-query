import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";

import { axiosLikeActions } from "../slice/axiosLikeSlice";
import { AuthSchema, UserSchema } from "../types";

import { DUMMY_JSON_URL } from "@/shared/lib/constants";
import { RootState } from "@/app/providers/rtk-query/types";

const baseQuery = fetchBaseQuery({
  baseUrl: DUMMY_JSON_URL,

  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    try {
      const refreshResponse = await baseQuery(
        {
          url: "/auth/login/",
          method: "POST",
          body: JSON.stringify({ username: "kminchelle", password: "0lelplR" }),
        },
        api,
        extraOptions,
      );

      if (refreshResponse.data) {
        api.dispatch(
          axiosLikeActions.refreshToken(refreshResponse.data as any),
        );
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }

  return result;
};

export const axiosLikeApi = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    get401request: builder.query<any, void>({
      query: () => "/http/401/Unauthorized",
    }),
    getToken: builder.query<any, any>({
      query: (user: UserSchema) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      transformResponse: (response: AuthSchema) => response.token,
    }),
  }),
});

export const get401 = axiosLikeApi.endpoints.get401request.initiate();
