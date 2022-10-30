import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
   PictureBarContainer,
   SidebarContainer,
   TopNavDashboardContainer,
} from "../container";
import { GET_USER } from "../redux/features/userSlice";

export default function DashboardLayout() {
   const user = useSelector(GET_USER);

   return (
      <>
         {user.user && (
            <div style={{ position: "relative", height: "100vh" }}>
               <SidebarContainer user={user.user} />
               <TopNavDashboardContainer />
               <Outlet />
               <PictureBarContainer />
            </div>
         )}
      </>
   );
}
