import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PanierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addToPanier: (state, action) => {
      const existingItem = state.find(
        (item) =>
          item.nom === action.payload.nom &&
          JSON.stringify(item.ingr) === JSON.stringify(action.payload.ingr)
      );
      if (existingItem) {
        existingItem.quantite += 1;
      } else {
        state.push({
          ...action.payload,
          quantite: 1,
          id: action.payload.id || Date.now() + Math.random(),
        });
      }
    },
    removeFromPanier: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantite += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantite > 1) {
        item.quantite -= 1;
      }
    },
    clearPanier: () => {
      return [];
    },
    updatePanier: (state, action) => {
      const { id, pizza } = action.payload;
      const idx = state.findIndex((item) => item.id === id);
      if (idx !== -1) {
        state[idx] = { ...state[idx], ...pizza };
      }
    },
  },
});

export const {
  addToPanier,
  removeFromPanier,
  increaseQuantity,
  decreaseQuantity,
  clearPanier,
  updatePanier,
} = PanierSlice.actions;

export const PanierSliceReducer = PanierSlice.reducer;
