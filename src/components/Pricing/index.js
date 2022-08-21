import React from "react";
import {
  AbsoluteBus,
  Bus,
  Card,
  CardButton,
  CardDistance,
  CardLabel,
  CardPrice,
  CardSubTitle,
  CardTitle,
  Container,
  Image,
  LineDivider,
  Row,
  Section,
  SideDescription,
  SideHeader,
  Social,
  SubTitle,
  Title,
  Wrapper,
} from "./Pricing.styled";

export default function Pricing({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

Pricing.Wrapper = function PricingWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Pricing.Container = function PricingContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Pricing.Card = function PricingCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Pricing.Title = function PricingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Pricing.SubTitle = function PricingSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Pricing.SideHeader = function PricingSideHeader({ children, ...restProps }) {
  return <SideHeader {...restProps}>{children}</SideHeader>;
};
Pricing.SideDescription = function PricingSideDescription({
  children,
  ...restProps
}) {
  return <SideDescription {...restProps}>{children}</SideDescription>;
};

Pricing.Row = function PricingRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Pricing.Image = function PricingImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Pricing.Bus = function PricingBus({ ...restProps }) {
  return <Bus {...restProps} />;
};

Pricing.CardTitle = function PricingCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};
Pricing.CardSubTitle = function PricingCardSubTitle({
  children,
  ...restProps
}) {
  return <CardSubTitle {...restProps}>{children}</CardSubTitle>;
};
Pricing.CardLabel = function PricingCardLabel({ children, ...restProps }) {
  return <CardLabel {...restProps}>{children}</CardLabel>;
};
Pricing.Social = function PricingSocial({ children, ...restProps }) {
  return <Social {...restProps}>{children}</Social>;
};
Pricing.LineDivider = function PricingLineDivider({ ...restProps }) {
  return <LineDivider {...restProps} />;
};
Pricing.AbsoluteBus = function PricingAbsoluteBus({ ...restProps }) {
  return <AbsoluteBus {...restProps} />;
};

Pricing.CardPrice = function PricingCardPrice({ children, ...restProps }) {
  return <CardPrice {...restProps}>{children}</CardPrice>;
};
Pricing.CardDistance = function PricingCardDistance({
  children,
  ...restProps
}) {
  return <CardDistance {...restProps}>{children}</CardDistance>;
};
Pricing.CardButton = function PricingCardButton({ children, ...restProps }) {
  return <CardButton {...restProps}>{children}</CardButton>;
};
