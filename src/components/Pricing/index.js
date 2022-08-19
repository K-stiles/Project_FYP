import React from "react";
import {
  Card,
  Container,
  Image,
  Row,
  Section,
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
Pricing.Row = function PricingRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Pricing.Image = function PricingImage({ ...restProps }) {
  return <Image {...restProps} />;
};
