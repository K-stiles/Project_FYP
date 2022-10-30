import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { DateRange } from "react-date-range";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../constants/constantStyles.css";
import { userImages } from "../utils";
import { Loader, ReservationSelection } from "../components";
import { getReservation } from "../redux/features/reservationSlice";

export default function ReservationSelectionContainer() {
   const navigate = useNavigate();
   const location = useLocation();

   // const [reservationID, setReservationID] = useState(location.state.reservationID);
   const [pickupTown, setPickupTown] = useState(location.state.pickupTown);
   const [dropPointTown, setDropPointTown] = useState(
      location.state.dropPointTown
   );
   const [date, setDate] = useState(location.state.date);
   const [openDate, setOpenDate] = useState(false);
   const {
      totalPasengers,
      reservationType,
      busType,
      paymentMethod,
      leavingDate,
      returningDate,
      groupNumber,
      luggage,
   } = useSelector(getReservation);
   const res = useSelector(getReservation);
   console.log(res);

   const goBack = () => navigate(-1);

   const activate = () => {
      return (
         reservationType !== null &&
         busType !== null &&
         paymentMethod !== null &&
         pickupTown !== "" &&
         dropPointTown !== "" &&
         leavingDate !== null &&
         returningDate !== null &&
         groupNumber !== 0 &&
         luggage !== 0 &&
         totalPasengers !== 0
      );
   };

   useEffect(() => {
      activate();
   }, [pickupTown, dropPointTown]);

   const updateReservation = () => {
      refetch({ pickupTown, dropPointTown });
      // reservationUpdate({
      //    variables: {
      //       reservationId: location.state.reservationID,
      //       input: {
      //          type: null,
      //          origin: pickupTown,
      //          destination: dropPointTown,
      //          leavingDate: date[0].startDate,
      //          returningDate: date[0].endDate,
      //          luggages: null,
      //          paymentMethod: null,
      //          groupNumber: null,
      //          adults: null,
      //          children: null,
      //          seniors: null,
      //       },
      //    },
      // });
      // console.log("refetch reservation");
   };

   const { loading, data, error, refetch } = useQuery(GET_BUSSTATIONS, {
      variables: {
         pickupTown: location.state.pickupTown,
         dropPointTown: location.state.dropPointTown,
         limit: 10,
      },
   });

   const [reservationUpdate, { loading: updateLoading, error: updateError }] =
      useMutation(UPDATE_RESERVATION);

   if (loading || updateLoading) return <Loader />;
   if (error) {
      return (
         <ReservationSelection>
            {`Submission error! ${error.message}`}
         </ReservationSelection>
      );
   }
   if (updateError) {
      return (
         <ReservationSelection>
            {`Submission error! ${updateError.message}`}
         </ReservationSelection>
      );
   }
   // if (data.busStations.length === 0)
   //    return "We dont operate at these locations";
   // if (data.busStations) console.log("gql data: ", data.busStations);

   return (
      <ReservationSelection>
         {/* //TODO: ------------- AREA TWO --------------- */}
         <ReservationSelection.AreaOne>
            <ReservationSelection.TopSection>
               <ReservationSelection.GoBackBtn onClick={goBack}>
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
                           onChange={(e) => setPickupTown(e.target.value)}
                           value={pickupTown}
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
                           onChange={(e) => setDropPointTown(e.target.value)}
                           value={dropPointTown}
                        />
                     </ReservationSelection.DestinationInputWrapper>
                  </ReservationSelection.InputTwo>

                  <ReservationSelection.InputThree>
                     <ReservationSelection.InputLabel>
                        Leaving Date
                     </ReservationSelection.InputLabel>
                     <ReservationSelection.DateWrapper
                        onClick={() => setOpenDate((openDate) => !openDate)}
                     >
                        <ReservationSelection.DateLabel>
                           {`${format(date[0].startDate, "dd/MM/yyyy")}`}
                        </ReservationSelection.DateLabel>
                     </ReservationSelection.DateWrapper>
                     {openDate && (
                        <DateRange
                           ranges={date}
                           className="date-selector"
                           minDate={new Date()}
                           onChange={(item) => {
                              setDate([item.selection]);
                           }}
                        />
                     )}
                  </ReservationSelection.InputThree>

                  <ReservationSelection.InputFour>
                     <ReservationSelection.InputLabel>
                        Return Date
                     </ReservationSelection.InputLabel>
                     <ReservationSelection.DateWrapper
                        onClick={() => setOpenDate((openDate) => !openDate)}
                     >
                        <ReservationSelection.DateLabel>
                           {`${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </ReservationSelection.DateLabel>
                     </ReservationSelection.DateWrapper>
                  </ReservationSelection.InputFour>

                  <ReservationSelection.InputFive>
                     <ReservationSelection.InputLabel>
                        Passengers
                     </ReservationSelection.InputLabel>
                     <ReservationSelection.Passengers>
                        <ReservationSelection.DateLabel>
                           {totalPasengers}
                        </ReservationSelection.DateLabel>
                     </ReservationSelection.Passengers>
                  </ReservationSelection.InputFive>
               </ReservationSelection.InputWrapper>

               <ReservationSelection.UpdateBtn
                  onClick={updateReservation}
                  disabled={activate() ? false : true}
                  activate={activate()}
               >
                  Update
               </ReservationSelection.UpdateBtn>
            </ReservationSelection.TopWrapper>
         </ReservationSelection.AreaOne>

         {/* //TODO: CARD SECTION */}
         <ReservationSelection.AreaTwo>
            {data?.busStations &&
               data?.busStations.map((item, idx) => (
                  <ReservationSelection.Card key={idx}>
                     <ReservationSelection.CardContent>
                        <ReservationSelection.CardCol>
                           <ReservationSelection.TimeWrapper>
                              <ReservationSelection.TravelTimeWrapper>
                                 <ReservationSelection.DurationBus
                                    src={"/images/red-circle.png"}
                                    alt={"bi-directional-arrow-icon image"}
                                 />
                                 <ReservationSelection.TravelTime red>
                                    {item.timeToLeave}
                                 </ReservationSelection.TravelTime>
                                 <ReservationSelection.TravelTime bold>
                                    {item.pickupTown}
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
                                    {item.timeToReturn}
                                 </ReservationSelection.TravelTime>
                                 <ReservationSelection.TravelTime bold>
                                    {item.dropPointTown}
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
                                 {item.duration} hours drive
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
               ))}
         </ReservationSelection.AreaTwo>

         {data.busStations.length === 0 ? (
            <ReservationSelection.Sorry>
               <ReservationSelection.SorryText>
                  Sorry!!! please we dont operate at these locations
               </ReservationSelection.SorryText>
            </ReservationSelection.Sorry>
         ) : (
            <ReservationSelection.AreaThree>
               <ReservationSelection.LoadMoreBtn>
                  Load More<h3>&#128526;</h3>
               </ReservationSelection.LoadMoreBtn>
            </ReservationSelection.AreaThree>
         )}
      </ReservationSelection>
   );
}

const GET_BUSSTATIONS = gql`
   query BusStations($pickupTown: String, $dropPointTown: String, $limit: Int) {
      busStations(
         pickupTown: $pickupTown
         dropPointTown: $dropPointTown
         limit: $limit
      ) {
         id
         pickupRegion
         dropPointRegion
         pickupTown
         dropPointTown
         distance
         duration
         timeToLeave
         timeToReturn
         createdAt
      }
   }
`;

const UPDATE_RESERVATION = gql`
   mutation UpdateReservation($reservationId: ID!, $input: ReservationInput) {
      updateReservation(reservationId: $reservationId, input: $input) {
         id
         type
         origin
         destination
         duration
         leavingDate
         returningDate
         luggages
         paymentMethod
         groupNumber
         adults
         children
         seniors
         userId
         username
         bus {
            id
            busType
            busStatus
            createdAt
            seatsFilled
            busStop
            numberOfPassengers
            numberOfSeats
            userId
            username
         }
         createdAt
      }
   }
`;
