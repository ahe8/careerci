import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/usersReducer";
import certificationReducer from "../reducers/certificationReducer";

import { apiSlice } from "../features/api/apiSlice";

import { listenerMiddleware } from "./listenerMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
    certification: certificationReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
