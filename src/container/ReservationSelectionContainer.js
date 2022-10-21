import React from "react";
import { ReservationSelection } from "../components";
import { userImages } from "../utils";

export default function ReservationSelectionContainer() {
   return (
      <ReservationSelection>
         {/* //TODO: ------------- AREA TWO --------------- */}
         <ReservationSelection.AreaOne>
            <ReservationSelection.TopSection>
               <ReservationSelection.GoBackBtn to="">
                  Go Back
               </ReservationSelection.GoBackBtn>

               <ReservationSelection.MainHeaderSection>
                  <ReservationSelection.HeaderSection>
                     <ReservationSelection.MainHeader>
                        Bus Reservation
                     </ReservationSelection.MainHeader>
                     <ReservationSelection.EditIcon
                        src={"/images/edit-icon.png"}
                        alt={"bi-directional-arrow-icon image"}
                     />
                  </ReservationSelection.HeaderSection>

                  <ReservationSelection.TopImages>
                     {userImages?.map((item, index) => {
                        if (index <= 2)
                           return (
                              <ReservationSelection.TopImageWrapper
                                 key={`userImages---${item.id}`}
                                 index={index}
                              >
                                 <ReservationSelection.UserProfile
                                    src={"/images/sideBarImage.png"}
                                    alt={"close icon"}
                                 />
                              </ReservationSelection.TopImageWrapper>
                           );

                        if (index === 3)
                           return (
                              <ReservationSelection.ImageLayer
                                 key={`userImages---${item.id}`}
                                 index={index}
                              >
                                 <ReservationSelection.ImageLayerText>
                                    +{userImages.length - 3}
                                 </ReservationSelection.ImageLayerText>
                              </ReservationSelection.ImageLayer>
                           );
                     })}
                  </ReservationSelection.TopImages>
               </ReservationSelection.MainHeaderSection>
            </ReservationSelection.TopSection>
            <ReservationSelection.TopWrapper>
               <ReservationSelection.InputWrapper>
                  <ReservationSelection.InputOne>
                     <ReservationSelection.OrigninLabel>
                        Origin
                     </ReservationSelection.OrigninLabel>
                     <ReservationSelection.OrigninInputWrapper>
                        <ReservationSelection.OrigninInput
                           placeholder={"Leaving from"}
                        />
                     </ReservationSelection.OrigninInputWrapper>
                  </ReservationSelection.InputOne>

                  <ReservationSelection.BiIconWrapper>
                     <ReservationSelection.BiIcon
                        src={"/images/bi-directional-arrow-icon.png"}
                        alt={"bi-directional-arrow-icon image"}
                     />
                  </ReservationSelection.BiIconWrapper>

                  <ReservationSelection.InputTwo>
                     <ReservationSelection.DestinationLabel>
                        Destination
                     </ReservationSelection.DestinationLabel>
                     <ReservationSelection.DestinationInputWrapper>
                        <ReservationSelection.DestinationInput
                           placeholder={"Going to"}
                        />
                     </ReservationSelection.DestinationInputWrapper>
                  </ReservationSelection.InputTwo>

                  <ReservationSelection.InputThree>
                     <ReservationSelection.InputLabel>
                        Leaving Date
                     </ReservationSelection.InputLabel>
                  </ReservationSelection.InputThree>

                  <ReservationSelection.InputFour>
                     <ReservationSelection.InputLabel>
                        Return Date
                     </ReservationSelection.InputLabel>
                  </ReservationSelection.InputFour>

                  <ReservationSelection.InputFive>
                     <ReservationSelection.InputLabel>
                        Passengers
                     </ReservationSelection.InputLabel>
                  </ReservationSelection.InputFive>
               </ReservationSelection.InputWrapper>

               <ReservationSelection.UpdateBtn>
                  Update
               </ReservationSelection.UpdateBtn>
            </ReservationSelection.TopWrapper>
         </ReservationSelection.AreaOne>

         <ReservationSelection.AreaTwo>
            <ReservationSelection.Card>
               <ReservationSelection.CardContent>
                  <ReservationSelection.CardCol>
                     <ReservationSelection.TimeWrapper>
                        <ReservationSelection.TravelTimeWrapper>
                           <ReservationSelection.DurationBus
                              src={"/images/red-circle.png"}
                              alt={"bi-directional-arrow-icon image"}
                           />
                           <ReservationSelection.TravelTime red>
                              3:00am
                           </ReservationSelection.TravelTime>
                           <ReservationSelection.TravelTime bold>
                              Circle
                           </ReservationSelection.TravelTime>
                           <ReservationSelection.TravelTime>
                              - South Station
                           </ReservationSelection.TravelTime>
                        </ReservationSelection.TravelTimeWrapper>

                        <ReservationSelection.TravelTimeWrapper>
                           <ReservationSelection.DurationBus
                              src={"/images/green-location.png"}
                              alt={"bi-directional-arrow-icon image"}
                           />
                           <ReservationSelection.TravelTime green>
                              8:00pm
                           </ReservationSelection.TravelTime>
                           <ReservationSelection.TravelTime bold>
                              Kaneshi
                           </ReservationSelection.TravelTime>
                           <ReservationSelection.TravelTime>
                              - 44th St & 3rd Ave
                           </ReservationSelection.TravelTime>
                        </ReservationSelection.TravelTimeWrapper>
                     </ReservationSelection.TimeWrapper>

                     <ReservationSelection.DurationWrapper>
                        <ReservationSelection.DurationBus
                           src={"/images/duration-bus.png"}
                           alt={"bi-directional-arrow-icon image"}
                        />

                        <ReservationSelection.Duration>
                           5 hours drive
                        </ReservationSelection.Duration>
                     </ReservationSelection.DurationWrapper>
                  </ReservationSelection.CardCol>
                  <ReservationSelection.CardCol>
                     <ReservationSelection.Price>
                        GHC 380
                     </ReservationSelection.Price>
                     <ReservationSelection.CardBtn to="/dashboard/reservation-overview">
                        Select
                     </ReservationSelection.CardBtn>
                  </ReservationSelection.CardCol>
               </ReservationSelection.CardContent>
            </ReservationSelection.Card>
         </ReservationSelection.AreaTwo>

         <ReservationSelection.AreaThree>
            <ReservationSelection.LoadMoreBtn>
               Load More<h3>&#128526;</h3>
            </ReservationSelection.LoadMoreBtn>
         </ReservationSelection.AreaThree>
      </ReservationSelection>
   );
}
