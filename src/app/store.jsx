import { configureStore } from "@reduxjs/toolkit";
import { PizzaSliceReducer } from "../features/PizzaSlice/PizzaSlice";

export const store = configureStore({
  reducer: {
    pizza: PizzaSliceReducer,
  },
});
