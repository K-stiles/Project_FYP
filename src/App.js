import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./routes/Layout";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProfileLayout from "./routes/ProfileLayout";
import DashboardLayout from "./routes/DashboardLayout";
import {
   AboutPage,
   AccountSettingsPage,
   ConfirmSignupPage,
   HomePage,
   LoginPage,
   NotFound,
   ReservationOverviewPage,
   ReservationPaymentPage,
   ReservationSelectionPage,
   ReservationSuccessPage,
   SignupPage,
   SubscriptionsPage,
   SuccessSignupConfirmPage,
   TutorialsPage,
   Unauthorized,
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
      path: "/unauthorized",
      element: <Unauthorized />,
   },
   {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
         {
            path: "dashboard",
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
               {
                  path: "/dashboard/reservation-payment",
                  element: <ReservationPaymentPage />,
               },
               {
                  path: "/dashboard/reservation-success",
                  element: <ReservationSuccessPage />,
               },
            ],
         },
         {
            path: "profile",
            element: <ProfileLayout />,
            children: [
               {
                  index: true,
                  element: <AccountSettingsPage />,
               },
               {
                  path: "/profile/subscriptions",
                  element: <SubscriptionsPage />,
               },
               {
                  path: "/profile/tutorials",
                  element: <TutorialsPage />,
               },
            ],
         },
      ],
   },
   // {
   //    path: "/dashboard",
   //    element: <DashboardLayout />,
   //    children: [
   //       {
   //          index: true,
   //          element: <UserDashboardPage />,
   //       },
   //       {
   //          path: "/dashboard/reservation-selection",
   //          element: <ReservationSelectionPage />,
   //       },
   //       {
   //          path: "/dashboard/reservation-overview",
   //          element: <ReservationOverviewPage />,
   //       },
   //    ],
   // },
   // {
   //    path: "/dashboard/reservation-payment",
   //    element: <ReservationPaymentPage />,
   // },
   // {
   //    path: "/dashboard/reservation-success",
   //    element: <ReservationSuccessPage />,
   // },
   // {
   //    path: "/dashboard/profile",
   //    element: <ProfileLayout />,
   //    children: [
   //       {
   //          index: true,
   //          element: <AccountSettingsPage />,
   //       },
   //       {
   //          path: "/dashboard/profile/subscriptions",
   //          element: <SubscriptionsPage />,
   //       },
   //       {
   //          path: "/dashboard/profile/tutorials",
   //          element: <TutorialsPage />,
   //       },
   //    ],
   // },

   {
      path: "*",
      element: <NotFound />,
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
