import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PanierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    addToPanier: (state, action) => {
      // Vérifier si l'article existe déjà (même nom)
      const existingItem = state.find(
        (item) => item.nom === action.payload.nom
      );
      if (existingItem) {
        // Si l'article existe, augmenter sa quantité
        existingItem.quantite += 1;
      } else {
        // Sinon ajouter un nouvel article avec quantité 1
        state.push({
          ...action.payload,
          quantite: 1,
        });
      }
    },
    removeFromPanier: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item, index) => index === action.payload);
      if (item) {
        item.quantite += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item, index) => index === action.payload);
      if (item && item.quantite > 1) {
        item.quantite -= 1;
      }
    },
    clearPanier: () => {
      return [];
    },
  },
});

export const {
  addToPanier,
  removeFromPanier,
  increaseQuantity,
  decreaseQuantity,
  clearPanier,
} = PanierSlice.actions;

export const PanierSliceReducer = PanierSlice.reducer;
