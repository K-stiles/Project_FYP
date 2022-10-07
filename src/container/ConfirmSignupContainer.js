import React, { useState } from "react";
import { ConfirmSignup } from "../components";

export default function ConfirmSignupContainer() {
   const [email, setEmail] = useState("");
   const [authCode, setAuthCode] = useState("");

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

                  <ConfirmSignup.Form>
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

                     <ConfirmSignup.InputLabel>Email</ConfirmSignup.InputLabel>
                     <ConfirmSignup.InputWrapper>
                        <ConfirmSignup.Input
                           type="email"
                           name="email"
                           placeholder="example@yourmail.com"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </ConfirmSignup.InputWrapper>

                     <ConfirmSignup.InputLabel>
                        Confirmation Code
                     </ConfirmSignup.InputLabel>
                     <ConfirmSignup.InputWrapper>
                        <ConfirmSignup.Input
                           type="text"
                           name="authCode"
                           placeholder="*******"
                           value={authCode}
                           onChange={(e) => setAuthCode(e.target.value)}
                        />
                     </ConfirmSignup.InputWrapper>

                     <ConfirmSignup.ConfirmButton>
                        <ConfirmSignup.BtnLink to={"/registeration-succcess"}>
                           Send
                        </ConfirmSignup.BtnLink>
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
