import React from "react";
import {
  Addressing,
  City,
  Container,
  Email,
  EmailInput,
  Form,
  FormInner,
  FormWrapper,
  Info,
  Inner,
  Input,
  InputWrapper,
  LeftPane,
  Mail,
  MaxTitle,
  MiniTitle,
  MsgBox,
  NameInput,
  Number,
  Phone,
  RightPane,
  Section,
  SubmitButton,
  SubTitle,
  TextareaWrapper,
  Title,
  Town,
  Wrapper,
} from "./Contact.styled";

export default function Contact({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

Contact.Wrapper = function ContactWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Contact.Container = function ContactContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Contact.Inner = function ContactInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Contact.MiniTitle = function ContactMiniTitle({ children, ...restProps }) {
  return <MiniTitle {...restProps}>{children}</MiniTitle>;
};

Contact.LeftPane = function ContactLeftPane({ children, ...restProps }) {
  return <LeftPane {...restProps}>{children}</LeftPane>;
};
Contact.RightPane = function ContactRightPane({ children, ...restProps }) {
  return <RightPane {...restProps}>{children}</RightPane>;
};

Contact.Addressing = function ContactAddressing({ children, ...restProps }) {
  return <Addressing {...restProps}>{children}</Addressing>;
};
Contact.Phone = function ContactPhone({ children, ...restProps }) {
  return <Phone {...restProps}>{children}</Phone>;
};
Contact.Email = function ContactEmail({ children, ...restProps }) {
  return <Email {...restProps}>{children}</Email>;
};

Contact.Info = function ContactInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Contact.MaxTitle = function ContactMaxTitle({ children, ...restProps }) {
  return <MaxTitle {...restProps}>{children}</MaxTitle>;
};
Contact.SubTitle = function ContactSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Contact.Form = function ContactForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
Contact.FormWrapper = function ContactFormWrapper({ children, ...restProps }) {
  return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
Contact.InputWrapper = function ContactInputWrapper({
  children,
  ...restProps
}) {
  return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
Contact.TextareaWrapper = function ContactTextareaWrapper({
  children,
  ...restProps
}) {
  return <TextareaWrapper {...restProps}>{children}</TextareaWrapper>;
};

Contact.Input = function ContactInput({ ...restProps }) {
  return <Input {...restProps} />;
};
Contact.NameInput = function ContactNameInput({ ...restProps }) {
  return <NameInput {...restProps} />;
};
Contact.EmailInput = function ContactEmailInput({ ...restProps }) {
  return <EmailInput {...restProps} />;
};
Contact.MsgBox = function ContactMsgBox({ ...restProps }) {
  return <MsgBox {...restProps} />;
};
Contact.SubmitButton = function ContactSubmitButton({
  children,
  ...restProps
}) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>;
};
