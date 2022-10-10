import React from "react";
import { Dashboard } from "../components";
import { dashboardTopnav, userImages } from "../utils";

export default function DashboardContainer() {
   return (
      <Dashboard>
         <Dashboard.Container>
            <div>
               {/* TOP NAV REGION */}

               <Dashboard.TopRegion>
                  <Dashboard.SearchWrapper>
                     <Dashboard.SearchIconWrapper>
                        <Dashboard.SearchIcon
                           src={"/images/search-icon.png"}
                           alt={"search icon"}
                        />
                     </Dashboard.SearchIconWrapper>

                     <Dashboard.SearchInput type="text" placeholder="Search" />
                     <Dashboard.SearchIconWrapper>
                        <Dashboard.SearchIcon
                           src={"/images/topnav-icon.png"}
                           alt={"forrward icon"}
                        />
                     </Dashboard.SearchIconWrapper>
                  </Dashboard.SearchWrapper>

                  <Dashboard.RouteLinks>
                     {dashboardTopnav?.map((item) => (
                        <Dashboard.RouteLink
                           to={item.route}
                           key={`dashboardTopnav--${item.id}`}
                        >
                           <Dashboard.LinkText>{item.name}</Dashboard.LinkText>
                        </Dashboard.RouteLink>
                     ))}
                  </Dashboard.RouteLinks>

                  <Dashboard.NotifySection>
                     <Dashboard.BellWrapper>
                        <Dashboard.BellIcon
                           src={"/images/bell-icon.png"}
                           alt={"bell icon"}
                        />
                     </Dashboard.BellWrapper>
                     <Dashboard.ProfileWrapper>
                        <Dashboard.ProfileImage
                           src={"/images/sideBarImage.png"}
                           alt={"profile image"}
                        />
                     </Dashboard.ProfileWrapper>
                  </Dashboard.NotifySection>
               </Dashboard.TopRegion>

               <Dashboard.CentralRegion>
                  <Dashboard.SubHeader>Live Activities</Dashboard.SubHeader>
                  <Dashboard.MainHeader>Bus Reservation</Dashboard.MainHeader>
               </Dashboard.CentralRegion>
            </div>
            <Dashboard.PictureBar
            // style={{ color: "white", backgroundColor: "orangered" }}
            >
               <Dashboard.CloseWrapper>
                  <Dashboard.CloseIcon
                     src={"/images/close-icon.png"}
                     alt={"close icon"}
                  />
               </Dashboard.CloseWrapper>
               <Dashboard.Line />
               <Dashboard.UsersContainer>
                  {userImages.map((item) => (
                     <Dashboard.UserImageWrapper>
                        <Dashboard.UserImage
                           src={"/images/sideBarImage.png"}
                           alt={"close icon"}
                        />
                     </Dashboard.UserImageWrapper>
                  ))}
               </Dashboard.UsersContainer>
               <Dashboard.ArrowLine />
               <Dashboard.ArrowWrapper>
                  <Dashboard.ArrowIcon
                     src={"/images/arrow_forward.png"}
                     alt={"close icon"}
                  />
               </Dashboard.ArrowWrapper>
            </Dashboard.PictureBar>
         </Dashboard.Container>
      </Dashboard>
   );
}
