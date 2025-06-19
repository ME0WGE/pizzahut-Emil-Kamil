import { configureStore } from "@reduxjs/toolkit";
import { PizzaSliceReducer } from "../features/PizzaSlice/PizzaSlice";
import { PanierSliceReducer } from "../features/PanierSlice/PanierSlice";

export const store = configureStore({
  reducer: {
    pizza: PizzaSliceReducer,
    panier: PanierSliceReducer,
  },
});
