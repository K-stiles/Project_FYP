import React from "react";
import { CentralProfileHeader } from "../components";

export default function CentralProfileHeaderContainer() {
   return (
      <CentralProfileHeader>
         <CentralProfileHeader.Wrapper>
           
            <CentralProfileHeader.ProfileName>
               Jannifer Jones
            </CentralProfileHeader.ProfileName>
            <CentralProfileHeader.ProfileLogout>
               LogOut
            </CentralProfileHeader.ProfileLogout>
         </CentralProfileHeader.Wrapper>
      </CentralProfileHeader>
   );
}
