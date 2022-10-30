import React from "react";
import {
  Container,
  H2,
  Image,
  ImageContainer,
  Location,
  Overlay,
  Section,
  Title,
  Wrapper,
} from "./TravelledRoutes.styled";

export default function TravelledRoutes({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

TravelledRoutes.Wrapper = function TravelledRoutesWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
TravelledRoutes.Container = function TravelledRoutesContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};
TravelledRoutes.Title = function TravelledRoutesTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

TravelledRoutes.ImageContainer = function TravelledRoutesImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

TravelledRoutes.Image = function TravelledRoutesImage({ ...restProps }) {
  return <Image {...restProps} />;
};
TravelledRoutes.Overlay = function TravelledRoutesOverlay({
  children,
  ...restProps
}) {
  return <Overlay {...restProps}>{children}</Overlay>;
};
TravelledRoutes.Location = function TravelledRoutesLocation({
  children,
  ...restProps
}) {
  return <Location {...restProps}>{children}</Location>;
};
TravelledRoutes.H2 = function TravelledRoutesH2({ children, ...restProps }) {
  return <H2 {...restProps}>{children}</H2>;
};
