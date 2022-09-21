import React from "react";
import {
  Col,
  Container,
  Header,
  Inner,
  Link,
  Section,
  Socials,
  SocialsWrapper,
  SubFooter,
  SubLeft,
  SubRight,
  Text,
} from "./Footer.styled";

export default function Footer({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}
Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Footer.SubFooter = function FooterSubFooter({ children, ...restProps }) {
  return <SubFooter {...restProps}>{children}</SubFooter>;
};
Footer.SubLeft = function FooterSubLeft({ children, ...restProps }) {
  return <SubLeft {...restProps}>{children}</SubLeft>;
};
Footer.SubRight = function FooterSubRight({ children, ...restProps }) {
  return <SubRight {...restProps}>{children}</SubRight>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Col = function FooterCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
Footer.Inner = function FooterInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Footer.Header = function FooterHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Footer.SocialsWrapper = function FooterSocialsWrapper({
  children,
  ...restProps
}) {
  return <SocialsWrapper {...restProps}>{children}</SocialsWrapper>;
};
Footer.Socials = function FooterSocials({ ...restProps }) {
  return <Socials {...restProps} />;
};
