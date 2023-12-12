import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { $api } from "../../../../shared/api";

export const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
});
