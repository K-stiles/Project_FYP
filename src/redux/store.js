import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import themeReducer from "./features/themeSlice";
import reservationReducer from "./features/reservationSlice";

export const store = configureStore({
   reducer: {
      authUser: userReducer,
      theme: themeReducer,
      reservation: reservationReducer,
   },
   // devTools: process.env.NODE_ENV !== 'production',
});
