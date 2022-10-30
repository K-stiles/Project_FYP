import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gql } from "@apollo/client";

import { Counter, RadioLabel, Sidebar } from "../components";
import { SideBarDashBoardData, SideBarPreferenceData } from "../utils";
import {
   getReservation,
   setBusType,
   setPaymentMethod,
   setReserveType,
   increaseAdults,
   decreaseAdults,
   increaseChildren,
   decreaseChildren,
   increaseSeniors,
   decreaseSeniors,
   increaseLuggage,
   decreaseLuggage,
   increaseGroupNumber,
   decreaseGroupNumber,
   getTotalPasengers,
} from "../redux/features/reservationSlice";
import { logout } from "../redux/features/userSlice";

const Img = {
   profile: "/images/sideBarImage.png",
   profileAlt: "profile image",
   userIcon: "/images/up_down_arrrow.png",
   userIconAlt: "up down arrrow.png",
   headerIcon: "/images/dashboard_icon.png",
   headerIconAlt: "dashboard icon",
   arr: "/images/blue_up_arrow.png",
   arrAlt: "arrow icon",
   Icon: "/images/chair.png",
   IconAlt: "chair icon",
};

export default function SidebarContainer({ user }) {
   const dispatch = useDispatch();
   const { groupNumber, luggage, adults, children, seniors } =
      useSelector(getReservation);

   const getReservationType = (e) => dispatch(setReserveType(e.target.value));
   const getBusType = (e) => dispatch(setBusType(e.target.value));
   const getPaymentMethod = (e) => dispatch(setPaymentMethod(e.target.value));

   useEffect(() => {
      dispatch(getTotalPasengers());
   }, [dispatch, adults, children, seniors]);

   function logUserOut() {
      localStorage.removeItem("jwtToken");
      dispatch(logout());
   }

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

            <Sidebar.UserSection to="/dashboard/profile">
               <Sidebar.UserImage>
                  <Sidebar.Image src={Img.profile} alt={Img.profileAlt} />
                  <Sidebar.NotifyNumber>
                     <Sidebar.Number>2</Sidebar.Number>
                  </Sidebar.NotifyNumber>
               </Sidebar.UserImage>
               <Sidebar.UserLabels>
                  <Sidebar.UserName>
                     {user.firstName} {user.lastName}
                  </Sidebar.UserName>
                  <Sidebar.UserEmail>{user.email}</Sidebar.UserEmail>
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
               {/* DASHBOARD - SECTION*/}

               <Sidebar.SectionHeader>
                  <Sidebar.SectionTitle>DashBoard</Sidebar.SectionTitle>
                  <Sidebar.SectionIconWrapper>
                     <Sidebar.SectionIcon src={Img.arr} alt={Img.arrAlt} />
                  </Sidebar.SectionIconWrapper>
               </Sidebar.SectionHeader>
               <Sidebar.SubMenu>
                  {SideBarDashBoardData?.map((label) => {
                     return (
                        <Sidebar.SubMenuItem key={`item--${label.id}`}>
                           <Sidebar.MenuItemLink>
                              <Sidebar.MenuIconWapper>
                                 <Sidebar.MenuIcon
                                    src={label.icon}
                                    alt={label.iconAlt}
                                 />
                              </Sidebar.MenuIconWapper>
                              <Sidebar.ItemLabel>
                                 {label.name}
                              </Sidebar.ItemLabel>
                              {label.number && (
                                 <Sidebar.NumberWrapper>
                                    <Sidebar.LabelNumber>
                                       {label.number}
                                    </Sidebar.LabelNumber>
                                 </Sidebar.NumberWrapper>
                              )}
                           </Sidebar.MenuItemLink>

                           {label.subLabel &&
                              label.subLabel.map((item) => (
                                 <Sidebar.SubMenuOptions
                                    key={`item--${item.option}`}
                                 >
                                    {item.radioLabel === "Reservation" && (
                                       <Sidebar.OptionsLable>
                                          <RadioLabel
                                             radioId={item.radioId}
                                             radioLabel={item.radioLabel}
                                             option={item.option}
                                             value={item.value}
                                             onChange={getReservationType}
                                          />
                                       </Sidebar.OptionsLable>
                                    )}
                                    {item.radioLabel === "BusType" && (
                                       <Sidebar.OptionsLable>
                                          <RadioLabel
                                             radioId={item.radioId}
                                             radioLabel={item.radioLabel}
                                             option={item.option}
                                             value={item.value}
                                             onChange={getBusType}
                                          />
                                       </Sidebar.OptionsLable>
                                    )}

                                    {item.Counter === "groupNumber" && (
                                       <Counter
                                          label={item.option}
                                          number={groupNumber}
                                          decrease={() =>
                                             dispatch(decreaseGroupNumber())
                                          }
                                          increase={() =>
                                             dispatch(increaseGroupNumber())
                                          }
                                          disabled={
                                             groupNumber <= 0 ? true : false
                                          }
                                       />
                                    )}
                                    {item.option === "Adults" && (
                                       <Counter
                                          label={item.option}
                                          number={adults}
                                          decrease={() =>
                                             dispatch(decreaseAdults())
                                          }
                                          increase={() =>
                                             dispatch(increaseAdults())
                                          }
                                          disabled={adults <= 0 ? true : false}
                                       />
                                    )}
                                    {item.option === "Children" && (
                                       <Counter
                                          label={item.option}
                                          number={children}
                                          decrease={() =>
                                             dispatch(decreaseChildren())
                                          }
                                          increase={() =>
                                             dispatch(increaseChildren())
                                          }
                                          disabled={
                                             children <= 0 ? true : false
                                          }
                                       />
                                    )}
                                    {item.option === "Seniors" && (
                                       <Counter
                                          label={item.option}
                                          number={seniors}
                                          decrease={() =>
                                             dispatch(decreaseSeniors())
                                          }
                                          increase={() =>
                                             dispatch(increaseSeniors())
                                          }
                                          disabled={seniors <= 0 ? true : false}
                                       />
                                    )}
                                    {item.option === "luggage" && (
                                       <Counter
                                          label={item.option}
                                          number={luggage}
                                          decrease={() =>
                                             dispatch(decreaseLuggage())
                                          }
                                          increase={() =>
                                             dispatch(increaseLuggage())
                                          }
                                          disabled={luggage <= 0 ? true : false}
                                       />
                                    )}

                                    {item.radioLabel === "PaymentMethod" && (
                                       <Sidebar.OptionsLable>
                                          <RadioLabel
                                             radioId={item.radioId}
                                             radioLabel={item.radioLabel}
                                             option={item.option}
                                             value={item.value}
                                             onChange={getPaymentMethod}
                                          />
                                       </Sidebar.OptionsLable>
                                    )}
                                 </Sidebar.SubMenuOptions>
                              ))}
                        </Sidebar.SubMenuItem>
                     );
                  })}
               </Sidebar.SubMenu>

               {/* PREFEENCE - SECTION */}

               <Sidebar.SectionHeader>
                  <Sidebar.SectionTitle>Preferences</Sidebar.SectionTitle>
                  <Sidebar.SectionIconWrapper>
                     <Sidebar.SectionIcon src={Img.arr} alt={Img.arrAlt} />
                  </Sidebar.SectionIconWrapper>
               </Sidebar.SectionHeader>
               <Sidebar.SubMenu>
                  <div>
                     {SideBarPreferenceData?.map((label) => {
                        return (
                           <Sidebar.SubMenuItem key={`item--${label.id}`}>
                              <Sidebar.MenuItemLink to={label.route}>
                                 <Sidebar.MenuIconWapper>
                                    <Sidebar.MenuIcon
                                       src={label.icon}
                                       alt={label.iconAlt}
                                    />
                                 </Sidebar.MenuIconWapper>
                                 <Sidebar.ItemLabel>
                                    {label.name}
                                 </Sidebar.ItemLabel>
                                 {label.number && (
                                    <Sidebar.NumberWrapper>
                                       <Sidebar.LabelNumber>
                                          {label.number}
                                       </Sidebar.LabelNumber>
                                    </Sidebar.NumberWrapper>
                                 )}
                              </Sidebar.MenuItemLink>
                           </Sidebar.SubMenuItem>
                        );
                     })}
                  </div>
               </Sidebar.SubMenu>

               {/* LOGOUT - SECTION */}

               <Sidebar.LogoutSection onClick={logUserOut}>
                  <Sidebar.MenuIconWapper>
                     <Sidebar.MenuIcon
                        src={"/images/sign-out-alt.png"}
                        alt={"sign-out"}
                     />
                  </Sidebar.MenuIconWapper>
                  <Sidebar.LogoutText>LogOut</Sidebar.LogoutText>
               </Sidebar.LogoutSection>
            </Sidebar.MenuSection>
         </Sidebar.SideBar>
      </Sidebar>
   );
}

const FETCH_USER = gql`
   query User($userId: ID!) {
      user(userId: $userId) {
         id
         firstName
         lastName
         email
         phone
         street
         city
         zip
         createdAt
         userReservations
         img
      }
   }
`;
