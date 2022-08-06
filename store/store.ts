import { combineReducers, configureStore } from "@reduxjs/toolkit";
import startReducer from "./start/reducer";

const rootReducer = combineReducers({
  startReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore["dispatch"];
