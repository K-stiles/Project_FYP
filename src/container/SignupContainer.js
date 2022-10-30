import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { CheckboxLabel, Loader, Signup } from "../components";
import { validateInput } from "../utils";
import { fetchUser } from "../redux/features/userSlice";

export default function SignupContainer() {
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const [hasAgreed, setHasAgreed] = useState(false);

   const [firstnameError, setFirstnameError] = useState("");
   const [lastnameError, setLastnameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [phoneError, setPhoneError] = useState("");

   // let location = useLocation();
   // const from = location?.state?.from.pathname || "/";
   const navigate = useNavigate();
   const dispatch = useDispatch();

   // const user = useSelector(GET_USER);
   // console.log(user);

   const getCheckedValue = () => {
      setHasAgreed((hasAgreed) => !hasAgreed);
   };
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
         phoneError === "" &&
         hasAgreed !== false
      );
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const {
            data: { createUser },
         } = await register({
            variables: {
               input: {
                  firstName: firstname,
                  lastName: lastname,
                  email,
                  password,
                  phone,
               },
            },
         });
         dispatch(fetchUser(createUser));
         // console.log(createUser);
         //clear state and controlled inputs
         setFirstname("");
         setLastname("");
         setEmail("");
         setPassword("");
         setPhone("");
         setHasAgreed(false);
         navigate("/confirmRegisteration", { replace: true });
      } catch (err) {
         console.log(err);
      }
   };

   const [register, { loading }] = useMutation(REGISTER_USER, {
      onError(registerErr) {
         setEmailError(registerErr);
      },
   });

   if (loading) return <Loader />;
   // if (error) return `Submission error! ${error.message}`;
   // if (data) navigate("/confirmRegisteration", { replace: true });

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

                     <Signup.LabelRow>
                        <Signup.InputLabel htmlFor="name">
                           Full Name
                        </Signup.InputLabel>
                        <Signup.ErrorMsg>
                           {`${lastnameError || firstnameError}`}
                        </Signup.ErrorMsg>
                     </Signup.LabelRow>
                     <Signup.Row>
                        <Signup.InputWrapper
                           firstnameError={firstnameError !== "" ? true : false}
                        >
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
                              required
                              autoComplete="off"
                           />
                        </Signup.InputWrapper>
                        <Signup.InputWrapper
                           lastnameError={lastnameError !== "" ? true : false}
                        >
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

                     <Signup.LabelRow>
                        <Signup.InputLabel htmlFor="email">
                           Email
                        </Signup.InputLabel>
                        <Signup.ErrorMsg>{`${emailError}`}</Signup.ErrorMsg>
                     </Signup.LabelRow>
                     <Signup.InputWrapper
                        emailError={emailError !== "" ? true : false}
                     >
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

                     <Signup.LabelRow>
                        <Signup.InputLabel htmlFor="phone">
                           Phone Number
                        </Signup.InputLabel>
                        <Signup.ErrorMsg>{`${phoneError}`}</Signup.ErrorMsg>
                     </Signup.LabelRow>
                     <Signup.InputWrapper
                        phoneError={phoneError !== "" ? true : false}
                     >
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

                     <Signup.LabelRow>
                        <Signup.InputLabel htmlFor="password">
                           Password
                        </Signup.InputLabel>
                        <Signup.ErrorMsg>{`${passwordError}`}</Signup.ErrorMsg>
                     </Signup.LabelRow>
                     <Signup.InputWrapper
                        passwordError={passwordError !== "" ? true : false}
                     >
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

                     <Signup.Row>
                        <CheckboxLabel
                           boxId={"checboxId"}
                           checkboxName={"checbox"}
                           option={"I agree with terms and conditions."}
                           // value={"agree"}
                           onChange={getCheckedValue}
                           checked={hasAgreed}
                           // checkedError={checkedError !== "" ? true : false}
                        />
                     </Signup.Row>

                     <Signup.RegisterButton
                        disabled={activateButton() ? false : true}
                        activateBtn={activateButton() ? true : false}
                     >
                        <Signup.BtnLink> Register </Signup.BtnLink>
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

const REGISTER_USER = gql`
   mutation CreateUser($input: RegistrationInput) {
      createUser(input: $input) {
         id
         firstName
         lastName
         email
         phone
         street
         city
         zip
         createdAt
         userReservations
         img
      }
   }
`;
