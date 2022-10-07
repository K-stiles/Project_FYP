import React from "react";
import { Sidebar } from "../components";
import { HomeSideBarData } from "../utils";

const Img = {
   profile: "/images/sideBarImage.png",
   profileAlt: "profile image",
   userIcon: "/images/up_down_arrrow.png",
   userIconAlt: "up down arrrow.png",
   headerIcon: "/images/dashboard_icon.png",
   headerIconAlt: "dashboard icon",
   arrowIcon: "/images/blue_up_arrow.png",
   arrowIconAlt: "arrow icon",
   menuItemIcon: "/images/chair.png",
   menuItemIconAlt: "chair icon",
};

export default function SidebarContainer() {
   return (
      <Sidebar>
         <Sidebar.SideBar>
            <Sidebar.HeaderSection>
               <Sidebar.HeaderTitle>Dashboard</Sidebar.HeaderTitle>
               <Sidebar.HeaderIconWapper>
                  <Sidebar.HeaderIcon
                     src={Img.headerIcon}
                     alt={Img.headerIconAlt}
                  />
               </Sidebar.HeaderIconWapper>
            </Sidebar.HeaderSection>

            <Sidebar.UserSection to="/">
               <Sidebar.UserImage>
                  <Sidebar.Image src={Img.profile} alt={Img.profileAlt} />
                  <Sidebar.NotifyNumber>
                     <Sidebar.Number>2</Sidebar.Number>
                  </Sidebar.NotifyNumber>
               </Sidebar.UserImage>
               <Sidebar.UserLabels>
                  <Sidebar.UserName>Jennifer Jones</Sidebar.UserName>
                  <Sidebar.UserEmail>jenjones@gmail.com</Sidebar.UserEmail>
               </Sidebar.UserLabels>
               <Sidebar.UpdownIconWapper>
                  <Sidebar.UpdownIcon
                     src={Img.userIcon}
                     alt={Img.userIconAlt}
                  />
               </Sidebar.UpdownIconWapper>

               <Sidebar.Line />
            </Sidebar.UserSection>

            <Sidebar.MenuSection>
               {HomeSideBarData?.map((section) => {
                  // console.log(section.id);
                  return (
                     <Sidebar.SectionHeader key={`item--${section.id}`}>
                        <Sidebar.SectionTitle>
                           {section.section}{" "}
                        </Sidebar.SectionTitle>
                        <Sidebar.SectionIconWrapper>
                           <Sidebar.SectionIcon
                              src={Img.arrowIcon}
                              alt={Img.arrowIconAlt}
                           />
                        </Sidebar.SectionIconWrapper>
                     </Sidebar.SectionHeader>
                  );
               })}

               {/* {HomeSideBarData?.map((section) => {
                  const { labels } = section;
                  // console.log(labels);
                  return (
                     <div key={`item---${section.id}`}>
                        {labels?.map((item) => {
                           console.log(item);
                           return (
                              <Sidebar.MenuItem key={`item---${item.name}`}>
                                 <Sidebar.MenuItemLink>
                                    <Sidebar.MenuIconWapper>
                                       <Sidebar.MenuIcon
                                          src={Img.menuItemIcon}
                                          alt={Img.menuItemIconAlt}
                                       />
                                    </Sidebar.MenuIconWapper>
                                    <Sidebar.ItemLabel>
                                       Reservation Type
                                    </Sidebar.ItemLabel>
                                    <Sidebar.NumberWrapper>
                                       <Sidebar.LabelNumber>
                                          3
                                       </Sidebar.LabelNumber>
                                    </Sidebar.NumberWrapper>
                                 </Sidebar.MenuItemLink>
                              </Sidebar.MenuItem>
                           );
                        })}
                     </div>
                  );
               })} */}
            </Sidebar.MenuSection>

            {/* <Sidebar.LogoutSection>
               <div>LogOut</div>
            </Sidebar.LogoutSection> */}
         </Sidebar.SideBar>
      </Sidebar>
   );
}
