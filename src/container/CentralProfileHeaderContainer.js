import React from "react";
import { useDispatch } from "react-redux";
import { CentralProfileHeader } from "../components";
import { logout } from "../redux/features/userSlice";

export default function CentralProfileHeaderContainer() {
   const dispatch = useDispatch();

   function logUserOut() {
      localStorage.removeItem("jwtToken");
      dispatch(logout());
   }

   return (
      <CentralProfileHeader>
         <CentralProfileHeader.Wrapper>
            <CentralProfileHeader.ProfileName>
               Jannifer Jones
            </CentralProfileHeader.ProfileName>
            <CentralProfileHeader.ProfileLogout onClick={logUserOut}>
               LogOut
            </CentralProfileHeader.ProfileLogout>
         </CentralProfileHeader.Wrapper>
      </CentralProfileHeader>
   );
}
