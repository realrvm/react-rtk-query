import { combineSlices } from "@reduxjs/toolkit";

import { counterReducer } from "@/pages/counter";
import { productsApi } from "@/pages/products/model/api/productsApi";
import { randomFoodReducer } from "@/pages/random-food";
import { listReducer } from "@/pages/list";
import { quotesReducer } from "@/pages/quotes";
import { axiosLikeApi, axiosLikeReducer } from "@/pages/axios-like";

export const reducers = combineSlices(productsApi, axiosLikeApi, {
  counter: counterReducer,
  randomFood: randomFoodReducer,
  list: listReducer,
  quotes: quotesReducer,
  auth: axiosLikeReducer,
});
