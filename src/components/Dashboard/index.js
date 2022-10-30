import React from "react";
import {
   AreaFour,
   AreaOne,
   AreaThree,
   AreaThreeTitle,
   AreaTwo,
   BiIcon,
   BiIconWrapper,
   Bottomcontent,
   BtnRow,
   Card,
   CardIcon,
   CardIconWrapper,
   Cards,
   CardTitle,
   CentralRegion,
   Container,
   DestinationInput,
   DestinationInputWrapper,
   DestinationLabel,
   DirectionIcon,
   DirectionIconWrapper,
   EditIcon,
   EmojiHand,
   FooterContent,
   FooterLabel,
   FooterNumber,
   FooterNumberIcon,
   FooterNumberIconWrapper,
   FooterTextWrapper,
   Graph,
   GraphText,
   GraphWrapper,
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
   LeftArrow,
   LiveSection,
   MainHeader,
   MainHeaderSection,
   OrigninInput,
   OrigninInputWrapper,
   OrigninLabel,
   DateLabel,
   ProceedBtn,
   RightArrow,
   RowItemWrapper,
   RowText,
   Section,
   SmallText,
   SubHeader,
   TableFooter,
   TableHeader,
   TableRow,
   TableTitle,
   TableTitleWrapper,
   Text,
   TextIcon,
   Topcontent,
   TopImages,
   TopImageWrapper,
   UserProfile,
   UserImageWrapper,
   DateWrapper,
   Passengers,
   DateSelector,
   Form,
} from "./dashboard.styled";

