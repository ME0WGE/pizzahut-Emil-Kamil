import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  nom: "",
  description: "",
  prix: 0,
  ingredients: {
    sauce: "",
    fromages: "",
    légumes: "",
    viandes: "",
  },
};

export const PizzaSlice = createSlice({
  name: "pizza",
  initialState: initialState,

  reducers: {},
});

export const PizzaSliceReducer = PizzaSlice.reducer;
