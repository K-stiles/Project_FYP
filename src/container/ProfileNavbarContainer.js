import React from "react";
import { ProfileNavbar } from "../components";

export default function ProfileNavbarContainer() {
   return (
      <ProfileNavbar>
         <ProfileNavbar.Container>
            <ProfileNavbar.ProfileWrapper>
               <ProfileNavbar.ProfileImg
                  src="/images/sideBarImage.png"
                  alt="user profille"
               />
            </ProfileNavbar.ProfileWrapper>
            <ProfileNavbar.ProfileName>
               Jannifer Jones
            </ProfileNavbar.ProfileName>
         </ProfileNavbar.Container>
      </ProfileNavbar>
   );
}
