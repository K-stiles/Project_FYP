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
   GoogleSocialIcon,
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
} from "./signup.styled";

export default function Signup({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Signup.Container = function SignupContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
Signup.FormWrapper = function SignupFormWrapper({ children, ...restProps }) {
   return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
Signup.Form = function SignupForm({ children, ...restProps }) {
   return <Form {...restProps}>{children}</Form>;
};
Signup.Left = function SignupLeft({ children, ...restProps }) {
   return <Left {...restProps}>{children}</Left>;
};
Signup.Right = function SignupRight({ children, ...restProps }) {
   return <Right {...restProps}>{children}</Right>;
};
Signup.Title = function SignupTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};
Signup.Info = function SignupInfo({ children, ...restProps }) {
   return <Info {...restProps}>{children}</Info>;
};

Signup.InputWrapper = function SignupInputWrapper({ children, ...restProps }) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
Signup.Row = function SignupRow({ children, ...restProps }) {
   return <Row {...restProps}>{children}</Row>;
};
Signup.TopRow = function SignupTopRow({ children, ...restProps }) {
   return <TopRow {...restProps}>{children}</TopRow>;
};
Signup.SocialRow = function SignupSocialRow({ children, ...restProps }) {
   return <SocialRow {...restProps}>{children}</SocialRow>;
};
Signup.Input = function SignupInput({ ...restProps }) {
   return <Input {...restProps} />;
};
Signup.InputLabel = function SignupInputLabel({ children, ...restProps }) {
   return <InputLabel {...restProps}>{children}</InputLabel>;
};
Signup.SocialText = function SignupSocialText({ children, ...restProps }) {
   return <SocialText {...restProps}>{children}</SocialText>;
};
Signup.CheckboxLabel = function SignupCheckboxLabel({
   children,
   ...restProps
}) {
   return <CheckboxLabel {...restProps}>{children}</CheckboxLabel>;
};
Signup.Inner = function SignupInner({ children, ...restProps }) {
   return <Inner {...restProps}>{children}</Inner>;
};
Signup.Holder = function SignupHolder({ children, ...restProps }) {
   return <Holder {...restProps}>{children}</Holder>;
};
Signup.BtnLink = function SignupBtnLink({ children, ...restProps }) {
   return <BtnLink {...restProps}>{children}</BtnLink>;
};
Signup.RegisterButton = function SignupRegisterButton({
   children,
   ...restProps
}) {
   return <RegisterButton {...restProps}>{children}</RegisterButton>;
};

Signup.SecondaryRegisterButton = function SignupSecondaryRegisterButton({
   children,
   ...restProps
}) {
   return (
      <SecondaryRegisterButton {...restProps}>
         {children}
      </SecondaryRegisterButton>
   );
};
Signup.Image = function SignupImage({ children, ...restProps }) {
   return <Image {...restProps} />;
};
Signup.SocialIconWrapper = function SignupSocialIconWrapper({
   children,
   ...restProps
}) {
   return <SocialIconWrapper {...restProps}>{children}</SocialIconWrapper>;
};
Signup.FBSocialIconWrapper = function SignupFBSocialIconWrapper({
   children,
   ...restProps
}) {
   return <FBSocialIconWrapper {...restProps}>{children}</FBSocialIconWrapper>;
};
Signup.SocialIcon = function SignupSocialIcon({ ...restProps }) {
   return <SocialIcon {...restProps} />;
};
Signup.FacebookSocialIcon = function SignupFacebookSocialIcon({
   children,
   ...restProps
}) {
   return <FacebookSocialIcon {...restProps} />;
};

Signup.BgImageWrapper = function SignupBgImageWrapper({
   children,
   ...restProps
}) {
   return <BgImageWrapper {...restProps}>{children}</BgImageWrapper>;
};
Signup.BusImage = function SignupBusImage({ children, ...restProps }) {
   return <BusImage {...restProps} />;
};
Signup.BgImage = function SignupBgImage({ children, ...restProps }) {
   return <BgImage {...restProps} />;
};
