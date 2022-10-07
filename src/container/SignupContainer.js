import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Signup } from "../components";
import { validateInput } from "../utils";

export default function SignupContainer() {
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");

   const [firstnameError, setFirstnameError] = useState("");
   const [lastnameError, setLastnameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [phoneError, setPhoneError] = useState("");

   function activateButton() {
      return (
         firstname !== "" &&
         lastname !== "" &&
         email !== "" &&
         password !== "" &&
         phone !== "" &&
         firstnameError === "" &&
         lastnameError === "" &&
         emailError === "" &&
         passwordError === "" &&
         phoneError === ""
      );
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         console.log(firstname);
         console.log(lastname);
         console.log(email);
         console.log(password);
         console.log(phone);

         //clear state and controlled inputs
         setFirstname("");
         setLastname("");
         setEmail("");
         setPassword("");
         setPhone("");
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Signup>
         <Signup.Container>
            <Signup.FormWrapper>
               <Signup.Left>
                  <Signup.TopRow>
                     <Signup.SocialRow>
                        <Signup.SocialIconWrapper>
                           <Signup.SocialIcon
                              src="/images/google_auth_icon.png"
                              alt="Google Icon"
                           />
                        </Signup.SocialIconWrapper>
                        <Signup.SocialText>
                           Continue with Google
                        </Signup.SocialText>
                     </Signup.SocialRow>

                     <Signup.SocialRow>
                        <Signup.FBSocialIconWrapper>
                           <Signup.FacebookSocialIcon
                              src="/images/facebook_auth_icon.png"
                              alt="Facebook Social Icon"
                           />
                        </Signup.FBSocialIconWrapper>
                        <Signup.SocialText>
                           Continue with Facebook
                        </Signup.SocialText>
                     </Signup.SocialRow>
                  </Signup.TopRow>

                  <Signup.Form onSubmit={handleSubmit}>
                     <Signup.Title>Create Account</Signup.Title>
                     <Signup.Info>
                        We need you to help us with some basic information for
                        your account creation. Here are our terms and conditins.
                        Please read them carefully. We are GDRP compliiant
                     </Signup.Info>

                     <Signup.InputLabel htmlFor="name">
                        Full Name
                     </Signup.InputLabel>
                     <Signup.Row>
                        <Signup.InputWrapper>
                           <Signup.Input
                              type="text"
                              name="firstname"
                              placeholder="first name"
                              value={firstname}
                              onChange={(e) => {
                                 //validate
                                 validateInput.validateFirstName(
                                    e.target.value,
                                    setFirstnameError
                                 );
                                 setFirstname(e.target.value);
                              }}
                              // ref={usernameRef}
                              required
                              autoComplete="off"
                              // onFocus={() => setUserFocus(true)}
                              // onBlur={() => setUserFocus(false)}
                           />
                        </Signup.InputWrapper>
                        <Signup.InputWrapper>
                           <Signup.Input
                              type="text"
                              name="lastname"
                              placeholder="last name"
                              autoComplete="off"
                              required
                              value={lastname}
                              onChange={(e) => {
                                 //validate
                                 validateInput.validateLastName(
                                    e.target.value,
                                    setLastnameError
                                 );
                                 setLastname(e.target.value);
                              }}
                           />
                        </Signup.InputWrapper>
                     </Signup.Row>
                     <div style={{ color: "red" }}>
                        {`firstnameError: ${firstnameError}, lastnameError: ${lastnameError}`}
                     </div>

                     <Signup.InputLabel htmlFor="email">
                        Email
                     </Signup.InputLabel>
                     <Signup.InputWrapper>
                        <Signup.Input
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
                     </Signup.InputWrapper>
                     <div
                        style={{ color: "red" }}
                     >{`emailError: ${emailError}`}</div>

                     <Signup.InputLabel htmlFor="phone">
                        Phone Number
                     </Signup.InputLabel>
                     <Signup.InputWrapper>
                        <Signup.Input
                           type="text"
                           name="phone"
                           placeholder="+233 0554742356"
                           required
                           value={phone}
                           onChange={(e) => {
                              //validate
                              validateInput.validateMobileNumber(
                                 e.target.value,
                                 setPhoneError
                              );
                              setPhone(e.target.value);
                           }}
                        />
                     </Signup.InputWrapper>
                     <div
                        style={{ color: "red" }}
                     >{`phoneError: ${phoneError}`}</div>

                     <Signup.InputLabel htmlFor="password">
                        Password
                     </Signup.InputLabel>
                     <Signup.InputWrapper>
                        <Signup.Input
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
                     </Signup.InputWrapper>
                     <div
                        style={{ color: "red" }}
                     >{`passwordError: ${passwordError}`}</div>

                     <Signup.Row>
                        <Signup.CheckboxLabel>
                           I agree with terms and conditions.
                        </Signup.CheckboxLabel>
                     </Signup.Row>

                     <Signup.RegisterButton
                        disabled={activateButton() ? false : true}
                        activateBtn={activateButton() ? true : false}
                     >
                        <Signup.BtnLink to={"/confirmRegisteration"}>Register</Signup.BtnLink>
                     </Signup.RegisterButton>
                  </Signup.Form>
               </Signup.Left>

               <Signup.Right>
                  <Signup.BgImageWrapper>
                     {/* <Signup.BgImage src={"/images/authImage.png"} alt="bus" /> */}
                  </Signup.BgImageWrapper>
                  <Signup.Inner>
                     {/* <Signup.Holder>
                <Signup.Image src={"/images/register_icon.png"} alt="icon" />
                <p>Welcome Back!</p>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <Signup.SecondaryRegisterButton>
                  Sign In
                </Signup.SecondaryRegisterButton>
                <Signup.BusImage src={"/images/auth_bus.png"} alt="bus" />
              </Signup.Holder> */}
                  </Signup.Inner>
               </Signup.Right>
            </Signup.FormWrapper>
         </Signup.Container>
      </Signup>
   );
}
