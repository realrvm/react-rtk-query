import { FC } from "react";

import { Counter } from "@/pages/counter";
import { Products } from "@/pages/products";
import { RandomFood } from "@/pages/random-food";
import { List } from "@/pages/list";

type AppProps = Record<string, never>;

export const App: FC<AppProps> = () => {
  return (
    <div className="main">
      <h1>rtk-query</h1>
      <Counter />
      <List />
      <RandomFood />
      <Products />
    </div>
  );
};
