import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { reducers } from "./reducers";
import { listenerMiddleware } from "./middlewares";
import { productsApi } from "@/pages/products/model/api/productsApi";
import { IS_DEV } from "@/shared/lib/constants";
import { $api } from "@/shared/lib/api";

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
      .concat(productsApi.middleware),
});

// опционально - нужен, если используется refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);
