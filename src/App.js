import { ThemeProvider } from "styled-components";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./routes/Layout";
import DashboardLayout from "./routes/DashboardLayout";
import {
   AboutPage,
   ConfirmSignupPage,
   HomePage,
   LoginPage,
   ReservationOverviewPage,
   ReservationPaymentPage,
   ReservationSelectionPage,
   ReservationSuccessPage,
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
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
         {
            index: true,
            element: <UserDashboardPage />,
         },
         {
            path: "/dashboard/reservation-selection",
            element: <ReservationSelectionPage />,
         },
         {
            path: "/dashboard/reservation-overview",
            element: <ReservationOverviewPage />,
         },
      ],
   },
   {
      path: "/dashboard/reservation-payment",
      element: <ReservationPaymentPage />,
   },
   {
      path: "/dashboard/reservation-success",
      element: <ReservationSuccessPage />,
   },
]);

function App() {
   const { theme } = useSelector((state) => state.theme);

   return (
      <>
         <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
         </ThemeProvider>
      </>
   );
}

export default App;
