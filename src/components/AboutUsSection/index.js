import React from "react";
import {
  Container,
  Description,
  Header,
  Image,
  MainTitle,
  Section,
  SubTitle,
  Wrapper,
} from "./About.styled";

export default function About({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}
About.Wrapper = function AboutWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

About.Container = function AboutContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
About.Image = function AboutImage({ ...restProps }) {
  return <Image {...restProps} />;
};
About.Header = function AboutHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
About.MainTitle = function AboutMainTitle({ children, ...restProps }) {
  return <MainTitle {...restProps}>{children}</MainTitle>;
};
About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
About.Description = function AboutDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
