import React from "react";
import {
   Card,
   CardHeader,
   CardInfo,
   CardPrice,
   CardPricing,
   CardRow,
   CardRowOne,
   CardRows,
   CardRowTwo,
   CardTitle,
   EditIcon,
   GoBackBtn,
   HeaderSection,
   ImageLayer,
   ImageLayerText,
   MainHeader,
   MainHeaderSection,
   NextBtn,
   Pen,
   RowText,
   Section,
   SectionOne,
   SectionThree,
   SectionTwo,
   Text,
   TopImages,
   TopImageWrapper,
   TopWrapper,
   UserProfile,
} from "./overview.styled";

export default function ReservationOverview({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}

// ----------------------------

ReservationOverview.SectionOne = function ReservationOverviewSectionOne({
   children,
   ...restProps
}) {
   return <SectionOne {...restProps}>{children}</SectionOne>;
};
ReservationOverview.MainHeaderSection =
   function ReservationOverviewMainHeaderSection({ children, ...restProps }) {
      return <MainHeaderSection {...restProps}>{children}</MainHeaderSection>;
   };
ReservationOverview.MainHeader = function ReservationOverviewMainHeader({
   children,
   ...restProps
}) {
   return <MainHeader {...restProps}>{children}</MainHeader>;
};

ReservationOverview.HeaderSection = function ReservationOverviewHeaderSection({
   children,
   ...restProps
}) {
   return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
ReservationOverview.EditIcon = function ReservationOverviewEditIcon({
   ...restProps
}) {
   return <EditIcon {...restProps} />;
};
ReservationOverview.TopWrapper = function ReservationOverviewTopWrapper({
   children,
   ...restProps
}) {
   return <TopWrapper {...restProps}>{children}</TopWrapper>;
};
ReservationOverview.TopImages = function ReservationOverviewTopImages({
   children,
   ...restProps
}) {
   return <TopImages {...restProps}>{children}</TopImages>;
};
ReservationOverview.TopImageWrapper =
   function ReservationOverviewTopImageWrapper({ children, ...restProps }) {
      return <TopImageWrapper {...restProps}>{children}</TopImageWrapper>;
   };
ReservationOverview.UserProfile = function ReservationOverviewUserProfile({
   ...restProps
}) {
   return <UserProfile {...restProps} />;
};
ReservationOverview.ImageLayer = function ReservationOverviewImageLayer({
   children,
   ...restProps
}) {
   return <ImageLayer {...restProps}>{children}</ImageLayer>;
};
ReservationOverview.ImageLayerText =
   function ReservationOverviewImageLayerText({ children, ...restProps }) {
      return <ImageLayerText {...restProps}>{children}</ImageLayerText>;
   };
ReservationOverview.TopImages = function ReservationOverviewTopImages({
   children,
   ...restProps
}) {
   return <TopImages {...restProps}>{children}</TopImages>;
};
ReservationOverview.TopImageWrapper =
   function ReservationOverviewTopImageWrapper({ children, ...restProps }) {
      return <TopImageWrapper {...restProps}>{children}</TopImageWrapper>;
   };
ReservationOverview.UserProfile = function ReservationOverviewUserProfile({
   ...restProps
}) {
   return <UserProfile {...restProps} />;
};
ReservationOverview.ImageLayer = function ReservationOverviewImageLayer({
   children,
   ...restProps
}) {
   return <ImageLayer {...restProps}>{children}</ImageLayer>;
};
ReservationOverview.ImageLayerText =
   function ReservationOverviewImageLayerText({ children, ...restProps }) {
      return <ImageLayerText {...restProps}>{children}</ImageLayerText>;
   };

ReservationOverview.GoBackBtn = function ReservationOverviewGoBackBtn({
   children,
   ...restProps
}) {
   return <GoBackBtn {...restProps}>{children}</GoBackBtn>;
};
ReservationOverview.NextBtn = function ReservationOverviewNextBtn({
   children,
   ...restProps
}) {
   return <NextBtn {...restProps}>{children}</NextBtn>;
};
ReservationOverview.SectionTwo = function ReservationOverviewSectionTwo({
   children,
   ...restProps
}) {
   return <SectionTwo {...restProps}>{children}</SectionTwo>;
};
ReservationOverview.Card = function ReservationOverviewCard({
   children,
   ...restProps
}) {
   return <Card {...restProps}>{children}</Card>;
};
ReservationOverview.CardHeader = function ReservationOverviewCardHeader({
   children,
   ...restProps
}) {
   return <CardHeader {...restProps}>{children}</CardHeader>;
};
ReservationOverview.CardTitle = function ReservationOverviewCardTitle({
   children,
   ...restProps
}) {
   return <CardTitle {...restProps}>{children}</CardTitle>;
};
ReservationOverview.CardRows = function ReservationOverviewCardRows({
   children,
   ...restProps
}) {
   return <CardRows {...restProps}>{children}</CardRows>;
};
ReservationOverview.CardRow = function ReservationOverviewCardRow({
   children,
   ...restProps
}) {
   return <CardRow {...restProps}>{children}</CardRow>;
};
ReservationOverview.CardRowOne = function ReservationOverviewCardRowOne({
   children,
   ...restProps
}) {
   return <CardRowOne {...restProps}>{children}</CardRowOne>;
};
ReservationOverview.CardRowTwo = function ReservationOverviewCardRowTwo({
   children,
   ...restProps
}) {
   return <CardRowTwo {...restProps}>{children}</CardRowTwo>;
};
ReservationOverview.RowText = function ReservationOverviewRowText({
   children,
   ...restProps
}) {
   return <RowText {...restProps}>{children}</RowText>;
};
ReservationOverview.Text = function ReservationOverviewText({
   children,
   ...restProps
}) {
   return <Text {...restProps}>{children}</Text>;
};
ReservationOverview.CardPrice = function ReservationOverviewCardPrice({
   children,
   ...restProps
}) {
   return <CardPrice {...restProps}>{children}</CardPrice>;
};
ReservationOverview.CardInfo = function ReservationOverviewCardInfo({
   children,
   ...restProps
}) {
   return <CardInfo {...restProps}>{children}</CardInfo>;
};
ReservationOverview.Pen = function ReservationOverviewPen({
   children,
   ...restProps
}) {
   return <Pen {...restProps}>{children}</Pen>;
};
ReservationOverview.CardPricing = function ReservationOverviewCardPricing({
   children,
   ...restProps
}) {
   return <CardPricing {...restProps}>{children}</CardPricing>;
};
ReservationOverview.SectionThree = function ReservationOverviewSectionThree({
   children,
   ...restProps
}) {
   return <SectionThree {...restProps}>{children}</SectionThree>;
};
