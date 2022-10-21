import React from "react";
import {
   Container,
   ProfileImg,
   ProfileLogout,
   ProfileName,
   ProfileWrapper,
   Section,
   Wrapper,
} from "./centralProfileHeader.styled";

export default function CentralProfileHeader({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
CentralProfileHeader.Wrapper = function CentralProfileHeaderWrapper({
   children,
   ...restProps
}) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
};
CentralProfileHeader.ProfileName = function CentralProfileHeaderProfileName({
   children,
   ...restProps
}) {
   return <ProfileName {...restProps}>{children}</ProfileName>;
};
CentralProfileHeader.ProfileLogout =
   function CentralProfileHeaderProfileLogout({ children, ...restProps }) {
      return <ProfileLogout {...restProps}>{children}</ProfileLogout>;
   };
