import { AxiosInstance } from "axios";

import { CounterSchema } from "@/pages/counter";
import { productsApi } from "@/pages/products/model/api/productsApi";
import { RandomFoodSchema } from "@/pages/random-food";
import { ListItem } from "@/pages/list";

export type StateSchema = {
  counter: CounterSchema;
  randomFood: RandomFoodSchema;
  list: ListItem[];
  [productsApi.reducerPath]: ReturnType<typeof productsApi.reducer>;
};

type ExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectedValue: T;
  extra: ExtraArg;
};

export type ListenerConfig = ExtraArg;
