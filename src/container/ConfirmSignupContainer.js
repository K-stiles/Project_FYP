import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { ConfirmSignup } from "../components";
import { GET_USER } from "../redux/features/userSlice";
import { validateInput } from "../utils";

export default function ConfirmSignupContainer() {
   const navigate = useNavigate();
   const { user } = useSelector(GET_USER);

   const [email, setEmail] = useState(user?.email);
   const [authCode, setAuthCode] = useState("");
   const [emailError, setEmailError] = useState("");
   const [authCodeError, setAuthCodeError] = useState("");

   function activateButton() {
      return (
         email !== "" &&
         authCode !== "" &&
         emailError === "" &&
         authCodeError === ""
      );
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // console.log(email);
         // console.log(authCode);
         navigate("/registeration-succcess", { replace: true });
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <ConfirmSignup>
         <ConfirmSignup.Container>
            <ConfirmSignup.FormWrapper>
               <ConfirmSignup.Left>
                  <ConfirmSignup.TopRow>
                     <ConfirmSignup.SocialRow>
                        <ConfirmSignup.SocialIconWrapper>
                           <ConfirmSignup.SocialIcon
                              src="/images/google_auth_icon.png"
                              alt="Google Icon"
                           />
                        </ConfirmSignup.SocialIconWrapper>
                        <ConfirmSignup.SocialText>
                           Continue with Google
                        </ConfirmSignup.SocialText>
                     </ConfirmSignup.SocialRow>

                     <ConfirmSignup.SocialRow>
                        <ConfirmSignup.FBSocialIconWrapper>
                           <ConfirmSignup.FacebookSocialIcon
                              src="/images/facebook_auth_icon.png"
                              alt="Facebook Social Icon"
                           />
                        </ConfirmSignup.FBSocialIconWrapper>
                        <ConfirmSignup.SocialText>
                           Continue with Facebook
                        </ConfirmSignup.SocialText>
                     </ConfirmSignup.SocialRow>
                  </ConfirmSignup.TopRow>

                  <ConfirmSignup.Form onSubmit={handleSubmit}>
                     <ConfirmSignup.Title>
                        Confirm Registration
                     </ConfirmSignup.Title>
                     <ConfirmSignup.Info>
                        Input your new desired password in the input fields
                        below to create a new password. We strongly advise you
                        to store it safely.Input your new desired password in
                        the input fields below to create a new password. We
                        strongly advise you to store it safely.
                     </ConfirmSignup.Info>

                     <ConfirmSignup.LabelRow>
                        <ConfirmSignup.InputLabel htmlFor="email">
                           Email
                        </ConfirmSignup.InputLabel>
                        <ConfirmSignup.ErrorMsg>{`${emailError}`}</ConfirmSignup.ErrorMsg>
                     </ConfirmSignup.LabelRow>
                     <ConfirmSignup.InputWrapper
                        emailError={emailError !== "" ? true : false}
                     >
                        <ConfirmSignup.Input
                           type="email"
                           name="email"
                           placeholder="example@yourmail.com"
                           value={email}
                           onChange={(e) => {
                              //validate
                              validateInput.validateEmail(
                                 e.target.value,
                                 setEmailError
                              );
                              setEmail(e.target.value);
                           }}
                        />
                     </ConfirmSignup.InputWrapper>

                     <ConfirmSignup.LabelRow>
                        <ConfirmSignup.InputLabel htmlFor="code">
                           Confirmation Code
                        </ConfirmSignup.InputLabel>
                        <ConfirmSignup.ErrorMsg>{`${authCodeError}`}</ConfirmSignup.ErrorMsg>
                     </ConfirmSignup.LabelRow>
                     <ConfirmSignup.InputWrapper
                        authCodeError={authCodeError !== "" ? true : false}
                     >
                        <ConfirmSignup.Input
                           type="text"
                           name="authCode"
                           placeholder="*******"
                           value={authCode}
                           onChange={(e) => {
                              //validate
                              validateInput.validateAuthCode(
                                 e.target.value,
                                 setAuthCodeError
                              );
                              setAuthCode(e.target.value);
                           }}
                        />
                     </ConfirmSignup.InputWrapper>

                     <ConfirmSignup.ConfirmButton
                        disabled={activateButton() ? false : true}
                        activateBtn={activateButton() ? true : false}
                     >
                        <ConfirmSignup.BtnLink>Send</ConfirmSignup.BtnLink>
                     </ConfirmSignup.ConfirmButton>
                  </ConfirmSignup.Form>

                  <ConfirmSignup.CheckboxLabel>
                     Do you need help?
                  </ConfirmSignup.CheckboxLabel>
                  <ConfirmSignup.CheckboxLabel>
                     Customer Support
                  </ConfirmSignup.CheckboxLabel>
               </ConfirmSignup.Left>

               <ConfirmSignup.Right>
                  <ConfirmSignup.BgImageWrapper>
                     {/* <ConfirmSignup.BgImage src={"/images/authImage.png"} alt="bus" /> */}
                  </ConfirmSignup.BgImageWrapper>
                  <ConfirmSignup.Inner>
                     {/* <ConfirmSignup.Holder>
                <ConfirmSignup.Image src={"/images/Confirm_icon.png"} alt="icon" />
                <p>Welcome Back!</p>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <ConfirmSignup.SecondaryConfirmButton>
                  Sign In
                </ConfirmSignup.SecondaryConfirmButton>
                <ConfirmSignup.BusImage src={"/images/auth_bus.png"} alt="bus" />
              </ConfirmSignup.Holder> */}
                  </ConfirmSignup.Inner>
               </ConfirmSignup.Right>
            </ConfirmSignup.FormWrapper>
         </ConfirmSignup.Container>
      </ConfirmSignup>
   );
}
