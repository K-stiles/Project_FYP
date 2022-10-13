import React from "react";
import {
   BellIcon,
   BellWrapper,
   LinkText,
   NotifySection,
   ProfileImage,
   ProfileWrapper,
   RouteLink,
   RouteLinks,
   SearchIcon,
   SearchIconWrapper,
   SearchInput,
   SearchWrapper,
   Section,
   TopRegion,
} from "./topnav.styled";

export default function TopNavDashboard({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}

// ------------------------------
// ------------------------------
// TODO: Dashboard Top Region
// ------------------------------
TopNavDashboard.TopRegion = function TopNavDashboardTopRegion({
   children,
   ...restProps
}) {
   return <TopRegion {...restProps}>{children}</TopRegion>;
};
TopNavDashboard.SearchWrapper = function TopNavDashboardSearchWrapper({
   children,
   ...restProps
}) {
   return <SearchWrapper {...restProps}>{children}</SearchWrapper>;
};
TopNavDashboard.SearchInput = function TopNavDashboardSearchInput({
   children,
   ...restProps
}) {
   return <SearchInput {...restProps}>{children}</SearchInput>;
};
TopNavDashboard.SearchIconWrapper = function TopNavDashboardSearchIconWrapper({
   children,
   ...restProps
}) {
   return <SearchIconWrapper {...restProps}>{children}</SearchIconWrapper>;
};
TopNavDashboard.SearchIcon = function TopNavDashboardSearchIcon({
   children,
   ...restProps
}) {
   return <SearchIcon {...restProps}>{children}</SearchIcon>;
};
TopNavDashboard.RouteLinks = function TopNavDashboardRouteLinks({
   children,
   ...restProps
}) {
   return <RouteLinks {...restProps}>{children}</RouteLinks>;
};
TopNavDashboard.NotifySection = function TopNavDashboardNotifySection({
   children,
   ...restProps
}) {
   return <NotifySection {...restProps}>{children}</NotifySection>;
};

TopNavDashboard.RouteLink = function TopNavDashboardRouteLink({
   children,
   ...restProps
}) {
   return <RouteLink {...restProps}>{children}</RouteLink>;
};
TopNavDashboard.LinkText = function TopNavDashboardLinkText({
   children,
   ...restProps
}) {
   return <LinkText {...restProps}>{children}</LinkText>;
};
TopNavDashboard.ProfileWrapper = function TopNavDashboardProfileWrapper({
   children,
   ...restProps
}) {
   return <ProfileWrapper {...restProps}>{children}</ProfileWrapper>;
};
TopNavDashboard.BellWrapper = function TopNavDashboardBellWrapper({
   children,
   ...restProps
}) {
   return <BellWrapper {...restProps}>{children}</BellWrapper>;
};
TopNavDashboard.BellIcon = function TopNavDashboardBellIcon({ ...restProps }) {
   return <BellIcon {...restProps} />;
};
TopNavDashboard.ProfileImage = function TopNavDashboardProfileImage({
   ...restProps
}) {
   return <ProfileImage {...restProps} />;
};
