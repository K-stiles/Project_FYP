import React from "react";
import {
   Container,
   ProfileImg,
   ProfileName,
   ProfileWrapper,
   Section,
} from "./profileNavbar.styled";

export default function ProfileNavbar({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
ProfileNavbar.Container = function ProfileNavbarContainer({
   children,
   ...restProps
}) {
   return <Container {...restProps}>{children}</Container>;
};
ProfileNavbar.ProfileWrapper = function ProfileNavbarProfileWrapper({
   children,
   ...restProps
}) {
   return <ProfileWrapper {...restProps}>{children}</ProfileWrapper>;
};
ProfileNavbar.ProfileImg = function ProfileNavbarProfileImg({ ...restProps }) {
   return <ProfileImg {...restProps} />;
};

ProfileNavbar.ProfileName = function ProfileNavbarProfileName({
   children,
   ...restProps
}) {
   return <ProfileName {...restProps}>{children}</ProfileName>;
};
