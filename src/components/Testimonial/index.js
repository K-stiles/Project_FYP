import React from "react";
import {
  BottomQuote,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Container,
  Developer,
  DevRole,
  Github,
  ImageContainer,
  Section,
  SliderNavigator,
  SNavIcon,
  SocialLinks,
  SubTitle,
  Title,
  TopQuote,
  TopWrapper,
  Twitter,
  Wrapper,
  Youtube,
} from "./Testimonial.styled";

export default function Testimonial({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

Testimonial.Wrapper = function TestimonialWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Testimonial.TopWrapper = function TestimonialTopWrapper({
  children,
  ...restProps
}) {
  return <TopWrapper {...restProps}>{children}</TopWrapper>;
};
Testimonial.Container = function TestimonialContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};
Testimonial.Card = function TestimonialCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
Testimonial.CardContent = function TestimonialCardContent({
  children,
  ...restProps
}) {
  return <CardContent {...restProps}>{children}</CardContent>;
};
Testimonial.CardDescription = function TestimonialCardDescription({
  children,
  ...restProps
}) {
  return <CardDescription {...restProps}>{children}</CardDescription>;
};
Testimonial.Title = function TestimonialTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Testimonial.SubTitle = function TestimonialSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Testimonial.CardTitle = function TestimonialCardTitle({
  children,
  ...restProps
}) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};
Testimonial.DevRole = function TestimonialDevRole({ children, ...restProps }) {
  return <DevRole {...restProps}>{children}</DevRole>;
};

Testimonial.ImageContainer = function TestimonialImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
Testimonial.SocialLinks = function TestimonialSocialLinks({
  children,
  ...restProps
}) {
  return <SocialLinks {...restProps}>{children}</SocialLinks>;
};

Testimonial.TopQuote = function TestimonialTopQuote({ ...restProps }) {
  return <TopQuote {...restProps} />;
};
Testimonial.BottomQuote = function TestimonialBottomQuote({ ...restProps }) {
  return <BottomQuote {...restProps} />;
};
Testimonial.Youtube = function TestimonialYoutube({ ...restProps }) {
  return <Youtube {...restProps} />;
};
Testimonial.Github = function TestimonialGithub({ ...restProps }) {
  return <Github {...restProps} />;
};
Testimonial.Twitter = function TestimonialTwitter({ ...restProps }) {
  return <Twitter {...restProps} />;
};
Testimonial.Developer = function TestimonialDeveloper({ ...restProps }) {
  return <Developer {...restProps} />;
};
Testimonial.SliderNavigator = function TestimonialSliderNavigator({
  children,
  ...restProps
}) {
  return <SliderNavigator {...restProps}>{children}</SliderNavigator>;
};
Testimonial.SNavIcon = function TestimonialSNavIcon({ ...restProps }) {
  return <SNavIcon {...restProps} />;
};
