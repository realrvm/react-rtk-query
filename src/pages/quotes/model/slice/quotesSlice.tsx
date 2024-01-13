import { createSlice } from "@reduxjs/toolkit";

import { QuotesSchema } from "../types";

const initialState: QuotesSchema = {
  quote: "",
  author: "",
  quoteId: "",
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: (create) => ({
    addQoutes: create.reducer<Omit<QuotesSchema, "id" | "quoteId">>(
      (state, action) => {
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      },
    ),
    addQouteId: create.reducer<Pick<QuotesSchema, "quoteId">>(
      (state, action) => {
        state.quoteId = action.payload.quoteId;
      },
    ),
  }),
  selectors: {
    getQuote: (state) => state,
  },
});

export const { reducer: quotesReducer, actions: quotesActions } = quotesSlice;

export const { getQuote } = quotesSlice.selectors;
