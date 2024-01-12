import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../config/root";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
