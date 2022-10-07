import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

import CUSTOM_DEFAULT_THEME, { CUSTOM_DARK_THEME } from "./Constants/theme";

import {
   AboutPage,
   ConfirmSignupPage,
   HomePage,
   LoginPage,
   SignupPage,
   SuccessSignupConfirmPage,
   UserDashboardPage,
} from "./pages";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
      ],
   },
   {
      path: "/about",
      element: <AboutPage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/register",
      element: <SignupPage />,
   },
   {
      path: "/confirmRegisteration",
      element: <ConfirmSignupPage />,
   },
   {
      path: "/registeration-succcess",
      element: <SuccessSignupConfirmPage />,
   },
   {
      path: "/dashboard",
      element: <UserDashboardPage />,
   },
]);

function App() {
   const [isDarkTheme, setIsDarkTheme] = useState(false);
   const theme = isDarkTheme ? CUSTOM_DARK_THEME : CUSTOM_DEFAULT_THEME;

   //usage
   /* background: ${({ theme }) => theme.secondary}; */

   return (
      <>
         <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
         </ThemeProvider>
      </>
   );
}

export default App;
