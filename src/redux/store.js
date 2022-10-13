import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/themeSlice";

export const store = configureStore({
   reducer: {
      theme: themeReducer,
   },
   // devTools: process.env.NODE_ENV !== 'production',
});
