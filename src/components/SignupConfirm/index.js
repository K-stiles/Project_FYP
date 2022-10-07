import React from "react";
import {
   BgImage,
   BgImageWrapper,
   BusImage,
   CheckboxLabel,
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
   ConfirmButton,
   Right,
   Row,
   SecondaryConfirmButton,
   Section,
   SocialIcon,
   SocialRow,
   SocialText,
   Title,
   TopRow,
   FBSocialIconWrapper,
   Container,
   BtnLink,
} from "./confirmSignup.styled";

export default function ConfirmSignup({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
ConfirmSignup.Container = function ConfirmSignupContainer({
   children,
   ...restProps
}) {
   return <Container {...restProps}>{children}</Container>;
};
ConfirmSignup.FormWrapper = function ConfirmSignupFormWrapper({
   children,
   ...restProps
}) {
   return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
ConfirmSignup.Form = function ConfirmSignupForm({ children, ...restProps }) {
   return <Form {...restProps}>{children}</Form>;
};
ConfirmSignup.Left = function ConfirmSignupLeft({ children, ...restProps }) {
   return <Left {...restProps}>{children}</Left>;
};
ConfirmSignup.Right = function ConfirmSignupRight({ children, ...restProps }) {
   return <Right {...restProps}>{children}</Right>;
};
ConfirmSignup.Title = function ConfirmSignupTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};
ConfirmSignup.Info = function ConfirmSignupInfo({ children, ...restProps }) {
   return <Info {...restProps}>{children}</Info>;
};

ConfirmSignup.InputWrapper = function ConfirmSignupInputWrapper({
   children,
   ...restProps
}) {
   return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
ConfirmSignup.Row = function ConfirmSignupRow({ children, ...restProps }) {
   return <Row {...restProps}>{children}</Row>;
};
ConfirmSignup.TopRow = function ConfirmSignupTopRow({
   children,
   ...restProps
}) {
   return <TopRow {...restProps}>{children}</TopRow>;
};
ConfirmSignup.SocialRow = function ConfirmSignupSocialRow({
   children,
   ...restProps
}) {
   return <SocialRow {...restProps}>{children}</SocialRow>;
};
ConfirmSignup.Input = function ConfirmSignupInput({ ...restProps }) {
   return <Input {...restProps} />;
};
ConfirmSignup.InputLabel = function ConfirmSignupInputLabel({
   children,
   ...restProps
}) {
   return <InputLabel {...restProps}>{children}</InputLabel>;
};
ConfirmSignup.SocialText = function ConfirmSignupSocialText({
   children,
   ...restProps
}) {
   return <SocialText {...restProps}>{children}</SocialText>;
};
ConfirmSignup.CheckboxLabel = function ConfirmSignupCheckboxLabel({
   children,
   ...restProps
}) {
   return <CheckboxLabel {...restProps}>{children}</CheckboxLabel>;
};
ConfirmSignup.Inner = function ConfirmSignupInner({ children, ...restProps }) {
   return <Inner {...restProps}>{children}</Inner>;
};
ConfirmSignup.Holder = function ConfirmSignupHolder({
   children,
   ...restProps
}) {
   return <Holder {...restProps}>{children}</Holder>;
};
ConfirmSignup.ConfirmButton = function ConfirmSignupConfirmButton({
   children,
   ...restProps
}) {
   return <ConfirmButton {...restProps}>{children}</ConfirmButton>;
};
ConfirmSignup.BtnLink = function ConfirmSignupBtnLink({
   children,
   ...restProps
}) {
   return <BtnLink {...restProps}>{children}</BtnLink>;
};

ConfirmSignup.SecondaryConfirmButton =
   function ConfirmSignupSecondaryConfirmButton({ children, ...restProps }) {
      return (
         <SecondaryConfirmButton {...restProps}>
            {children}
         </SecondaryConfirmButton>
      );
   };
ConfirmSignup.Image = function ConfirmSignupImage({ children, ...restProps }) {
   return <Image {...restProps} />;
};
ConfirmSignup.SocialIconWrapper = function ConfirmSignupSocialIconWrapper({
   children,
   ...restProps
}) {
   return <SocialIconWrapper {...restProps}>{children}</SocialIconWrapper>;
};
ConfirmSignup.FBSocialIconWrapper = function ConfirmSignupFBSocialIconWrapper({
   children,
   ...restProps
}) {
   return <FBSocialIconWrapper {...restProps}>{children}</FBSocialIconWrapper>;
};
ConfirmSignup.SocialIcon = function ConfirmSignupSocialIcon({ ...restProps }) {
   return <SocialIcon {...restProps} />;
};
ConfirmSignup.FacebookSocialIcon = function ConfirmSignupFacebookSocialIcon({
   children,
   ...restProps
}) {
   return <FacebookSocialIcon {...restProps} />;
};

ConfirmSignup.BgImageWrapper = function ConfirmSignupBgImageWrapper({
   children,
   ...restProps
}) {
   return <BgImageWrapper {...restProps}>{children}</BgImageWrapper>;
};
ConfirmSignup.BusImage = function ConfirmSignupBusImage({
   children,
   ...restProps
}) {
   return <BusImage {...restProps} />;
};
ConfirmSignup.BgImage = function ConfirmSignupBgImage({
   children,
   ...restProps
}) {
   return <BgImage {...restProps} />;
};
