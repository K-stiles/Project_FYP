import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { validateInput } from "../utils";
import { Loader, Login } from "../components";
import { fetchUser } from "../redux/features/userSlice";

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onError(loginErr) {},
    update(_, result) {
      localStorage.setItem("jwtToken", result.data?.loginUser?.token);
      if (result.data?.loginUser?.user) {
        dispatch(fetchUser(result.data?.loginUser?.user));
        console.log("Logged in data: ", result.data?.loginUser?.user);
        navigate("/dashboard", { replace: true });
      }
    },
  });

  function activateButton() {
    return (
      email !== "" &&
      password !== "" &&
      emailError === "" &&
      passwordError === ""
    );
  }

  if (loading) return <Loader />;
  if (error) return `<h2>Submission error! ${error.message}</h2>`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Pressed......");

    try {
      login({
        variables: {
          loginUserInput2: {
            email,
            password,
          },
        },
      });
      // TODO: DON'T NAVIGATE
      // TODO: DO AN AUTH CHECK.
      //? IF USER DATA IS PRESENT ? GOTO DASHBOARD : LOGIN
      navigate(
        "/dashboard",
        {
          state: { email },
        },
        { replace: true }
      );

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
                <Login.SocialText>Continue with Google</Login.SocialText>
              </Login.SocialRow>

              <Login.SocialRow>
                <Login.FBSocialIconWrapper>
                  <Login.FacebookSocialIcon
                    src="/images/facebook_auth_icon.png"
                    alt="Facebook Social Icon"
                  />
                </Login.FBSocialIconWrapper>
                <Login.SocialText>Continue with Facebook</Login.SocialText>
              </Login.SocialRow>
            </Login.TopRow>

            <Login.Form onSubmit={handleSubmit}>
              <Login.Title>Login Account</Login.Title>
              <Login.Info>
                Please input your information in the fields below to enter your
                Journey platform.
              </Login.Info>

              <Login.LabelRow>
                <Login.InputLabel htmlFor="email">Email</Login.InputLabel>
                <Login.ErrorMsg>{`${emailError}`}</Login.ErrorMsg>
              </Login.LabelRow>
              <Login.InputWrapper emailError={emailError !== "" ? true : false}>
                <Login.Input
                  type="email"
                  name="email"
                  placeholder="example@yourmail.com"
                  required
                  value={email}
                  onChange={(e) => {
                    //validate
                    validateInput.validateEmail(e.target.value, setEmailError);
                    setEmail(e.target.value);
                  }}
                />
              </Login.InputWrapper>

              <Login.LabelRow>
                <Login.InputLabel htmlFor="password">Password</Login.InputLabel>
                <Login.ErrorMsg>{`${passwordError}`}</Login.ErrorMsg>
              </Login.LabelRow>
              <Login.InputWrapper
                passwordError={passwordError !== "" ? true : false}
              >
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

              <Login.Row>
                <Login.CheckboxLabel>Remember Me</Login.CheckboxLabel>
              </Login.Row>

              <Login.RegisterButton
                disabled={activateButton() ? false : true}
                activateBtn={activateButton() ? true : false}
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

const LOGIN_USER = gql`
  mutation LoginUser($loginUserInput2: LoginInput) {
    loginUser(input: $loginUserInput2) {
      user {
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
        profile
        role
        refreshToken
      }
      token
    }
  }
`;
