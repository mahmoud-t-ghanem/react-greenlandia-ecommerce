import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("themeMode") || "light",
  language: localStorage.getItem("appLang") || "ar",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.mode);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("appLang", action.payload);
    },
  },
});

export const { toggleTheme, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
