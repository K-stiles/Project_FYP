import React from "react";
import {
   ButtonLink,
   Container,
   Image,
   ImageWrapper,
   Left,
   Point,
   Reason,
   RegisterButton,
   Right,
   Section,
   SubTitle,
   Title,
} from "./JoinUs.styled";

export default function JoinUs({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}

JoinUs.Container = function JoinUsContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
JoinUs.Left = function JoinUsLeft({ children, ...restProps }) {
   return <Left {...restProps}>{children}</Left>;
};
JoinUs.Right = function JoinUsRight({ children, ...restProps }) {
   return <Right {...restProps}>{children}</Right>;
};
JoinUs.Reason = function JoinUsReason({ children, ...restProps }) {
   return <Reason {...restProps}>{children}</Reason>;
};
JoinUs.Title = function JoinUsTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};
JoinUs.SubTitle = function JoinUsSubTitle({ children, ...restProps }) {
   return <SubTitle {...restProps}>{children}</SubTitle>;
};
JoinUs.Point = function JoinUsPoint({ children, ...restProps }) {
   return <Point {...restProps}>{children}</Point>;
};

JoinUs.ImageWrapper = function JoinUsImageWrapper({ children, ...restProps }) {
   return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};
JoinUs.Image = function JoinUsImage({ ...restProps }) {
   return <Image {...restProps} />;
};
JoinUs.RegisterButton = function JoinUsRegisterButton({
   children,
   ...restProps
}) {
   return <RegisterButton {...restProps}>{children}</RegisterButton>;
};
JoinUs.ButtonLink = function JoinUsButtonLink({ children, ...restProps }) {
   return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
