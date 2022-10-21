import React from "react";
import { ReservationOverview } from "../components";
import { overviewData, userImages } from "../utils";

export default function ReservationOverviewContainer() {
   return (
      <ReservationOverview>
         <ReservationOverview.SectionOne>
            <ReservationOverview.GoBackBtn to="">
               Go Back
            </ReservationOverview.GoBackBtn>
            <ReservationOverview.MainHeaderSection>
               <ReservationOverview.HeaderSection>
                  <ReservationOverview.MainHeader>
                     Reservation Overview
                  </ReservationOverview.MainHeader>
                  <ReservationOverview.EditIcon
                     src={"/images/edit-icon.png"}
                     alt={"bi-directional-arrow-icon image"}
                  />
               </ReservationOverview.HeaderSection>

               <ReservationOverview.TopImages>
                  {userImages?.map((item, index) => {
                     if (index <= 2)
                        return (
                           <ReservationOverview.TopImageWrapper
                              key={`userImages---${item.id}`}
                              index={index}
                           >
                              <ReservationOverview.UserProfile
                                 src={"/images/sideBarImage.png"}
                                 alt={"close icon"}
                              />
                           </ReservationOverview.TopImageWrapper>
                        );

                     if (index === 3)
                        return (
                           <ReservationOverview.ImageLayer
                              key={`userImages---${item.id}`}
                              index={index}
                           >
                              <ReservationOverview.ImageLayerText>
                                 +{userImages.length - 3}
                              </ReservationOverview.ImageLayerText>
                           </ReservationOverview.ImageLayer>
                        );
                  })}
               </ReservationOverview.TopImages>
            </ReservationOverview.MainHeaderSection>
         </ReservationOverview.SectionOne>

         {/* ///section */}
         <ReservationOverview.SectionTwo>
            <ReservationOverview.Card>
               <ReservationOverview.CardInfo>
                  <ReservationOverview.CardHeader>
                     <ReservationOverview.CardTitle>
                        Review Ticket Option
                     </ReservationOverview.CardTitle>
                  </ReservationOverview.CardHeader>

                  <ReservationOverview.CardRows>
                     {/* CardRow */}
                     {overviewData?.map((item) => (
                        <div key={`${item.id}`}>
                           <ReservationOverview.CardRow>
                              <ReservationOverview.CardRowOne>
                                 {/* RowText */}
                                 {item?.row?.map((rowItem) => (
                                    <ReservationOverview.RowText
                                       key={`${rowItem.id}`}
                                    >
                                       <ReservationOverview.Text>
                                          {rowItem.item}
                                       </ReservationOverview.Text>
                                    </ReservationOverview.RowText>
                                 ))}
                              </ReservationOverview.CardRowOne>
                              <ReservationOverview.CardRowTwo>
                                 <ReservationOverview.Pen
                                    src={"/images/blue-edit-pen.png"}
                                    alt={"blue-edit-pen icon"}
                                 />
                              </ReservationOverview.CardRowTwo>
                           </ReservationOverview.CardRow>
                        </div>
                     ))}
                  </ReservationOverview.CardRows>
               </ReservationOverview.CardInfo>

               <ReservationOverview.CardPricing>
                  <ReservationOverview.CardPrice>
                     Service Fee, GHC
                  </ReservationOverview.CardPrice>
                  <ReservationOverview.CardPrice amount>
                     GHC 625.90
                  </ReservationOverview.CardPrice>
               </ReservationOverview.CardPricing>
            </ReservationOverview.Card>
         </ReservationOverview.SectionTwo>
         {/* ///section */}

         <ReservationOverview.SectionThree>
            <ReservationOverview.NextBtn to="/dashboard/reservation-payment">
               Proceed to Payment
            </ReservationOverview.NextBtn>
         </ReservationOverview.SectionThree>
      </ReservationOverview>
   );
}
