import React from "react";
import {
   BgImage,
   BgImageWrapper,
   BusImage,
   CheckboxLabel,
   Container,
   FacebookSocialIcon,
   Form,
   FormWrapper,
   SocialIconWrapper,
   Holder,
   Image,
   Info,
   Inner,
   Input,
   InputLabel,
   InputWrapper,
   Left,
   RegisterButton,
   Right,
   Row,
   SecondaryRegisterButton,
   Section,
   SocialIcon,
   SocialRow,
   SocialText,
   Title,
   TopRow,
   FBSocialIconWrapper,
   BtnLink,
} from "./login.styled";

export default function Login({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Login.Container = function LoginContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
Login.FormWrapper = function LoginFormWrapper({ children, ...restProps }) {
   return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
Login.Form = function LoginForm({ children, ...restProps }) {
   return <Form {...restProps}>{children}</Form>;
};
Login.Left = function LoginLeft({ children, ...restProps }) {
   return <Left {...restProps}>{children}</Left>;
};
Login.Right = function LoginRight({ children, ...restProps }) {
   return <Right {...restProps}>{children}</Right>;
};
Login.Title = function LoginTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};
Login.Info = function LoginInfo({ children, ...restProps }) {
   return <Info {...restProps}>{children}</Info>;
};

Login.InputWrapper = function LoginInputWrapper({ children, ...restProps }) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
Login.Row = function LoginRow({ children, ...restProps }) {
   return <Row {...restProps}>{children}</Row>;
};
Login.TopRow = function LoginTopRow({ children, ...restProps }) {
   return <TopRow {...restProps}>{children}</TopRow>;
};
Login.SocialRow = function LoginSocialRow({ children, ...restProps }) {
   return <SocialRow {...restProps}>{children}</SocialRow>;
};
Login.Input = function LoginInput({ ...restProps }) {
   return <Input {...restProps} />;
};
Login.InputLabel = function LoginInputLabel({ children, ...restProps }) {
   return <InputLabel {...restProps}>{children}</InputLabel>;
};
Login.SocialText = function LoginSocialText({ children, ...restProps }) {
   return <SocialText {...restProps}>{children}</SocialText>;
};
Login.CheckboxLabel = function LoginCheckboxLabel({ children, ...restProps }) {
   return <CheckboxLabel {...restProps}>{children}</CheckboxLabel>;
};
Login.Inner = function LoginInner({ children, ...restProps }) {
   return <Inner {...restProps}>{children}</Inner>;
};
Login.Holder = function LoginHolder({ children, ...restProps }) {
   return <Holder {...restProps}>{children}</Holder>;
};
Login.RegisterButton = function LoginRegisterButton({
   children,
   ...restProps
}) {
   return <RegisterButton {...restProps}>{children}</RegisterButton>;
};
Login.BtnLink = function LoginBtnLink({ children, ...restProps }) {
   return <BtnLink {...restProps}>{children}</BtnLink>;
};

Login.SecondaryRegisterButton = function LoginSecondaryRegisterButton({
   children,
   ...restProps
}) {
   return (
      <SecondaryRegisterButton {...restProps}>
         {children}
      </SecondaryRegisterButton>
   );
};
Login.Image = function LoginImage({ children, ...restProps }) {
   return <Image {...restProps} />;
};
Login.SocialIconWrapper = function LoginSocialIconWrapper({
   children,
   ...restProps
}) {
   return <SocialIconWrapper {...restProps}>{children}</SocialIconWrapper>;
};
Login.FBSocialIconWrapper = function LoginFBSocialIconWrapper({
   children,
   ...restProps
}) {
   return <FBSocialIconWrapper {...restProps}>{children}</FBSocialIconWrapper>;
};
Login.SocialIcon = function LoginSocialIcon({ ...restProps }) {
   return <SocialIcon {...restProps} />;
};
Login.FacebookSocialIcon = function LoginFacebookSocialIcon({
   children,
   ...restProps
}) {
   return <FacebookSocialIcon {...restProps} />;
};

Login.BgImageWrapper = function LoginBgImageWrapper({
   children,
   ...restProps
}) {
   return <BgImageWrapper {...restProps}>{children}</BgImageWrapper>;
};
Login.BusImage = function LoginBusImage({ children, ...restProps }) {
   return <BusImage {...restProps} />;
};
Login.BgImage = function LoginBgImage({ children, ...restProps }) {
   return <BgImage {...restProps} />;
};
