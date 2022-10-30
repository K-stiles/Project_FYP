import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../constants/constantStyles.css";

import { Dashboard, Loader } from "../components";
import {
   LiveActivityData,
   tableHeaderData,
   tableRowData,
   userImages,
} from "../utils";
import {
   setLeavingDate,
   setReturningDate,
   getReservation,
} from "../redux/features/reservationSlice";

export default function DashboardContainer() {
   const {
      reservationType,
      busType,
      paymentMethod,
      leavingDate,
      returningDate,
      groupNumber,
      luggage,
      adults,
      children,
      seniors,
      totalPasengers,
   } = useSelector(getReservation);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [error, setError] = useState("");
   const [reservationID, setReservationID] = useState("");
   const [pickupTown, setPickupTown] = useState("");
   const [dropPointTown, setDropPointTown] = useState("");
   const [openDate, setOpenDate] = useState(false);
   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: "selection",
      },
   ]);

   const getOrigin = (e) => setPickupTown(e.target.value);
   const getDestination = (e) => setDropPointTown(e.target.value);
   const getDate = (e) => {
      dispatch(
         setLeavingDate(`${format(date[0].startDate, "eeee hh:mm aaa P")}`)
      );
      dispatch(
         setReturningDate(`${format(date[0].endDate, "eeee hh:mm aaa P")}`)
      );
   };

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

   const handleReservationSearch = async (e) => {
      e.preventDefault();
      if (activate() === false) return;
      try {
         await reservation({
            variables: {
               input: {
                  type: reservationType,
                  origin: pickupTown,
                  destination: dropPointTown,
                  leavingDate: date[0].startDate,
                  returningDate: date[0].endDate,
                  luggages: luggage,
                  paymentMethod: paymentMethod,
                  groupNumber,
                  adults,
                  children,
                  seniors,
                  bus: [
                     {
                        busType,
                        busStatus: "loading",
                        numberOfSeats: 100,
                        seatsFilled: 20,
                        numberOfPassengers: totalPasengers,
                     },
                  ],
               },
            },
         });
         navigate("/dashboard/reservation-selection", {
            state: { pickupTown, dropPointTown, date,reservationID },
         });
      } catch (error) {
         console.log(error);
      }
   };

   const [reservation, { loading }] = useMutation(CREATE_RESERVATION, {
      update: (_, { data }) => setReservationID(data.createReservation.id),
      onError: (err) => setError(err),
   });

   if (loading) return <Loader />;
   if (error) {
      return (
         <Dashboard>
            <Dashboard.Container>
               <Dashboard.MainHeader>{`Submission error! ${error.message}`}</Dashboard.MainHeader>
            </Dashboard.Container>
         </Dashboard>
      );
   }

   return (
      <Dashboard>
         <Dashboard.Container>
            <div>
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

                     {/* TODO: RESERVATION FORM */}
                     <Dashboard.Form onSubmit={handleReservationSearch}>
                        <Dashboard.InputWrapper>
                           <Dashboard.InputOne>
                              <Dashboard.OrigninLabel>
                                 Origin
                              </Dashboard.OrigninLabel>
                              <Dashboard.OrigninInputWrapper>
                                 <Dashboard.OrigninInput
                                    placeholder={"Leaving from"}
                                    onChange={getOrigin}
                                    value={pickupTown}
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
                                    onChange={getDestination}
                                    value={dropPointTown}
                                 />
                              </Dashboard.DestinationInputWrapper>
                           </Dashboard.InputTwo>

                           <Dashboard.InputThree>
                              <Dashboard.InputLabel>
                                 Leaving Date
                              </Dashboard.InputLabel>
                              <Dashboard.DateWrapper
                                 onClick={() =>
                                    setOpenDate((openDate) => !openDate)
                                 }
                              >
                                 <Dashboard.DateLabel>
                                    {`${format(
                                       date[0].startDate,
                                       "dd/MM/yyyy"
                                    )}`}
                                 </Dashboard.DateLabel>
                              </Dashboard.DateWrapper>

                              {/* <div ref={outsideClickRef}> */}
                              {openDate && (
                                 <DateRange
                                    editableDateInputs={true}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date-selector"
                                    minDate={new Date()}
                                    onChange={(item) => {
                                       setDate([item.selection]);
                                       getDate();
                                    }}
                                 />
                              )}
                              {/* </div> */}
                           </Dashboard.InputThree>

                           <Dashboard.InputFour>
                              <Dashboard.InputLabel>
                                 Return Date
                              </Dashboard.InputLabel>
                              <Dashboard.DateWrapper
                                 onClick={() =>
                                    setOpenDate((openDate) => !openDate)
                                 }
                              >
                                 <Dashboard.DateLabel>
                                    {`${format(date[0].endDate, "dd/MM/yyyy")}`}
                                 </Dashboard.DateLabel>
                              </Dashboard.DateWrapper>
                           </Dashboard.InputFour>

                           <Dashboard.InputFive>
                              <Dashboard.InputLabel>
                                 Passengers
                              </Dashboard.InputLabel>
                              <Dashboard.Passengers>
                                 <Dashboard.DateLabel>
                                    {totalPasengers}
                                 </Dashboard.DateLabel>
                              </Dashboard.Passengers>
                           </Dashboard.InputFive>
                        </Dashboard.InputWrapper>

                        {/* //TODO: ------------- AREA FOUR --------------- */}
                        <Dashboard.AreaFour>
                           <Dashboard.ProceedBtn
                              disabled={activate() ? false : true}
                              activate={activate()}
                           >
                              <Dashboard.BtnRow>
                                 Proceed
                                 <Dashboard.EmojiHand>
                                    &#128073;
                                 </Dashboard.EmojiHand>
                              </Dashboard.BtnRow>
                           </Dashboard.ProceedBtn>
                        </Dashboard.AreaFour>
                     </Dashboard.Form>
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
                  {/* <Dashboard.AreaFour>
                     <Dashboard.ProceedBtn onClick={handleReservation}>
                        <Dashboard.BtnRow>
                           Proceed
                           <Dashboard.EmojiHand>&#128073;</Dashboard.EmojiHand>
                        </Dashboard.BtnRow>
                     </Dashboard.ProceedBtn>
                  </Dashboard.AreaFour> */}
               </Dashboard.CentralRegion>
            </div>
         </Dashboard.Container>
      </Dashboard>
   );
}

const CREATE_RESERVATION = gql`
   mutation CreateReservation($input: ReservationInput) {
      createReservation(input: $input) {
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