export default function Dashboard({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Dashboard.Container = function DashboardContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
Dashboard.SubHeader = function DashboardSubHeader({ children, ...restProps }) {
   return <SubHeader {...restProps}>{children}</SubHeader>;
};

// // ------------------------------
// // ------------------------------
// // TODO: Dashboard Top Region
// // ------------------------------
// Dashboard.TopRegion = function DashboardTopRegion({ children, ...restProps }) {
//    return <TopRegion {...restProps}>{children}</TopRegion>;
// };
// Dashboard.SearchWrapper = function DashboardSearchWrapper({
//    children,
//    ...restProps
// }) {
//    return <SearchWrapper {...restProps}>{children}</SearchWrapper>;
// };
// Dashboard.SearchInput = function DashboardSearchInput({
//    children,
//    ...restProps
// }) {
//    return <SearchInput {...restProps}>{children}</SearchInput>;
// };
// Dashboard.SearchIconWrapper = function DashboardSearchIconWrapper({
//    children,
//    ...restProps
// }) {
//    return <SearchIconWrapper {...restProps}>{children}</SearchIconWrapper>;
// };
// Dashboard.SearchIcon = function DashboardSearchIcon({
//    children,
//    ...restProps
// }) {
//    return <SearchIcon {...restProps}>{children}</SearchIcon>;
// };
// Dashboard.RouteLinks = function DashboardRouteLinks({
//    children,
//    ...restProps
// }) {
//    return <RouteLinks {...restProps}>{children}</RouteLinks>;
// };
// Dashboard.NotifySection = function DashboardNotifySection({
//    children,
//    ...restProps
// }) {
//    return <NotifySection {...restProps}>{children}</NotifySection>;
// };

// Dashboard.RouteLink = function DashboardRouteLink({ children, ...restProps }) {
//    return <RouteLink {...restProps}>{children}</RouteLink>;
// };
// Dashboard.LinkText = function DashboardLinkText({ children, ...restProps }) {
//    return <LinkText {...restProps}>{children}</LinkText>;
// };
// Dashboard.ProfileWrapper = function DashboardProfileWrapper({
//    children,
//    ...restProps
// }) {
//    return <ProfileWrapper {...restProps}>{children}</ProfileWrapper>;
// };
// Dashboard.BellWrapper = function DashboardBellWrapper({
//    children,
//    ...restProps
// }) {
//    return <BellWrapper {...restProps}>{children}</BellWrapper>;
// };
// Dashboard.BellIcon = function DashboardBellIcon({ ...restProps }) {
//    return <BellIcon {...restProps} />;
// };
// Dashboard.ProfileImage = function DashboardProfileImage({ ...restProps }) {
//    return <ProfileImage {...restProps} />;
// };

// --------------------------------
// --------------------------------
// TODO: Dashboard Central Region
// --------------------------------

Dashboard.CentralRegion = function DashboardCentralRegion({
   children,
   ...restProps
}) {
   return <CentralRegion {...restProps}>{children}</CentralRegion>;
};

// -----------------------------------
// -----------------------------------
// TODO: Dashboard PictureBar Region
// -----------------------------------
// Dashboard.PictureBar = function DashboardPictureBar({
//    children,
//    ...restProps
// }) {
//    return <PictureBar {...restProps}>{children}</PictureBar>;
// };
// Dashboard.CloseWrapper = function DashboardCloseWrapper({
//    children,
//    ...restProps
// }) {
//    return <CloseWrapper {...restProps}>{children}</CloseWrapper>;
// };
// Dashboard.CloseIcon = function DashboardCloseIcon({ children, ...restProps }) {
//    return <CloseIcon {...restProps}>{children}</CloseIcon>;
// };
// Dashboard.Line = function DashboardLine({ children, ...restProps }) {
//    return <Line {...restProps}>{children}</Line>;
// };
// Dashboard.UsersContainer = function DashboardUsersContainer({
//    children,
//    ...restProps
// }) {
//    return <UsersContainer {...restProps}>{children}</UsersContainer>;
// };

// Dashboard.ArrowIcon = function DashboardArrowIcon({ ...restProps }) {
//    return <ArrowIcon {...restProps} />;
// };
// Dashboard.ArrowWrapper = function DashboardArrowWrapper({
//    children,
//    ...restProps
// }) {
//    return <ArrowWrapper {...restProps}>{children}</ArrowWrapper>;
// };
// Dashboard.ArrowLine = function DashboardArrowLine({ children, ...restProps }) {
//    return <ArrowLine {...restProps}>{children}</ArrowLine>;
// };

// -----------------------------------
// -----------------------------------
// TODO: AREA ONE
// -----------------------------------
Dashboard.AreaOne = function DashboardAreaOne({ children, ...restProps }) {
   return <AreaOne {...restProps}>{children}</AreaOne>;
};
Dashboard.MainHeader = function DashboardMainHeader({
   children,
   ...restProps
}) {
   return <MainHeader {...restProps}>{children}</MainHeader>;
};
Dashboard.LiveSection = function DashboardLiveSection({
   children,
   ...restProps
}) {
   return <LiveSection {...restProps}>{children}</LiveSection>;
};
Dashboard.Cards = function DashboardCards({ children, ...restProps }) {
   return <Cards {...restProps}>{children}</Cards>;
};
Dashboard.Card = function DashboardCard({ children, ...restProps }) {
   return <Card {...restProps}>{children}</Card>;
};
Dashboard.Topcontent = function DashboardTopcontent({
   children,
   ...restProps
}) {
   return <Topcontent {...restProps}>{children}</Topcontent>;
};
Dashboard.Bottomcontent = function DashboardBottomcontent({
   children,
   ...restProps
}) {
   return <Bottomcontent {...restProps}>{children}</Bottomcontent>;
};
Dashboard.CardTitle = function DashboardCardTitle({ children, ...restProps }) {
   return <CardTitle {...restProps}>{children}</CardTitle>;
};
Dashboard.CardIconWrapper = function DashboardCardIconWrapper({
   children,
   ...restProps
}) {
   return <CardIconWrapper {...restProps}>{children}</CardIconWrapper>;
};
Dashboard.CardIcon = function DashboardCardIcon({ ...restProps }) {
   return <CardIcon {...restProps} />;
};
Dashboard.GraphText = function DashboardGraphText({ children, ...restProps }) {
   return <GraphText {...restProps}>{children}</GraphText>;
};
Dashboard.Text = function DashboardText({ children, ...restProps }) {
   return <Text {...restProps}>{children}</Text>;
};
Dashboard.GraphWrapper = function DashboardGraphWrapper({
   children,
   ...restProps
}) {
   return <GraphWrapper {...restProps}>{children}</GraphWrapper>;
};
Dashboard.SmallText = function DashboardSmallText({ children, ...restProps }) {
   return <SmallText {...restProps}>{children}</SmallText>;
};
Dashboard.DirectionIconWrapper = function DashboardDirectionIconWrapper({
   children,
   ...restProps
}) {
   return (
      <DirectionIconWrapper {...restProps}>{children}</DirectionIconWrapper>
   );
};
Dashboard.DirectionIcon = function DashboardDirectionIcon({ ...restProps }) {
   return <DirectionIcon {...restProps} />;
};
Dashboard.TextIcon = function DashboardTextIcon({ children, ...restProps }) {
   return <TextIcon {...restProps}>{children}</TextIcon>;
};
Dashboard.Graph = function DashboardGraph({ ...restProps }) {
   return <Graph {...restProps} />;
};

// -----------------------------------
// -----------------------------------
// TODO: AREA TWO
// -----------------------------------
Dashboard.AreaTwo = function DashboardAreaTwo({ children, ...restProps }) {
   return <AreaTwo {...restProps}>{children}</AreaTwo>;
};
Dashboard.InputWrapper = function DashboardInputWrapper({
   children,
   ...restProps
}) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
Dashboard.TopImages = function DashboardTopImages({ children, ...restProps }) {
   return <TopImages {...restProps}>{children}</TopImages>;
};
Dashboard.TopImageWrapper = function DashboardTopImageWrapper({
   children,
   ...restProps
}) {
   return <TopImageWrapper {...restProps}>{children}</TopImageWrapper>;
};
Dashboard.ImageLayer = function DashboardImageLayer({
   children,
   ...restProps
}) {
   return <ImageLayer {...restProps}>{children}</ImageLayer>;
};
Dashboard.ImageLayerText = function DashboardImageLayerText({
   children,
   ...restProps
}) {
   return <ImageLayerText {...restProps}>{children}</ImageLayerText>;
};
Dashboard.UserImageWrapper = function DashboardUserImageWrapper({
   children,
   ...restProps
}) {
   return <UserImageWrapper {...restProps}>{children}</UserImageWrapper>;
};
Dashboard.UserProfile = function DashboardUserProfile({ ...restProps }) {
   return <UserProfile {...restProps} />;
};

Dashboard.InputOne = function DashboardInputOne({ children, ...restProps }) {
   return <InputOne {...restProps}>{children}</InputOne>;
};
Dashboard.OrigninLabel = function DashboardOrigninLabel({
   children,
   ...restProps
}) {
   return <OrigninLabel {...restProps}>{children}</OrigninLabel>;
};
Dashboard.OrigninInputWrapper = function DashboardOrigninInputWrapper({
   children,
   ...restProps
}) {
   return <OrigninInputWrapper {...restProps}>{children}</OrigninInputWrapper>;
};
Dashboard.OrigninInput = function DashboardOrigninInput({ ...restProps }) {
   return <OrigninInput {...restProps} />;
};

Dashboard.InputTwo = function DashboardInputTwo({ children, ...restProps }) {
   return <InputTwo {...restProps}>{children}</InputTwo>;
};
Dashboard.DestinationLabel = function DashboardDestinationLabel({
   children,
   ...restProps
}) {
   return <DestinationLabel {...restProps}>{children}</DestinationLabel>;
};
Dashboard.DestinationInputWrapper = function DashboardDestinationInputWrapper({
   children,
   ...restProps
}) {
   return (
      <DestinationInputWrapper {...restProps}>
         {children}
      </DestinationInputWrapper>
   );
};
Dashboard.DestinationInput = function DashboardDestinationInput({
   ...restProps
}) {
   return <DestinationInput {...restProps} />;
};
Dashboard.InputLabel = function DashboardInputLabel({
   children,
   ...restProps
}) {
   return <InputLabel {...restProps}>{children}</InputLabel>;
};
Dashboard.DateWrapper = function DashboardDateWrapper({
   children,
   ...restProps
}) {
   return <DateWrapper {...restProps}>{children}</DateWrapper>;
};
Dashboard.DateLabel = function DashboardDateLabel({ children, ...restProps }) {
   return <DateLabel {...restProps}>{children}</DateLabel>;
};
// Dashboard.DateSelector = function DashboardDateSelector({
//    children,
//    ...restProps
// }) {
//    return <DateSelector {...restProps}>{children}</DateSelector>;
// };
Dashboard.Passengers = function DashboardPassengers({
   children,
   ...restProps
}) {
   return <Passengers {...restProps}>{children}</Passengers>;
};

Dashboard.InputThree = function DashboardInputThree({
   children,
   ...restProps
}) {
   return <InputThree {...restProps}>{children}</InputThree>;
};
Dashboard.InputFour = function DashboardInputFour({ children, ...restProps }) {
   return <InputFour {...restProps}>{children}</InputFour>;
};
Dashboard.InputFive = function DashboardInputFive({ children, ...restProps }) {
   return <InputFive {...restProps}>{children}</InputFive>;
};
Dashboard.BiIconWrapper = function DashboardBiIconWrapper({
   children,
   ...restProps
}) {
   return <BiIconWrapper {...restProps}>{children}</BiIconWrapper>;
};
Dashboard.BiIcon = function DashboardBiIcon({ ...restProps }) {
   return <BiIcon {...restProps} />;
};
Dashboard.MainHeaderSection = function DashboardMainHeaderSection({
   children,
   ...restProps
}) {
   return <MainHeaderSection {...restProps}>{children}</MainHeaderSection>;
};
Dashboard.HeaderSection = function DashboardHeaderSection({
   children,
   ...restProps
}) {
   return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
Dashboard.EditIcon = function DashboardEditIcon({ ...restProps }) {
   return <EditIcon {...restProps} />;
};

// -----------------------------------
// -----------------------------------
// TODO: AREA THREE
// -----------------------------------
Dashboard.AreaThree = function DashboardAreaThree({ children, ...restProps }) {
   return <AreaThree {...restProps}>{children}</AreaThree>;
};
Dashboard.AreaThreeTitle = function DashboardAreaThreeTitle({
   children,
   ...restProps
}) {
   return <AreaThreeTitle {...restProps}>{children}</AreaThreeTitle>;
};
Dashboard.TableHeader = function DashboardTableHeader({
   children,
   ...restProps
}) {
   return <TableHeader {...restProps}>{children}</TableHeader>;
};
Dashboard.TableTitleWrapper = function DashboardTableTitleWrapper({
   children,
   ...restProps
}) {
   return <TableTitleWrapper {...restProps}>{children}</TableTitleWrapper>;
};
Dashboard.TableTitle = function DashboardTableTitle({
   children,
   ...restProps
}) {
   return <TableTitle {...restProps}>{children}</TableTitle>;
};

Dashboard.TableRow = function DashboardTableRow({ children, ...restProps }) {
   return <TableRow {...restProps}>{children}</TableRow>;
};
Dashboard.RowItemWrapper = function DashboardRowItemWrapper({
   children,
   ...restProps
}) {
   return <RowItemWrapper {...restProps}>{children}</RowItemWrapper>;
};
Dashboard.RowText = function DashboardRowText({ children, ...restProps }) {
   return <RowText {...restProps}>{children}</RowText>;
};

Dashboard.TableFooter = function DashboardTableFooter({
   children,
   ...restProps
}) {
   return <TableFooter {...restProps}>{children}</TableFooter>;
};
Dashboard.FooterContent = function DashboardFooterContent({
   children,
   ...restProps
}) {
   return <FooterContent {...restProps}>{children}</FooterContent>;
};
Dashboard.FooterTextWrapper = function DashboardFooterTextWrapper({
   children,
   ...restProps
}) {
   return <FooterTextWrapper {...restProps}>{children}</FooterTextWrapper>;
};

Dashboard.FooterLabel = function DashboardFooterLabel({
   children,
   ...restProps
}) {
   return <FooterLabel {...restProps}>{children}</FooterLabel>;
};

Dashboard.FooterNumberIconWrapper = function DashboardFooterNumberIconWrapper({
   children,
   ...restProps
}) {
   return (
      <FooterNumberIconWrapper {...restProps}>
         {children}
      </FooterNumberIconWrapper>
   );
};
Dashboard.FooterNumberIcon = function DashboardFooterNumberIcon({
   children,
   ...restProps
}) {
   return <FooterNumberIcon {...restProps}>{children}</FooterNumberIcon>;
};
Dashboard.FooterNumber = function DashboardFooterNumber({
   children,
   ...restProps
}) {
   return <FooterNumber {...restProps}>{children}</FooterNumber>;
};
Dashboard.LeftArrow = function DashboardLeftArrow({ ...restProps }) {
   return <LeftArrow {...restProps} />;
};
Dashboard.RightArrow = function DashboardRightArrow({ ...restProps }) {
   return <RightArrow {...restProps} />;
};

// -----------------------------------
// -----------------------------------
// TODO: AREA FOUR
// -----------------------------------
Dashboard.Form = function DashboardForm({ children, ...restProps }) {
   return <Form {...restProps}>{children}</Form>;
};
Dashboard.AreaFour = function DashboardAreaFour({ children, ...restProps }) {
   return <AreaFour {...restProps}>{children}</AreaFour>;
};
Dashboard.EmojiHand = function DashboardEmojiHand({ children, ...restProps }) {
   return <EmojiHand {...restProps}>{children}</EmojiHand>;
};
Dashboard.BtnRow = function DashboardBtnRow({ children, ...restProps }) {
   return <BtnRow {...restProps}>{children}</BtnRow>;
};
Dashboard.ProceedBtn = function DashboardProceedBtn({
   children,
   ...restProps
}) {
   return <ProceedBtn {...restProps}>{children}</ProceedBtn>;
};
