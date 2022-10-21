import React from "react";
import {
   BellIcon,
   BellWrapper,
   Container,
   HeaderIcon,
   HeaderIconWapper,
   HeaderSection,
   HeaderTitle,
   LinkText,
   NavBar,
   NotifySection,
   ProfileImage,
   ProfileWrapper,
   RouteLink,
   RouteLinks,
   Section,
   TopRegion,
   TSection,
   Wrapper,
} from "./nav.styled";

export default function DNavbar({ children, ...restProps }) {
   return <NavBar {...restProps}>{children}</NavBar>;
}
DNavbar.Wrapper = function DNavbarWrapper({ children, ...restProps }) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
};
DNavbar.Section = function DNavbarSection({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
};
DNavbar.Container = function DNavbarContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};

// --------------- DNavbar Header Section ------------------ //
DNavbar.HeaderSection = function DNavbarHeaderSection({
   children,
   ...restProps
}) {
   return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
DNavbar.HeaderTitle = function DNavbarHeaderTitle({ children, ...restProps }) {
   return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};
DNavbar.HeaderIconWapper = function DNavbarHeaderIconWapper({
   children,
   ...restProps
}) {
   return <HeaderIconWapper {...restProps}>{children}</HeaderIconWapper>;
};
DNavbar.HeaderIcon = function DNavbarHeaderIcon({ ...restProps }) {
   return <HeaderIcon {...restProps} />;
};

// ------------------------------
// ------------------------------
// TODO: Dashboard Top Region
// ------------------------------
DNavbar.TopNavDashboard = function DNavbarTopNavDashboard({
   children,
   ...restProps
}) {
   return <TSection {...restProps}>{children}</TSection>;
};
DNavbar.TopRegion = function DNavbarTopRegion({ children, ...restProps }) {
   return <TopRegion {...restProps}>{children}</TopRegion>;
};

DNavbar.RouteLinks = function DNavbarRouteLinks({ children, ...restProps }) {
   return <RouteLinks {...restProps}>{children}</RouteLinks>;
};
DNavbar.NotifySection = function DNavbarNotifySection({
   children,
   ...restProps
}) {
   return <NotifySection {...restProps}>{children}</NotifySection>;
};

DNavbar.RouteLink = function DNavbarRouteLink({ children, ...restProps }) {
   return <RouteLink {...restProps}>{children}</RouteLink>;
};
DNavbar.LinkText = function DNavbarLinkText({ children, ...restProps }) {
   return <LinkText {...restProps}>{children}</LinkText>;
};
DNavbar.ProfileWrapper = function DNavbarProfileWrapper({
   children,
   ...restProps
}) {
   return <ProfileWrapper {...restProps}>{children}</ProfileWrapper>;
};
DNavbar.BellWrapper = function DNavbarBellWrapper({ children, ...restProps }) {
   return <BellWrapper {...restProps}>{children}</BellWrapper>;
};
DNavbar.BellIcon = function DNavbarBellIcon({ ...restProps }) {
   return <BellIcon {...restProps} />;
};
DNavbar.ProfileImage = function DNavbarProfileImage({ ...restProps }) {
   return <ProfileImage {...restProps} />;
};
