import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { rectanglesReducer } from "entities/Rectangles";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    rectangles: rectanglesReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
