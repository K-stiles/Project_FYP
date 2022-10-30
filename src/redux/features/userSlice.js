import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
   user: null,
   isVerified: false,
   login: null,
   logout: null,
};

let decodedToken;
if (localStorage.getItem("jwtToken")) {
   decodedToken = jwtDecode(localStorage.getItem("jwtToken"));

   if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
   } else {
      initialState.user = decodedToken;
   }
}

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      fetchUser: (state, { payload }) => {
         state.user = payload;
      },
      // storeLoginToken: (state) => {
      //    localStorage.setItem("jwtToken", state.user?.token);
      // },
      logout: (state) => {
         state.user = null;
         // localStorage.removeItem("jwtToken");
      },
      updateUsername: (state, { payload }) => {
         state.user = payload;
      },
      getAuthToken: (state, { payload }) => {
         state.user = decodedToken;
      },
   },
});

export const { fetchUser, getAuthToken, logout, updateUsername } =
   userSlice.actions;
export const GET_USER = (state) => state.authUser;

export default userSlice.reducer;
