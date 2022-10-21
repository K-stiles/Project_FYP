import React from "react";
import { DNavbar } from "../components";
import { dashboardTopnav } from "../utils";

export default function DNavbarContainer() {
   return (
      <DNavbar>
         <DNavbar.Wrapper>
            <DNavbar.Section>
               <DNavbar.Container>
                  <DNavbar.HeaderSection>
                     <DNavbar.HeaderTitle>Dashboard</DNavbar.HeaderTitle>
                     <DNavbar.HeaderIconWapper>
                        <DNavbar.HeaderIcon
                           src={"/images/dashboard_icon.png"}
                           alt={"dashboard_icon"}
                        />
                     </DNavbar.HeaderIconWapper>
                  </DNavbar.HeaderSection>
               </DNavbar.Container>
               <DNavbar.Container>
                  {/* DNavbar */}

                  <DNavbar.TopRegion>
                     <DNavbar.RouteLinks>
                        {dashboardTopnav?.map((item) => (
                           <DNavbar.RouteLink
                              to={item.route}
                              key={`dashboardTopnav--${item.id}`}
                           >
                              <DNavbar.LinkText>{item.name}</DNavbar.LinkText>
                           </DNavbar.RouteLink>
                        ))}
                     </DNavbar.RouteLinks>
                  </DNavbar.TopRegion>

                  {/* DNavbar */}
               </DNavbar.Container>
            </DNavbar.Section>
            <DNavbar.Section>
               <DNavbar.NotifySection>
                  <DNavbar.BellWrapper>
                     <DNavbar.BellIcon
                        src={"/images/bell-icon.png"}
                        alt={"bell icon"}
                     />
                  </DNavbar.BellWrapper>
                  <DNavbar.ProfileWrapper>
                     <DNavbar.ProfileImage
                        src={"/images/sideBarImage.png"}
                        alt={"profile image"}
                     />
                  </DNavbar.ProfileWrapper>
               </DNavbar.NotifySection>
            </DNavbar.Section>
         </DNavbar.Wrapper>
      </DNavbar>
   );
}
