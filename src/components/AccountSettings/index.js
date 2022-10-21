import React from "react";
import {
   Col,
   ColTitle,
   Container,
   Form,
   FormWrapper,
   Input,
   InputWrapper,
   Label,
   NameWrapper,
   SaveBtn,
   Section,
   Wrapper,
} from "./account.styled";

export default function Account({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Account.Container = function AccountContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
Account.Col = function AccountCol({ children, ...restProps }) {
   return <Col {...restProps}>{children}</Col>;
};
Account.ColTitle = function AccountColTitle({ children, ...restProps }) {
   return <ColTitle {...restProps}>{children}</ColTitle>;
};

Account.Form = function AccountForm({ children, ...restProps }) {
   return <Form {...restProps}>{children}</Form>;
};
Account.FormWrapper = function AccountFormWrapper({ children, ...restProps }) {
   return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
Account.Wrapper = function AccountWrapper({ children, ...restProps }) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
};
Account.NameWrapper = function AccountNameWrapper({ children, ...restProps }) {
   return <NameWrapper {...restProps}>{children}</NameWrapper>;
};
Account.Label = function AccountLabel({ children, ...restProps }) {
   return <Label {...restProps}>{children}</Label>;
};
Account.InputWrapper = function AccountInputWrapper({
   children,
   ...restProps
}) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
Account.Input = function AccountInput({ children, ...restProps }) {
   return <Input {...restProps}>{children}</Input>;
};
Account.SaveBtn = function AccountSaveBtn({ children, ...restProps }) {
   return <SaveBtn {...restProps}>{children}</SaveBtn>;
};
