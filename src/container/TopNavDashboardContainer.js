import React from "react";
import { TopNavDashboard } from "../components";
import { dashboardTopnav } from "../utils";

export default function TopNavDashboardContainer() {
   return (
      <TopNavDashboard>
         <TopNavDashboard.TopRegion>
            <TopNavDashboard.SearchWrapper>
               <TopNavDashboard.SearchIconWrapper>
                  <TopNavDashboard.SearchIcon
                     src={"/images/search-icon.png"}
                     alt={"search icon"}
                  />
               </TopNavDashboard.SearchIconWrapper>

               <TopNavDashboard.SearchInput type="text" placeholder="Search" />
               <TopNavDashboard.SearchIconWrapper>
                  <TopNavDashboard.SearchIcon
                     src={"/images/topnav-icon.png"}
                     alt={"forrward icon"}
                  />
               </TopNavDashboard.SearchIconWrapper>
            </TopNavDashboard.SearchWrapper>

            <TopNavDashboard.RouteLinks>
               {dashboardTopnav?.map((item) => (
                  <TopNavDashboard.RouteLink
                     to={item.route}
                     key={`dashboardTopnav--${item.id}`}
                  >
                     <TopNavDashboard.LinkText>
                        {item.name}
                     </TopNavDashboard.LinkText>
                  </TopNavDashboard.RouteLink>
               ))}
            </TopNavDashboard.RouteLinks>

            <TopNavDashboard.NotifySection>
               <TopNavDashboard.BellWrapper>
                  <TopNavDashboard.BellIcon
                     src={"/images/bell-icon.png"}
                     alt={"bell icon"}
                  />
               </TopNavDashboard.BellWrapper>
               <TopNavDashboard.ProfileWrapper>
                  <TopNavDashboard.ProfileImage
                     src={"/images/sideBarImage.png"}
                     alt={"profile image"}
                  />
               </TopNavDashboard.ProfileWrapper>
            </TopNavDashboard.NotifySection>
         </TopNavDashboard.TopRegion>
      </TopNavDashboard>
   );
}
