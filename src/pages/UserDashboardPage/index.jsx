import React from "react";
import { Outlet } from "react-router-dom";
import PictureBar from "../../components/PictureBar";
import { DashboardContainer } from "../../container";
import { DashboardWrapper } from "./Dashboard.styled";

export default function UserDashboardPage() {
   return (
      <>
         <DashboardContainer />
      </>
   );
}
