import { FC } from "react";

import { Counter } from "@/pages/counter";
import { Products } from "@/pages/products";
import { RandomFood } from "@/pages/random-food";
import { List } from "@/pages/list";
import { Quotes } from "@/pages/quotes";
import { AxiosLike } from "@/pages/axios-like";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  return (
    <div className="main">
      <h1>rtk-query</h1>
      <Counter />
      <Quotes />
      <List />
      <RandomFood />
      <AxiosLike />
      <Products />
    </div>
  );
};
