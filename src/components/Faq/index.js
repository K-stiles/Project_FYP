import React from "react";
import {
  Accordion,
  AccordionContent,
  Answer,
  Container,
  FaqContainer,
  FaqContent,
  FaqTitle,
  Header,
  Icon,
  Image,
  ImageWrapper,
  Line,
  Question,
  Row,
  Section,
  SubTitle,
  Title,
  Wrapper,
} from "./Faq.styled";

export default function Faq({ children, ...restPops }) {
  return <Section {...restPops}>{children}</Section>;
}

Faq.Title = function FaqTitle({ children, ...restPops }) {
  return <Title {...restPops}>{children}</Title>;
};
Faq.SubTitle = function FaqSubTitle({ children, ...restPops }) {
  return <SubTitle {...restPops}>{children}</SubTitle>;
};
Faq.FaqTitle = function FaqFaqTitle({ children, ...restPops }) {
  return <FaqTitle {...restPops}>{children}</FaqTitle>;
};
Faq.Question = function FaqQuestion({ children, ...restPops }) {
  return <Question {...restPops}>{children}</Question>;
};
Faq.Answer = function FaqAnswer({ children, ...restPops }) {
  return <Answer {...restPops}>{children}</Answer>;
};

Faq.Image = function FaqImage({ ...restPops }) {
  return <Image {...restPops} />;
};
Faq.Icon = function FaqIcon({ ...restPops }) {
  return <Icon {...restPops} />;
};
Faq.Wrapper = function FaqWrapper({ children, ...restPops }) {
  return <Wrapper {...restPops}>{children}</Wrapper>;
};
Faq.Container = function FaqContainer({ children, ...restPops }) {
  return <Container {...restPops}>{children}</Container>;
};
Faq.ImageWrapper = function FaqImageWrapper({ children, ...restPops }) {
  return <ImageWrapper {...restPops}>{children}</ImageWrapper>;
};
Faq.FaqContainer = function FaqFaqContainer({ children, ...restPops }) {
  return <FaqContainer {...restPops}>{children}</FaqContainer>;
};
Faq.Accordion = function FaqAccordion({ children, ...restPops }) {
  return <Accordion {...restPops}>{children}</Accordion>;
};
Faq.AccordionContent = function FaqAccordionContent({ children, ...restPops }) {
  return <AccordionContent {...restPops}>{children}</AccordionContent>;
};
Faq.Header = function FaqHeader({ children, ...restPops }) {
  return <Header {...restPops}>{children}</Header>;
};
Faq.Line = function FaqLine({ children, ...restPops }) {
  return <Line {...restPops}>{children}</Line>;
};
