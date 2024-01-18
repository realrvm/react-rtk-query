import {
  TypedStartListening,
  TypedStopListening,
  TypedAddListener,
  createListenerMiddleware,
  addListener,
} from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "../types";
import { $api_dummy } from "@/shared/lib/api";
import { QuotesSchema, quotesActions } from "@/pages/quotes";
import { ListenerConfig } from "..";
import { AxiosError } from "axios";

const extraArgument = {
  api: $api_dummy,
};

export const listenerMiddleware = createListenerMiddleware({
  extra: extraArgument,
});

const { startListening, stopListening } = listenerMiddleware;

type AppStartListening = TypedStartListening<RootState, AppDispatch>;
type AppStopListening = TypedStopListening<RootState, AppDispatch>;
type AppAddListener = TypedAddListener<RootState, AppDispatch>;

export const startAppListening = startListening as AppStartListening;
export const stopAppListening = stopListening as AppStopListening;
export const addAppListener = addListener as AppAddListener;

startAppListening({
  actionCreator: quotesActions.addQouteId,
  effect: async (action, listenerApi) => {
    const { extra, delay, dispatch } = listenerApi;
    const { quoteId } = action.payload;
    // delay
    await delay(1000);
    try {
      const response = await (extra as ListenerConfig).api.get<
        Omit<QuotesSchema, "quoteId">
      >(`/quotes/${quoteId}`);

      dispatch(quotesActions.addQoutes(response.data));
    } catch (err) {
      const error: AxiosError<any> = err as Error & AxiosError<any>;

      if (!error.response) {
        throw (err as Error).message;
      }

      // TODO
      return error.response.data;
    }
  },
});
