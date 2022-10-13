import { Outlet } from "react-router-dom";

import { NavBar } from "../components";
import { FooterContainer } from "../container";

export default function Layout() {
   return (
      <>
         <NavBar />
         <Outlet />
         <FooterContainer />
      </>
   );
}
