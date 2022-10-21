import React from "react";
import {
   AcceptedCards,
   CardImg,
   CheckoutBtn,
   CheckoutBtnSection,
   Col,
   ColContent,
   Container,
   EditIcon,
   Form,
   FormWrapper,
   HeaderSection,
   Input,
   InputRow,
   InputWrapper,
   Label,
   MainHeader,
   One,
   Section,
   Wrapper,
} from "./payment.styled";

export default function Payment({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Payment.Container = function PaymentContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
Payment.MainHeader = function PaymentMainHeader({ children, ...restProps }) {
   return <MainHeader {...restProps}>{children}</MainHeader>;
};

Payment.HeaderSection = function PaymentHeaderSection({
   children,
   ...restProps
}) {
   return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
Payment.EditIcon = function PaymentEditIcon({ ...restProps }) {
   return <EditIcon {...restProps} />;
};
Payment.Col = function PaymentCol({ children, ...restProps }) {
   return <Col {...restProps}>{children}</Col>;
};
Payment.ColContent = function PaymentColContent({ children, ...restProps }) {
   return <ColContent {...restProps}>{children}</ColContent>;
};
Payment.AcceptedCards = function PaymentAcceptedCards({
   children,
   ...restProps
}) {
   return <AcceptedCards {...restProps}>{children}</AcceptedCards>;
};
Payment.CardImg = function PaymentCardImg({ ...restProps }) {
   return <CardImg {...restProps} />;
};
Payment.CheckoutBtn = function PaymentCheckoutBtn({ children, ...restProps }) {
   return <CheckoutBtn {...restProps}>{children}</CheckoutBtn>;
};
Payment.CheckoutBtnSection = function PaymentCheckoutBtnSection({
   children,
   ...restProps
}) {
   return <CheckoutBtnSection {...restProps}>{children}</CheckoutBtnSection>;
};
Payment.Wrapper = function PaymentWrapper({ children, ...restProps }) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
};
Payment.FormWrapper = function PaymentFormWrapper({ children, ...restProps }) {
   return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
Payment.Form = function PaymentForm({ children, ...restProps }) {
   return <Form {...restProps}>{children}</Form>;
};
Payment.Label = function PaymentLabel({ children, ...restProps }) {
   return <Label {...restProps}>{children}</Label>;
};
Payment.InputWrapper = function PaymentInputWrapper({
   children,
   ...restProps
}) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
Payment.InputRow = function PaymentInputRow({ children, ...restProps }) {
   return <InputRow {...restProps}>{children}</InputRow>;
};
Payment.Input = function PaymentInput({ ...restProps }) {
   return <Input {...restProps} />;
};
Payment.One = function PaymentOne({ children, ...restProps }) {
   return <One {...restProps}>{children}</One>;
};
