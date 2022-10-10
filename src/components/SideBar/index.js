import React from "react";
import {
   HeaderIcon,
   HeaderIconWapper,
   HeaderSection,
   HeaderTitle,
   Image,
   ItemLabel,
   LabelNumber,
   Line,
   LogoutSection,
   LogoutText,
   MenuIcon,
   MenuIconWapper,
   // MenuItem,
   MenuItemLink,
   MenuSection,
   NotifyNumber,
   Number,
   NumberWrapper,
   OptionsLable,
   SectionHeader,
   SectionIcon,
   SectionIconWrapper,
   SectionTitle,
   SideBar,
   SubMenu,
   SubMenuItem,
   SubMenuOptions,
   UpdownIcon,
   UpdownIconWapper,
   UserEmail,
   UserImage,
   UserLabels,
   UserName,
   UserSection,
   Wrapper,
} from "./sidebar.styled";

export default function Sidebar({ children, ...restProps }) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
}

Sidebar.SideBar = function SidebarSideBar({ children, ...restProps }) {
   return <SideBar {...restProps}>{children}</SideBar>;
};

// --------------- Side Bar Header Section ------------------ //
Sidebar.HeaderSection = function SidebarHeaderSection({
   children,
   ...restProps
}) {
   return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
Sidebar.HeaderTitle = function SidebarHeaderTitle({ children, ...restProps }) {
   return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
};
Sidebar.HeaderIconWapper = function SidebarHeaderIconWapper({
   children,
   ...restProps
}) {
   return <HeaderIconWapper {...restProps}>{children}</HeaderIconWapper>;
};
Sidebar.HeaderIcon = function SidebarHeaderIcon({ ...restProps }) {
   return <HeaderIcon {...restProps} />;
};

// --------------- Side Bar User Section ------------------ //
Sidebar.UserSection = function SidebarUserSection({ children, ...restProps }) {
   return <UserSection {...restProps}>{children}</UserSection>;
};
Sidebar.UserImage = function SidebarUserImage({ children, ...restProps }) {
   return <UserImage {...restProps}>{children}</UserImage>;
};
Sidebar.Image = function SidebarImage({ ...restProps }) {
   return <Image {...restProps} />;
};
Sidebar.NotifyNumber = function SidebarNotifyNumber({
   children,
   ...restProps
}) {
   return <NotifyNumber {...restProps}>{children}</NotifyNumber>;
};
Sidebar.Number = function SidebarNumber({ children, ...restProps }) {
   return <Number {...restProps}>{children}</Number>;
};
Sidebar.UserLabels = function SidebarUserLabels({ children, ...restProps }) {
   return <UserLabels {...restProps}>{children}</UserLabels>;
};
Sidebar.UserName = function SidebarUserName({ children, ...restProps }) {
   return <UserName {...restProps}>{children}</UserName>;
};
Sidebar.UserEmail = function SidebarUserEmail({ children, ...restProps }) {
   return <UserEmail {...restProps}>{children}</UserEmail>;
};
Sidebar.Line = function SidebarLine({ children, ...restProps }) {
   return <Line {...restProps}>{children}</Line>;
};
Sidebar.UpdownIconWapper = function SidebarUpdownIconWapper({
   children,
   ...restProps
}) {
   return <UpdownIconWapper {...restProps}>{children}</UpdownIconWapper>;
};
Sidebar.UpdownIcon = function SidebarUpdownIcon({ ...restProps }) {
   return <UpdownIcon {...restProps} />;
};

// --------------- Side Bar Menu Section ------------------ //
Sidebar.SectionHeader = function SidebarSectionHeader({
   children,
   ...restProps
}) {
   return <SectionHeader {...restProps}>{children}</SectionHeader>;
};
Sidebar.SectionTitle = function SidebarSectionTitle({
   children,
   ...restProps
}) {
   return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

Sidebar.SectionIconWrapper = function SidebarSectionIconWrapper({
   children,
   ...restProps
}) {
   return <SectionIconWrapper {...restProps}>{children}</SectionIconWrapper>;
};
Sidebar.SectionIcon = function SidebarSectionIcon({ ...restProps }) {
   return <SectionIcon {...restProps} />;
};
Sidebar.MenuSection = function SidebarMenuSection({ children, ...restProps }) {
   return <MenuSection {...restProps}>{children}</MenuSection>;
};
// Sidebar.MenuItem = function SidebarMenuItem({ children, ...restProps }) {
//    return <MenuItem {...restProps}>{children}</MenuItem>;
// };
Sidebar.MenuItemLink = function SidebarMenuItemLink({
   children,
   ...restProps
}) {
   return <MenuItemLink {...restProps}>{children}</MenuItemLink>;
};
Sidebar.ItemLabel = function SidebarItemLabel({ children, ...restProps }) {
   return <ItemLabel {...restProps}>{children}</ItemLabel>;
};
Sidebar.LabelNumber = function SidebarLabelNumber({ children, ...restProps }) {
   return <LabelNumber {...restProps}>{children}</LabelNumber>;
};
Sidebar.NumberWrapper = function SidebarNumberWrapper({
   children,
   ...restProps
}) {
   return <NumberWrapper {...restProps}>{children}</NumberWrapper>;
};
Sidebar.MenuIconWapper = function SidebarMenuIconWapper({
   children,
   ...restProps
}) {
   return <MenuIconWapper {...restProps}>{children}</MenuIconWapper>;
};
Sidebar.MenuIcon = function SidebarMenuIcon({ children, ...restProps }) {
   return <MenuIcon {...restProps}>{children}</MenuIcon>;
};
Sidebar.SubMenu = function SidebarSubMenu({ children, ...restProps }) {
   return <SubMenu {...restProps}>{children}</SubMenu>;
};
Sidebar.SubMenuItem = function SidebarSubMenuItem({ children, ...restProps }) {
   return <SubMenuItem {...restProps}>{children}</SubMenuItem>;
};
Sidebar.SubMenuOptions = function SidebarSubMenuOptions({
   children,
   ...restProps
}) {
   return <SubMenuOptions {...restProps}>{children}</SubMenuOptions>;
};
Sidebar.OptionsLable = function SidebarOptionsLable({
   children,
   ...restProps
}) {
   return <OptionsLable {...restProps}>{children}</OptionsLable>;
};

// LOGOUT
Sidebar.LogoutSection = function SidebarLogoutSection({
   children,
   ...restProps
}) {
   return <LogoutSection {...restProps}>{children}</LogoutSection>;
};
Sidebar.LogoutText = function SidebarLogoutText({ children, ...restProps }) {
   return <LogoutText {...restProps}>{children}</LogoutText>;
};
