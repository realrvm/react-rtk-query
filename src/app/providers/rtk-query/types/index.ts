import { store } from "../config/root";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
