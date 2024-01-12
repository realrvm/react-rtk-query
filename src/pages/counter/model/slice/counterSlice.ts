import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types";

const initialState: CounterSchema = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    delete: (state) => {
      state.count = 0;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
  selectors: {
    getCountValue: (state) => state.count,
  },
});

export const { actions: counterActions, reducer: counterReducer } =
  counterSlice;

export const { getCountValue } = counterSlice.selectors;
