import React from "react";
import { useSelector } from "react-redux";
import { ProfileNavbar } from "../components";
import { GET_USER } from "../redux/features/userSlice";

export default function ProfileNavbarContainer() {
   const user = useSelector(GET_USER);

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
               {`${user?.user?.firstName} ${user?.user?.lastName}`}
            </ProfileNavbar.ProfileName>
         </ProfileNavbar.Container>
      </ProfileNavbar>
   );
}
