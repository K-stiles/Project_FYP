import React from "react";
import {
   Container,
   Label,
   LabelIcon,
   LabelRow,
   Labels,
   LogoutRow,
   Section,
} from "./profileSidebar.styled";

export default function ProfileSidebar({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
ProfileSidebar.Container = function ProfileSidebarContainer({
   children,
   ...restProps
}) {
   return <Container {...restProps}>{children}</Container>;
};
ProfileSidebar.LabelRow = function ProfileSidebarLabelRow({
   children,
   ...restProps
}) {
   return <LabelRow {...restProps}>{children}</LabelRow>;
};
ProfileSidebar.Label = function ProfileSidebarLabel({
   children,
   ...restProps
}) {
   return <Label {...restProps}>{children}</Label>;
};
ProfileSidebar.Labels = function ProfileSidebarLabels({
   children,
   ...restProps
}) {
   return <Labels {...restProps}>{children}</Labels>;
};
ProfileSidebar.LabelIcon = function ProfileSidebarLabelIcon({ ...restProps }) {
   return <LabelIcon {...restProps} />;
};

ProfileSidebar.LogoutRow = function ProfileSidebarLogoutRow({
   children,
   ...restProps
}) {
   return <LogoutRow {...restProps}>{children}</LogoutRow>;
};
