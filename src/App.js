import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery, gql } from "@apollo/client";

import Layout from "./routes/Layout";
import ProfileLayout from "./routes/ProfileLayout";
import DashboardLayout from "./routes/DashboardLayout";
import {
   AboutPage,
   AccountSettingsPage,
   ConfirmSignupPage,
   HomePage,
   LoginPage,
   ReservationOverviewPage,
   ReservationPaymentPage,
   ReservationSelectionPage,
   ReservationSuccessPage,
   SignupPage,
   SubscriptionsPage,
   SuccessSignupConfirmPage,
   TutorialsPage,
   UserDashboardPage,
} from "./pages";
import { Loader } from "./components";

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
   {
      path: "/dashboard/profile",
      element: <ProfileLayout />,
      children: [
         {
            index: true,
            element: <AccountSettingsPage />,
         },
         {
            path: "/dashboard/profile/subscriptions",
            element: <SubscriptionsPage />,
         },
         {
            path: "/dashboard/profile/tutorials",
            element: <TutorialsPage />,
         },
      ],
   },
]);

const USERS = gql`
   query Users {
      users {
         id
         email
         phone
         createdAt
      }
   }
`;
function App() {
   const { theme } = useSelector((state) => state.theme);
   // const { loading, error, data } = useQuery(USERS);

   // if (loading) return <Loader />;
   // if (!data) return <h1>no data</h1>;
   // if (error) return <p>Error :(</p>;
   // console.log(data);

   return (
      <>
         <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
         </ThemeProvider>
      </>
   );
}

export default App;
