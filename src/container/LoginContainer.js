import React, { useState } from "react";
import { Login } from "../components";
import { validateInput } from "../utils";

export default function LoginContainer() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");

   function activateButton() {
      return (
         email !== "" &&
         password !== "" &&
         emailError === "" &&
         passwordError === ""
      );
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         console.log(email);
         console.log(password);

         //clear state and controlled inputs
         setEmail("");
         setPassword("");
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Login>
         <Login.Container>
            <Login.FormWrapper>
               <Login.Left>
                  <Login.TopRow>
                     <Login.SocialRow>
                        <Login.SocialIconWrapper>
                           <Login.SocialIcon
                              src="/images/google_auth_icon.png"
                              alt="Google Icon"
                           />
                        </Login.SocialIconWrapper>
                        <Login.SocialText>
                           Continue with Google
                        </Login.SocialText>
                     </Login.SocialRow>

                     <Login.SocialRow>
                        <Login.FBSocialIconWrapper>
                           <Login.FacebookSocialIcon
                              src="/images/facebook_auth_icon.png"
                              alt="Facebook Social Icon"
                           />
                        </Login.FBSocialIconWrapper>
                        <Login.SocialText>
                           Continue with Facebook
                        </Login.SocialText>
                     </Login.SocialRow>
                  </Login.TopRow>

                  <Login.Form onSubmit={handleSubmit}>
                     <Login.Title>Login Account</Login.Title>
                     <Login.Info>
                        Please input your information in the fields below to
                        enter your Journey platform.
                     </Login.Info>

                     <Login.InputLabel htmlFor="email">Email</Login.InputLabel>
                     <Login.InputWrapper>
                        <Login.Input
                           type="email"
                           name="email"
                           placeholder="example@yourmail.com"
                           required
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
                     </Login.InputWrapper>
                     <div
                        style={{ color: "red" }}
                     >{`emailError: ${emailError}`}</div>

                     <Login.InputLabel htmlFor="password">
                        Password
                     </Login.InputLabel>
                     <Login.InputWrapper>
                        <Login.Input
                           type="password"
                           name="password"
                           placeholder="*******"
                           required
                           value={password}
                           onChange={(e) => {
                              //validate
                              validateInput.validatePassword(
                                 e.target.value,
                                 setPasswordError
                              );
                              setPassword(e.target.value);
                           }}
                        />
                     </Login.InputWrapper>
                     <div
                        style={{ color: "red" }}
                     >{`passwordError: ${passwordError}`}</div>

                     <Login.Row>
                        <Login.CheckboxLabel>Remember Me</Login.CheckboxLabel>
                     </Login.Row>

                     <Login.RegisterButton
                        disabled={activateButton() ? false : true}
                        // activateBtn={activateButton() ? true : false}
                     >
                        <Login.BtnLink to="/dashboard">Login</Login.BtnLink>
                     </Login.RegisterButton>
                     <Login.CheckboxLabel>
                        Don't have an account yet? Register Here!
                     </Login.CheckboxLabel>
                  </Login.Form>
               </Login.Left>

               <Login.Right>
                  <Login.BgImageWrapper>
                     {/* <Login.BgImage src={"/images/authImage.png"} alt="bus" /> */}
                  </Login.BgImageWrapper>
                  <Login.Inner>
                     {/* <Login.Holder>
                <Login.Image src={"/images/register_icon.png"} alt="icon" />
                <p>Welcome Back!</p>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <Login.SecondaryRegisterButton>
                  Sign In
                </Login.SecondaryRegisterButton>
                <Login.BusImage src={"/images/auth_bus.png"} alt="bus" />
              </Login.Holder> */}
                  </Login.Inner>
               </Login.Right>
            </Login.FormWrapper>
         </Login.Container>
      </Login>
   );
}
