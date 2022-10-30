import { createSlice } from "@reduxjs/toolkit";

export const ReservationSlice = createSlice({
   name: "reservation",
   initialState: {
      reservationType: null,
      busType: null,
      paymentMethod: null,
      groupNumber: 0,
      luggage: 0,

      adults: 0,
      children: 0,
      seniors: 0,
      totalPasengers: 0,

      origin: null,
      destination: null,
      leavingDate: null,
      returningDate: null,
   },
   reducers: {
      setOrigin: (state, action) => {
         state.origin = action.payload;
      },
      setDestination: (state, action) => {
         state.destination = action.payload;
      },
      setLeavingDate: (state, action) => {
         state.leavingDate = action.payload;
      },
      setReturningDate: (state, action) => {
         state.returningDate = action.payload;
      },
      setReserveType: (state, action) => {
         state.reservationType = action.payload;
      },
      setBusType: (state, action) => {
         state.busType = action.payload;
      },
      setPaymentMethod: (state, action) => {
         state.paymentMethod = action.payload;
      },

      increaseAdults: (state) => {
         state.adults += 1;
      },
      decreaseAdults: (state) => {
         state.adults -= 1;
      },
      increaseChildren: (state) => {
         state.children += 1;
      },
      decreaseChildren: (state) => {
         state.children -= 1;
      },
      increaseSeniors: (state) => {
         state.seniors += 1;
      },
      decreaseSeniors: (state) => {
         state.seniors -= 1;
      },
      increaseLuggage: (state) => {
         state.luggage += 1;
      },
      decreaseLuggage: (state) => {
         state.luggage -= 1;
      },
      increaseGroupNumber: (state) => {
         state.groupNumber += 1;
      },
      decreaseGroupNumber: (state) => {
         state.groupNumber -= 1;
      },
      getTotalPasengers: (state) => {
         state.totalPasengers = state.adults + state.children + state.seniors;
         // console.log("redux--state.totalPasengers: ", state.totalPasengers);
      },
   },
});

export const {
   setOrigin,
   setDestination,
   setLeavingDate,
   setReturningDate,

   setReserveType,
   setBusType,
   setPaymentMethod,

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
} = ReservationSlice.actions;

export const getReservation = (state) => state.reservation;

export default ReservationSlice.reducer;
