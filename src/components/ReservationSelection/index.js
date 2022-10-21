import React from "react";
import {
   AreaOne,
   AreaThree,
   AreaTwo,
   BiIcon,
   BiIconWrapper,
   CardCol,
   CardContent,
   Card,
   DestinationInput,
   DestinationInputWrapper,
   DestinationLabel,
   EditIcon,
   HeaderSection,
   ImageLayer,
   ImageLayerText,
   InputFive,
   InputFour,
   InputLabel,
   InputOne,
   InputThree,
   InputTwo,
   InputWrapper,
   LoadMoreBtn,
   MainHeader,
   MainHeaderSection,
   OrigninInput,
   OrigninInputWrapper,
   OrigninLabel,
   Section,
   TopImages,
   TopImageWrapper,
   UserImageWrapper,
   UserProfile,
   TimeWrapper,
   TravelTime,
   Duration,
   TravelTimeWrapper,
   Price,
   CardBtn,
   DurationWrapper,
   DurationBus,
   UpdateBtn,
   TopWrapper,
   GoBackBtn,
   TopSection,
} from "./selection.styled";

export default function ReservationSelection({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}

// -----------------------------------
// -----------------------------------
// TODO: AREA ONE
// -----------------------------------
ReservationSelection.AreaOne = function ReservationSelectionAreaOne({
   children,
   ...restProps
}) {
   return <AreaOne {...restProps}>{children}</AreaOne>;
};
ReservationSelection.TopSection = function ReservationSelectionTopSection({
   children,
   ...restProps
}) {
   return <TopSection {...restProps}>{children}</TopSection>;
};
ReservationSelection.GoBackBtn = function ReservationSelectionGoBackBtn({
   children,
   ...restProps
}) {
   return <GoBackBtn {...restProps}>{children}</GoBackBtn>;
};
ReservationSelection.InputWrapper = function ReservationSelectionInputWrapper({
   children,
   ...restProps
}) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
ReservationSelection.TopImages = function ReservationSelectionTopImages({
   children,
   ...restProps
}) {
   return <TopImages {...restProps}>{children}</TopImages>;
};
ReservationSelection.TopImageWrapper =
   function ReservationSelectionTopImageWrapper({ children, ...restProps }) {
      return <TopImageWrapper {...restProps}>{children}</TopImageWrapper>;
   };
ReservationSelection.UserProfile = function ReservationSelectionUserProfile({
   ...restProps
}) {
   return <UserProfile {...restProps} />;
};
ReservationSelection.ImageLayer = function ReservationSelectionImageLayer({
   children,
   ...restProps
}) {
   return <ImageLayer {...restProps}>{children}</ImageLayer>;
};
ReservationSelection.ImageLayerText =
   function ReservationSelectionImageLayerText({ children, ...restProps }) {
      return <ImageLayerText {...restProps}>{children}</ImageLayerText>;
   };
ReservationSelection.UserImageWrapper =
   function ReservationSelectionUserImageWrapper({ children, ...restProps }) {
      return <UserImageWrapper {...restProps}>{children}</UserImageWrapper>;
   };

ReservationSelection.InputOne = function ReservationSelectionInputOne({
   children,
   ...restProps
}) {
   return <InputOne {...restProps}>{children}</InputOne>;
};
ReservationSelection.OrigninLabel = function ReservationSelectionOrigninLabel({
   children,
   ...restProps
}) {
   return <OrigninLabel {...restProps}>{children}</OrigninLabel>;
};
ReservationSelection.OrigninInputWrapper =
   function ReservationSelectionOrigninInputWrapper({
      children,
      ...restProps
   }) {
      return (
         <OrigninInputWrapper {...restProps}>{children}</OrigninInputWrapper>
      );
   };
ReservationSelection.OrigninInput = function ReservationSelectionOrigninInput({
   ...restProps
}) {
   return <OrigninInput {...restProps} />;
};

ReservationSelection.InputTwo = function ReservationSelectionInputTwo({
   children,
   ...restProps
}) {
   return <InputTwo {...restProps}>{children}</InputTwo>;
};
ReservationSelection.DestinationLabel =
   function ReservationSelectionDestinationLabel({ children, ...restProps }) {
      return <DestinationLabel {...restProps}>{children}</DestinationLabel>;
   };
ReservationSelection.DestinationInputWrapper =
   function ReservationSelectionDestinationInputWrapper({
      children,
      ...restProps
   }) {
      return (
         <DestinationInputWrapper {...restProps}>
            {children}
         </DestinationInputWrapper>
      );
   };
ReservationSelection.DestinationInput =
   function ReservationSelectionDestinationInput({ ...restProps }) {
      return <DestinationInput {...restProps} />;
   };
ReservationSelection.InputLabel = function ReservationSelectionInputLabel({
   children,
   ...restProps
}) {
   return <InputLabel {...restProps}>{children}</InputLabel>;
};

ReservationSelection.InputThree = function ReservationSelectionInputThree({
   children,
   ...restProps
}) {
   return <InputThree {...restProps}>{children}</InputThree>;
};
ReservationSelection.InputFour = function ReservationSelectionInputFour({
   children,
   ...restProps
}) {
   return <InputFour {...restProps}>{children}</InputFour>;
};
ReservationSelection.InputFive = function ReservationSelectionInputFive({
   children,
   ...restProps
}) {
   return <InputFive {...restProps}>{children}</InputFive>;
};
ReservationSelection.BiIconWrapper =
   function ReservationSelectionBiIconWrapper({ children, ...restProps }) {
      return <BiIconWrapper {...restProps}>{children}</BiIconWrapper>;
   };
ReservationSelection.BiIcon = function ReservationSelectionBiIcon({
   ...restProps
}) {
   return <BiIcon {...restProps} />;
};
ReservationSelection.MainHeaderSection =
   function ReservationSelectionMainHeaderSection({ children, ...restProps }) {
      return <MainHeaderSection {...restProps}>{children}</MainHeaderSection>;
   };
ReservationSelection.MainHeader = function ReservationSelectionMainHeader({
   children,
   ...restProps
}) {
   return <MainHeader {...restProps}>{children}</MainHeader>;
};

ReservationSelection.HeaderSection =
   function ReservationSelectionHeaderSection({ children, ...restProps }) {
      return <HeaderSection {...restProps}>{children}</HeaderSection>;
   };
ReservationSelection.EditIcon = function ReservationSelectionEditIcon({
   ...restProps
}) {
   return <EditIcon {...restProps} />;
};
ReservationSelection.TopWrapper = function ReservationSelectionTopWrapper({
   children,
   ...restProps
}) {
   return <TopWrapper {...restProps}>{children}</TopWrapper>;
};
// -----------------------------------
// -----------------------------------
// TODO: AREA ONE
// -----------------------------------
ReservationSelection.AreaTwo = function ReservationSelectionAreaTwo({
   children,
   ...restProps
}) {
   return <AreaTwo {...restProps}>{children}</AreaTwo>;
};
ReservationSelection.Card = function ReservationSelectionCard({
   children,
   ...restProps
}) {
   return <Card {...restProps}>{children}</Card>;
};
ReservationSelection.CardContent = function ReservationSelectionCardContent({
   children,
   ...restProps
}) {
   return <CardContent {...restProps}>{children}</CardContent>;
};
ReservationSelection.CardCol = function ReservationSelectionCardCol({
   children,
   ...restProps
}) {
   return <CardCol {...restProps}>{children}</CardCol>;
};
ReservationSelection.AreaThree = function ReservationSelectionAreaThree({
   children,
   ...restProps
}) {
   return <AreaThree {...restProps}>{children}</AreaThree>;
};

ReservationSelection.TimeWrapper = function ReservationSelectionTimeWrapper({
   children,
   ...restProps
}) {
   return <TimeWrapper {...restProps}>{children}</TimeWrapper>;
};
ReservationSelection.TravelTimeWrapper =
   function ReservationSelectionTravelTimeWrapper({ children, ...restProps }) {
      return <TravelTimeWrapper {...restProps}>{children}</TravelTimeWrapper>;
   };
ReservationSelection.TravelTime = function ReservationSelectionTravelTime({
   children,
   ...restProps
}) {
   return <TravelTime {...restProps}>{children}</TravelTime>;
};

ReservationSelection.DurationWrapper =
   function ReservationSelectionDurationWrapper({ children, ...restProps }) {
      return <DurationWrapper {...restProps}>{children}</DurationWrapper>;
   };
ReservationSelection.Duration = function ReservationSelectionDuration({
   children,
   ...restProps
}) {
   return <Duration {...restProps}>{children}</Duration>;
};
ReservationSelection.DurationBus = function ReservationSelectionDurationBus({
   ...restProps
}) {
   return <DurationBus {...restProps} />;
};
ReservationSelection.Price = function ReservationSelectionPrice({
   children,
   ...restProps
}) {
   return <Price {...restProps}>{children}</Price>;
};

ReservationSelection.CardBtn = function ReservationSelectionCardBtn({
   children,
   ...restProps
}) {
   return <CardBtn {...restProps}>{children}</CardBtn>;
};
ReservationSelection.UpdateBtn = function ReservationSelectionUpdateBtn({
   children,
   ...restProps
}) {
   return <UpdateBtn {...restProps}>{children}</UpdateBtn>;
};
ReservationSelection.LoadMoreBtn = function ReservationSelectionLoadMoreBtn({
   children,
   ...restProps
}) {
   return <LoadMoreBtn {...restProps}>{children}</LoadMoreBtn>;
};
