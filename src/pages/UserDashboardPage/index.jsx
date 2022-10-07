import React from "react";
import { DashboardContainer, SidebarContainer } from "../../container";
import { DashboardWrapper } from "./Dashboard.styled";

export default function UserDashboardPage() {
   return (
      <DashboardWrapper>
         <SidebarContainer />

         <DashboardContainer />
      </DashboardWrapper>
   );
}
