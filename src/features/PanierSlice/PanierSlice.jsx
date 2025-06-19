import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PanierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addToPanier: (state, action) => {
      state.push(action.payload);
    },
    removeFromPanier: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
    clearPanier: () => {
      return [];
    },
  },
});

export const { addToPanier, removeFromPanier, clearPanier } =
  PanierSlice.actions;
export const PanierSliceReducer = PanierSlice.reducer;
