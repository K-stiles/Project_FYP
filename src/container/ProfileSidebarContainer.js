import React from "react";
import { ProfileSidebar } from "../components";
import { profileSideBarRoute } from "../utils";

export default function ProfileSidebarContainer() {
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

            <ProfileSidebar.LogoutRow>
               <ProfileSidebar.LabelIcon
                  src="/images/signout-icon.png"
                  alt="label icon"
               />
               <ProfileSidebar.Label>LogOut</ProfileSidebar.Label>
            </ProfileSidebar.LogoutRow>
         </ProfileSidebar.Container>
      </ProfileSidebar>
   );
}
