// import { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./globalStyles";
import { NavBar } from "./components";
import { FooterContainer } from "./container";
import {
  ConfirmSignupPage,
  HomePage,
  SignupPage,
  SuccessSignupConfirmPage,
  UserDashboardPage,
} from "./pages";
import LoginPage from "./pages/Auth/LoginPage";

// const DefaultTheme = {
//   background: "#fff",
//   text: "#222",

//   grey: "#ccceee",

//   white: "#fff",
//   dark: "#222",
// };
// const DarkTheme = {
//   background: "#222",
//   text: "#fff",

//   grey: "#ccceee",

//   white: "#fff",
//   dark: "#222",
// };

function App() {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <>
      {/* <NavBar />
      <HomePage />
      <FooterContainer /> */}
      {/* <SignupPage /> */}
      {/* <ConfirmSignupPage /> */}
      {/* <SuccessSignupConfirmPage /> */}
      {/* <LoginPage /> */}
      <UserDashboardPage />

      {/* <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider> */}
    </>
  );
}

export default App;
