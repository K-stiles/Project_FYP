import React from "react";
import {
   ArrowIcon,
   ArrowLine,
   ArrowWrapper,
   BellIcon,
   BellWrapper,
   CentralRegion,
   CloseIcon,
   CloseWrapper,
   Container,
   Line,
   LinkText,
   MainHeader,
   NotifySection,
   PictureBar,
   ProfileImage,
   ProfileWrapper,
   RouteLink,
   RouteLinks,
   SearchIcon,
   SearchIconWrapper,
   SearchInput,
   SearchWrapper,
   Section,
   SubHeader,
   TopRegion,
   UserImage,
   UserImageWrapper,
   UsersContainer,
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
Dashboard.MainHeader = function DashboardMainHeader({
   children,
   ...restProps
}) {
   return <MainHeader {...restProps}>{children}</MainHeader>;
};

// -------------------
// -------------------
// Dashboard Top Region
// -------------------
Dashboard.TopRegion = function DashboardTopRegion({ children, ...restProps }) {
   return <TopRegion {...restProps}>{children}</TopRegion>;
};
Dashboard.SearchWrapper = function DashboardSearchWrapper({
   children,
   ...restProps
}) {
   return <SearchWrapper {...restProps}>{children}</SearchWrapper>;
};
Dashboard.SearchInput = function DashboardSearchInput({
   children,
   ...restProps
}) {
   return <SearchInput {...restProps}>{children}</SearchInput>;
};
Dashboard.SearchIconWrapper = function DashboardSearchIconWrapper({
   children,
   ...restProps
}) {
   return <SearchIconWrapper {...restProps}>{children}</SearchIconWrapper>;
};
Dashboard.SearchIcon = function DashboardSearchIcon({
   children,
   ...restProps
}) {
   return <SearchIcon {...restProps}>{children}</SearchIcon>;
};
Dashboard.RouteLinks = function DashboardRouteLinks({
   children,
   ...restProps
}) {
   return <RouteLinks {...restProps}>{children}</RouteLinks>;
};
Dashboard.NotifySection = function DashboardNotifySection({
   children,
   ...restProps
}) {
   return <NotifySection {...restProps}>{children}</NotifySection>;
};

Dashboard.RouteLink = function DashboardRouteLink({ children, ...restProps }) {
   return <RouteLink {...restProps}>{children}</RouteLink>;
};
Dashboard.LinkText = function DashboardLinkText({ children, ...restProps }) {
   return <LinkText {...restProps}>{children}</LinkText>;
};
Dashboard.ProfileWrapper = function DashboardProfileWrapper({
   children,
   ...restProps
}) {
   return <ProfileWrapper {...restProps}>{children}</ProfileWrapper>;
};
Dashboard.BellWrapper = function DashboardBellWrapper({
   children,
   ...restProps
}) {
   return <BellWrapper {...restProps}>{children}</BellWrapper>;
};
Dashboard.BellIcon = function DashboardBellIcon({ ...restProps }) {
   return <BellIcon {...restProps} />;
};
Dashboard.ProfileImage = function DashboardProfileImage({ ...restProps }) {
   return <ProfileImage {...restProps} />;
};

// -------------------
// -------------------
// Dashboard Central Region
// -------------------

Dashboard.CentralRegion = function DashboardCentralRegion({
   children,
   ...restProps
}) {
   return <CentralRegion {...restProps}>{children}</CentralRegion>;
};

// -------------------
// -------------------
// Dashboard PictureBar Region
// -------------------
Dashboard.PictureBar = function DashboardPictureBar({
   children,
   ...restProps
}) {
   return <PictureBar {...restProps}>{children}</PictureBar>;
};
Dashboard.CloseWrapper = function DashboardCloseWrapper({
   children,
   ...restProps
}) {
   return <CloseWrapper {...restProps}>{children}</CloseWrapper>;
};
Dashboard.CloseIcon = function DashboardCloseIcon({ children, ...restProps }) {
   return <CloseIcon {...restProps}>{children}</CloseIcon>;
};
Dashboard.Line = function DashboardLine({ children, ...restProps }) {
   return <Line {...restProps}>{children}</Line>;
};
Dashboard.UsersContainer = function DashboardUsersContainer({
   children,
   ...restProps
}) {
   return <UsersContainer {...restProps}>{children}</UsersContainer>;
};
Dashboard.UserImageWrapper = function DashboardUserImageWrapper({
   children,
   ...restProps
}) {
   return <UserImageWrapper {...restProps}>{children}</UserImageWrapper>;
};
Dashboard.UserImage = function DashboardUserImage({ ...restProps }) {
   return <UserImage {...restProps} />;
};

Dashboard.ArrowIcon = function DashboardArrowIcon({ ...restProps }) {
   return <ArrowIcon {...restProps} />;
};
Dashboard.ArrowWrapper = function DashboardArrowWrapper({
   children,
   ...restProps
}) {
   return <ArrowWrapper {...restProps}>{children}</ArrowWrapper>;
};
Dashboard.ArrowLine = function DashboardArrowLine({ children, ...restProps }) {
   return <ArrowLine {...restProps}>{children}</ArrowLine>;
};
