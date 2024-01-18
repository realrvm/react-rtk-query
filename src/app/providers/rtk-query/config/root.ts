import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { reducers } from "./reducers";
import { listenerMiddleware } from "./middlewares";
import { productsApi } from "@/pages/products/model/api/productsApi";
import { IS_DEV } from "@/shared/lib/constants";
import { $api } from "@/shared/lib/api";
import { axiosLikeApi } from "@/pages/axios-like";

const extraArg = {
  api: $api,
};

export const store = configureStore({
  reducer: reducers,
  devTools: IS_DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    })
      // опционально - используется с listenerMiddleware
      .prepend(listenerMiddleware.middleware)
      .concat([productsApi.middleware, axiosLikeApi.middleware]),
});

// опционально - нужен, если используется refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);
