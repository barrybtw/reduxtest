import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./CharactersAPISlice";
import countReducer from "./Count-slice";

export const Store = configureStore({
  reducer: {
    counter: countReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof Store.dispatch;
export type AppState = ReturnType<typeof Store.getState>;
