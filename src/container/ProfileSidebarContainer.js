import { useDispatch } from "react-redux";

import { profileSideBarRoute } from "../utils";
import { ProfileSidebar } from "../components";
import { logout } from "../redux/features/userSlice";

export default function ProfileSidebarContainer() {
   const dispatch = useDispatch();

   function logUserOut() {
      localStorage.removeItem("jwtToken");
      dispatch(logout());
   }

   return (
      <ProfileSidebar>
         <ProfileSidebar.Container>
            <ProfileSidebar.Labels>
               {profileSideBarRoute?.map((item) => (
                  <ProfileSidebar.LabelRow key={item.id} to={item.route}>
                     <ProfileSidebar.LabelIcon
                        src="/images/side-inbox.png"
                        alt="label icon"
                     />
                     <ProfileSidebar.Label>{item.name}</ProfileSidebar.Label>
                  </ProfileSidebar.LabelRow>
               ))}
            </ProfileSidebar.Labels>

            <ProfileSidebar.LogoutRow onClick={logUserOut}>
               <ProfileSidebar.LabelIcon
                  src="/images/signout-icon.png"
                  alt="label icon"
               />
               <ProfileSidebar.LogOut>LogOut</ProfileSidebar.LogOut>
            </ProfileSidebar.LogoutRow>
         </ProfileSidebar.Container>
      </ProfileSidebar>
   );
}
