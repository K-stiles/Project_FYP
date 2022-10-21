import React, { useState } from "react";
import { Counter, RadioLabel, Sidebar } from "../components";
import { SideBarDashBoardData, SideBarPreferenceData } from "../utils";

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

export default function SidebarContainer() {
   const [reservationType, setReservationType] = useState(null);
   const [busType, setBusType] = useState(null);
   const [paymentMethod, setPaymentMethod] = useState(null);

   const [groupNumber, setGroupNumber] = useState(0);
   const [adults, setAdults] = useState(0);
   const [children, setChildren] = useState(0);
   const [seniors, setSeniors] = useState(0);

   const getReservationType = (e) => setReservationType(e.target.value);
   const getBusType = (e) => setBusType(e.target.value);
   const getPaymentMethod = (e) => setPaymentMethod(e.target.value);

   const decreaseGroupNumber = () => setGroupNumber((gNumb) => gNumb - 1);
   const increaseGroupNumber = () => setGroupNumber((gNumb) => gNumb + 1);

   const decreaseAdults = () => setAdults((adults) => adults - 1);
   const increaseAdults = () => setAdults((adults) => adults + 1);

   const decreaseChildren = () => setChildren((children) => children - 1);
   const increaseChildren = () => setChildren((children) => children + 1);

   const decreaseSeniors = () => setSeniors((seniors) => seniors - 1);
   const increaseSeniors = () => setSeniors((seniors) => seniors + 1);

   // console.log("ReservationType,: ", reservationType);
   // console.log("BusType,: ", busType);
   // console.log("PaymentMethod,: ", paymentMethod);

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
                              <Sidebar.NumberWrapper>
                                 <Sidebar.LabelNumber>3</Sidebar.LabelNumber>
                              </Sidebar.NumberWrapper>
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
                                          decrease={decreaseGroupNumber}
                                          increase={increaseGroupNumber}
                                          disabled={
                                             groupNumber <= 0 ? true : false
                                          }
                                       />
                                    )}
                                    {item.option === "Adults" && (
                                       <Counter
                                          label={item.option}
                                          number={adults}
                                          decrease={decreaseAdults}
                                          increase={increaseAdults}
                                          disabled={adults <= 0 ? true : false}
                                       />
                                    )}
                                    {item.option === "Children" && (
                                       <Counter
                                          label={item.option}
                                          number={children}
                                          decrease={decreaseChildren}
                                          increase={increaseChildren}
                                          disabled={
                                             children <= 0 ? true : false
                                          }
                                       />
                                    )}
                                    {item.option === "Seniors" && (
                                       <Counter
                                          label={item.option}
                                          number={seniors}
                                          decrease={decreaseSeniors}
                                          increase={increaseSeniors}
                                          disabled={seniors <= 0 ? true : false}
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

               <Sidebar.LogoutSection>
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
