import { Outlet } from "react-router-dom";
import {
   PictureBarContainer,
   SidebarContainer,
   TopNavDashboardContainer,
} from "../container";

export default function DashboardLayout() {
   return (
      <div style={{ position: "relative", height: "100vh" }}>
         <SidebarContainer />
         <TopNavDashboardContainer />
         <Outlet />
         <PictureBarContainer />
      </div>
   );
}
