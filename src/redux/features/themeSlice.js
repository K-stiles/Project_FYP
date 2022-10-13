import { createSlice } from "@reduxjs/toolkit";

//constants
import CUSTOM_DEFAULT_THEME, { CUSTOM_DARK_THEME } from "../../constants/theme";

export const ThemeSlice = createSlice({
   name: "theme",
   initialState: {
      isDarkTheme: false,
      theme: CUSTOM_DEFAULT_THEME,
   },
   reducers: {
      setDefaultTheme: (state) => {
         state.isDarkTheme = false;
         state.theme = CUSTOM_DEFAULT_THEME;
      },
      setDarkTheme: (state) => {
         state.isDarkTheme = true;
         state.theme = CUSTOM_DARK_THEME;
      },
   },
});

export const { setDefaultTheme, setDarkTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
