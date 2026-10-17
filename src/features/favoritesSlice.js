import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = JSON.parse(localStorage.getItem("favoriteItems")) || [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("favoriteItems", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
