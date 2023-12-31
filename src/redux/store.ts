import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import entitiesReducer from "./features/entities/entitiesSlice";

export const store = configureStore({
    reducer: { counter: counterReducer, entities: entitiesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
