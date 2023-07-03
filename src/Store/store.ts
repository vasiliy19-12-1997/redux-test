import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer/combineReducer";

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
