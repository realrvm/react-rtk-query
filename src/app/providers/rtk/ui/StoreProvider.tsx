import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import { StateSchema } from "../config/schema";
import { store } from "../config/root";

type StoreProviderProps = {
  children: ReactNode;
  initialState?: StateSchema;
};

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
