import React from "react";
import { Dashboard } from "../components";
import {
   dashboardTopnav,
   LiveActivityData,
   tableHeaderData,
   tableRowData,
   userImages,
} from "../utils";

export default function DashboardContainer() {
   return (
      <Dashboard>
         <Dashboard.Container>
            <div>
               {/* TOP NAV REGION */}
               {/* <Dashboard.TopRegion>
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
               </Dashboard.TopRegion> */}

               <Dashboard.CentralRegion>
                  {/* //TODO: ------------- AREA ONE --------------- */}
                  <Dashboard.AreaOne>
                     <Dashboard.LiveSection>
                        <Dashboard.SubHeader>
                           Live Activities
                        </Dashboard.SubHeader>
                     </Dashboard.LiveSection>

                     <Dashboard.Cards>
                        {LiveActivityData?.map((item) => (
                           <Dashboard.Card
                              key={`LiveActivityData---${item.label}`}
                           >
                              <Dashboard.Topcontent>
                                 <Dashboard.CardIconWrapper
                                    wrapperColor={item.secondary}
                                 >
                                    <Dashboard.CardIcon
                                       src={item.location}
                                       alt={"Kumasi"}
                                    />
                                 </Dashboard.CardIconWrapper>
                                 <Dashboard.CardTitle>
                                    {item.label}
                                 </Dashboard.CardTitle>
                              </Dashboard.Topcontent>
                              <Dashboard.Bottomcontent>
                                 <Dashboard.GraphText>
                                    <Dashboard.TextIcon>
                                       <Dashboard.DirectionIconWrapper>
                                          <Dashboard.DirectionIcon
                                             src={item.icon}
                                             alt={"close icon"}
                                          />
                                       </Dashboard.DirectionIconWrapper>
                                       <Dashboard.SmallText
                                          percentageColor={item.percentageColor}
                                       >
                                          {item.percentage}%
                                       </Dashboard.SmallText>
                                    </Dashboard.TextIcon>
                                    <Dashboard.GraphWrapper>
                                       <Dashboard.Graph
                                          src={item.graphImage}
                                          alt={item.graphAlt}
                                       />
                                    </Dashboard.GraphWrapper>
                                 </Dashboard.GraphText>

                                 <Dashboard.Text>{item.number}</Dashboard.Text>
                              </Dashboard.Bottomcontent>
                           </Dashboard.Card>
                        ))}
                     </Dashboard.Cards>
                  </Dashboard.AreaOne>

                  {/* //TODO: ------------- AREA TWO --------------- */}
                  <Dashboard.AreaTwo>
                     <Dashboard.MainHeaderSection>
                        <Dashboard.HeaderSection>
                           <Dashboard.MainHeader>
                              Bus Reservation
                           </Dashboard.MainHeader>
                           <Dashboard.EditIcon
                              src={"/images/edit-icon.png"}
                              alt={"bi-directional-arrow-icon image"}
                           />
                        </Dashboard.HeaderSection>

                        <Dashboard.TopImages>
                           {userImages?.map((item, index) => {
                              if (index <= 2)
                                 return (
                                    <Dashboard.TopImageWrapper
                                       key={`userImages---${item.id}`}
                                       index={index}
                                    >
                                       <Dashboard.UserProfile
                                          src={"/images/sideBarImage.png"}
                                          alt={"close icon"}
                                       />
                                    </Dashboard.TopImageWrapper>
                                 );

                              if (index === 3)
                                 return (
                                    <Dashboard.ImageLayer
                                       key={`userImages---${item.id}`}
                                       index={index}
                                    >
                                       <Dashboard.ImageLayerText>
                                          +{userImages.length - 3}
                                       </Dashboard.ImageLayerText>
                                    </Dashboard.ImageLayer>
                                 );
                           })}
                        </Dashboard.TopImages>
                     </Dashboard.MainHeaderSection>
                     <Dashboard.InputWrapper>
                        <Dashboard.InputOne>
                           <Dashboard.OrigninLabel>
                              Origin
                           </Dashboard.OrigninLabel>
                           <Dashboard.OrigninInputWrapper>
                              <Dashboard.OrigninInput
                                 placeholder={"Leaving from"}
                              />
                           </Dashboard.OrigninInputWrapper>
                        </Dashboard.InputOne>

                        <Dashboard.BiIconWrapper>
                           <Dashboard.BiIcon
                              src={"/images/bi-directional-arrow-icon.png"}
                              alt={"bi-directional-arrow-icon image"}
                           />
                        </Dashboard.BiIconWrapper>

                        <Dashboard.InputTwo>
                           <Dashboard.DestinationLabel>
                              Destination
                           </Dashboard.DestinationLabel>
                           <Dashboard.DestinationInputWrapper>
                              <Dashboard.DestinationInput
                                 placeholder={"Going to"}
                              />
                           </Dashboard.DestinationInputWrapper>
                        </Dashboard.InputTwo>

                        <Dashboard.InputThree>
                           <Dashboard.InputLabel>
                              Leaving Date
                           </Dashboard.InputLabel>
                        </Dashboard.InputThree>

                        <Dashboard.InputFour>
                           <Dashboard.InputLabel>
                              Return Date
                           </Dashboard.InputLabel>
                        </Dashboard.InputFour>

                        <Dashboard.InputFive>
                           <Dashboard.InputLabel>
                              Passengers
                           </Dashboard.InputLabel>
                        </Dashboard.InputFive>
                     </Dashboard.InputWrapper>
                  </Dashboard.AreaTwo>

                  {/* //TODO: ------------- AREA THREE --------------- */}
                  <Dashboard.AreaThree>
                     <Dashboard.AreaThreeTitle>
                        Recent Reservations
                     </Dashboard.AreaThreeTitle>

                     {/* ------- TableHeader -------- */}
                     <Dashboard.TableHeader>
                        {tableHeaderData?.map((item) => (
                           <Dashboard.TableTitleWrapper
                              key={`tableHeaderData--${item.id}`}
                           >
                              <Dashboard.TableTitle>
                                 {item.name}
                              </Dashboard.TableTitle>
                           </Dashboard.TableTitleWrapper>
                        ))}
                     </Dashboard.TableHeader>

                     {/* ------- Table Column --------- */}
                     {tableRowData?.map((rowData) => {
                        // console.log(rowData);
                        return (
                           <Dashboard.TableRow
                              key={`tableRowData--${rowData.id}`}
                           >
                              {rowData?.row?.map((item) => {
                                 return (
                                    <Dashboard.RowItemWrapper
                                       key={`tableRowData--${item.id}`}
                                    >
                                       <Dashboard.RowText>
                                          {item.name}
                                       </Dashboard.RowText>
                                    </Dashboard.RowItemWrapper>
                                 );
                              })}
                           </Dashboard.TableRow>
                        );
                     })}

                     {/* ------- Table Footer -------- */}
                     <Dashboard.TableFooter>
                        <Dashboard.FooterContent>
                           <div style={{ display: "flex", columnGap: "25px" }}>
                              <Dashboard.FooterLabel>
                                 Rows per pages:
                              </Dashboard.FooterLabel>
                              <Dashboard.FooterNumberIconWrapper>
                                 <Dashboard.FooterNumber>
                                    8
                                 </Dashboard.FooterNumber>
                                 <Dashboard.FooterNumberIcon
                                    src={"/images/tbfooter-numb-icon.png"}
                                    alt={"bi-directional-arrow-icon image"}
                                 />
                              </Dashboard.FooterNumberIconWrapper>
                           </div>
                           <Dashboard.FooterTextWrapper>
                              <Dashboard.FooterLabel>
                                 1 - 8 of 240
                              </Dashboard.FooterLabel>
                           </Dashboard.FooterTextWrapper>
                           <div>
                              <Dashboard.LeftArrow
                                 src={"/images/tbfooter-left-arrow-icon.png"}
                                 alt={"bi-directional-arrow-icon image"}
                              />
                              <Dashboard.RightArrow
                                 src={"/images/tbfooter-right-arrow-icon.png"}
                                 alt={"bi-directional-arrow-icon image"}
                              />
                           </div>
                        </Dashboard.FooterContent>
                     </Dashboard.TableFooter>
                  </Dashboard.AreaThree>

                  {/* //TODO: ------------- AREA FOUR --------------- */}
                  <Dashboard.AreaFour>
                     <Dashboard.ProceedBtn to="/dashboard/reservation-selection">
                        <Dashboard.BtnRow>
                           <p>Proceed</p>
                           <Dashboard.EmojiHand>&#128073;</Dashboard.EmojiHand>
                        </Dashboard.BtnRow>
                     </Dashboard.ProceedBtn>
                  </Dashboard.AreaFour>
               </Dashboard.CentralRegion>
            </div>
            {/* <Dashboard.PictureBar>
               <Dashboard.CloseWrapper>
                  <Dashboard.CloseIcon
                     src={"/images/close-icon.png"}
                     alt={"close icon"}
                  />
               </Dashboard.CloseWrapper>
               <Dashboard.Line />
               <Dashboard.UsersContainer>
                  {userImages.map((item) => (
                     <Dashboard.UserImageWrapper
                        key={`userImages---${item.id}`}
                     >
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
            </Dashboard.PictureBar> */}
         </Dashboard.Container>
      </Dashboard>
   );
}
