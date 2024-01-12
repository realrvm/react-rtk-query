import {
  TypedStartListening,
  TypedStopListening,
  TypedAddListener,
  createListenerMiddleware,
  addListener,
} from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "../types";

export const listenerMiddleware = createListenerMiddleware();
const { startListening, stopListening } = listenerMiddleware;

type AppStartListening = TypedStartListening<RootState, AppDispatch>;
type AppStopListening = TypedStopListening<RootState, AppDispatch>;
type AppAddListener = TypedAddListener<RootState, AppDispatch>;

export const startAppListening = startListening as AppStartListening;
export const stopAppListening = stopListening as AppStopListening;
export const addAppListener = addListener as AppAddListener;
