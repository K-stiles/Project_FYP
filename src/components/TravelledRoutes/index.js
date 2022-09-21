import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  ImageWrapper,
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
