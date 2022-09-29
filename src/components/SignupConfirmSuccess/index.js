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
  SuccessButton,
} from "./successSignupConfirm.styled";

export default function SuccessConfirmSignup({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}

SuccessConfirmSignup.Container = function SuccessConfirmSignupContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};
SuccessConfirmSignup.FormWrapper = function SuccessConfirmSignupFormWrapper({
  children,
  ...restProps
}) {
  return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
SuccessConfirmSignup.Form = function SuccessConfirmSignupForm({
  children,
  ...restProps
}) {
  return <Form {...restProps}>{children}</Form>;
};
SuccessConfirmSignup.Left = function SuccessConfirmSignupLeft({
  children,
  ...restProps
}) {
  return <Left {...restProps}>{children}</Left>;
};
SuccessConfirmSignup.Right = function SuccessConfirmSignupRight({
  children,
  ...restProps
}) {
  return <Right {...restProps}>{children}</Right>;
};
SuccessConfirmSignup.Title = function SuccessConfirmSignupTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};
SuccessConfirmSignup.Info = function SuccessConfirmSignupInfo({
  children,
  ...restProps
}) {
  return <Info {...restProps}>{children}</Info>;
};

SuccessConfirmSignup.InputWrapper = function SuccessConfirmSignupInputWrapper({
  children,
  ...restProps
}) {
  return <InputWrapper {...restProps}>{children}</InputWrapper>;
};
SuccessConfirmSignup.Row = function SuccessConfirmSignupRow({
  children,
  ...restProps
}) {
  return <Row {...restProps}>{children}</Row>;
};
SuccessConfirmSignup.TopRow = function SuccessConfirmSignupTopRow({
  children,
  ...restProps
}) {
  return <TopRow {...restProps}>{children}</TopRow>;
};
SuccessConfirmSignup.SocialRow = function SuccessConfirmSignupSocialRow({
  children,
  ...restProps
}) {
  return <SocialRow {...restProps}>{children}</SocialRow>;
};
SuccessConfirmSignup.Input = function SuccessConfirmSignupInput({
  ...restProps
}) {
  return <Input {...restProps} />;
};
SuccessConfirmSignup.InputLabel = function SuccessConfirmSignupInputLabel({
  children,
  ...restProps
}) {
  return <InputLabel {...restProps}>{children}</InputLabel>;
};
SuccessConfirmSignup.SocialText = function SuccessConfirmSignupSocialText({
  children,
  ...restProps
}) {
  return <SocialText {...restProps}>{children}</SocialText>;
};
SuccessConfirmSignup.CheckboxLabel =
  function SuccessConfirmSignupCheckboxLabel({ children, ...restProps }) {
    return <CheckboxLabel {...restProps}>{children}</CheckboxLabel>;
  };
SuccessConfirmSignup.Inner = function SuccessConfirmSignupInner({
  children,
  ...restProps
}) {
  return <Inner {...restProps}>{children}</Inner>;
};
SuccessConfirmSignup.Holder = function SuccessConfirmSignupHolder({
  children,
  ...restProps
}) {
  return <Holder {...restProps}>{children}</Holder>;
};

SuccessConfirmSignup.SuccessButton =
  function SuccessConfirmSignupSuccessButton({ children, ...restProps }) {
    return <SuccessButton {...restProps}>{children}</SuccessButton>;
  };

SuccessConfirmSignup.SecondaryConfirmButton =
  function SuccessConfirmSignupSecondaryConfirmButton({
    children,
    ...restProps
  }) {
    return (
      <SecondaryConfirmButton {...restProps}>{children}</SecondaryConfirmButton>
    );
  };
SuccessConfirmSignup.Image = function SuccessConfirmSignupImage({
  children,
  ...restProps
}) {
  return <Image {...restProps} />;
};
SuccessConfirmSignup.SocialIconWrapper =
  function SuccessConfirmSignupSocialIconWrapper({ children, ...restProps }) {
    return <SocialIconWrapper {...restProps}>{children}</SocialIconWrapper>;
  };
SuccessConfirmSignup.FBSocialIconWrapper =
  function SuccessConfirmSignupFBSocialIconWrapper({ children, ...restProps }) {
    return <FBSocialIconWrapper {...restProps}>{children}</FBSocialIconWrapper>;
  };
SuccessConfirmSignup.SocialIcon = function SuccessConfirmSignupSocialIcon({
  ...restProps
}) {
  return <SocialIcon {...restProps} />;
};
SuccessConfirmSignup.FacebookSocialIcon =
  function SuccessConfirmSignupFacebookSocialIcon({ children, ...restProps }) {
    return <FacebookSocialIcon {...restProps} />;
  };

SuccessConfirmSignup.BgImageWrapper =
  function SuccessConfirmSignupBgImageWrapper({ children, ...restProps }) {
    return <BgImageWrapper {...restProps}>{children}</BgImageWrapper>;
  };
SuccessConfirmSignup.BusImage = function SuccessConfirmSignupBusImage({
  children,
  ...restProps
}) {
  return <BusImage {...restProps} />;
};
SuccessConfirmSignup.BgImage = function SuccessConfirmSignupBgImage({
  children,
  ...restProps
}) {
  return <BgImage {...restProps} />;
};
