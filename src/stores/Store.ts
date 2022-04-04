import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Count-slice";

export const Store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type AppState = ReturnType<typeof Store.getState>;
