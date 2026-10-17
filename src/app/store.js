import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice";
import cartReducer from "../features/cartSlice";
import favoritesReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
