import React from "react";

import {
  Container,
  Description,
  Hand,
  HandWrapper,
  Image,
  Info,
  Section,
  Title,
  Wrapper,
} from "./banner.styled";

export default function Banner({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

Banner.Wrapper = function BannerWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Banner.Container = function BannerContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Banner.Info = function BannerInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Banner.Image = function BannerImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Banner.Hand = function BannerHand({ ...restProps }) {
  return <Hand {...restProps} />;
};
Banner.HandWrapper = function BannerHandWrapper({ children, ...restProps }) {
  return <HandWrapper {...restProps}>{children}</HandWrapper>;
};
Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Banner.Description = function BannerDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
