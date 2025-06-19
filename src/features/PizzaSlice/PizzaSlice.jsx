import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const PizzaSlice = createSlice({
  name: "pizza",
  initialState: initialState,

  reducers: {
    addToPanier: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToPanier } = PizzaSlice.actions;
export const PizzaSliceReducer = PizzaSlice.reducer;
