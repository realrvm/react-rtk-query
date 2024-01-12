import { combineSlices } from "@reduxjs/toolkit";

import { counterReducer } from "@/pages/counter";
import { productsApi } from "@/pages/products/model/api/productsApi";
import { randomFoodReducer } from "@/pages/random-food";
import { listReducer } from "@/pages/list";

export const reducers = combineSlices(productsApi, {
  counter: counterReducer,
  randomFood: randomFoodReducer,
  list: listReducer,
});
