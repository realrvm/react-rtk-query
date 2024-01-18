import { createSlice } from "@reduxjs/toolkit";

import { AuthSchema } from "../types";

const initialState: AuthSchema = {
  token: "",
};

const axiosLikeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    refreshToken: create.reducer<AuthSchema>((state, action) => {
      state.token = action.payload.token;
    }),
  }),
  selectors: {
    getToken: (state) => state.token,
  },
});

export const { reducer: axiosLikeReducer, actions: axiosLikeActions } =
  axiosLikeSlice;

export const { getToken } = axiosLikeSlice.selectors;
