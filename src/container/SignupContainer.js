import React, { useState } from "react";
import { Signup } from "../components";

export default function SignupContainer() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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
                <Signup.SocialText>Continue with Google</Signup.SocialText>
              </Signup.SocialRow>

              <Signup.SocialRow>
                <Signup.FBSocialIconWrapper>
                  <Signup.FacebookSocialIcon
                    src="/images/facebook_auth_icon.png"
                    alt="Facebook Social Icon"
                  />
                </Signup.FBSocialIconWrapper>
                <Signup.SocialText>Continue with Facebook</Signup.SocialText>
              </Signup.SocialRow>
            </Signup.TopRow>

            <Signup.Form>
              <Signup.Title>Create Account</Signup.Title>
              <Signup.Info>
                We need you to help us with some basic information for your
                account creation. Here are our terms and conditins. Please read
                them carefully. We are GDRP compliiant
              </Signup.Info>

              <Signup.InputLabel>Full Name</Signup.InputLabel>
              <Signup.Row>
                <Signup.InputWrapper>
                  <Signup.Input
                    type="text"
                    name="firstname"
                    placeholder="first name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Signup.InputWrapper>
                <Signup.InputWrapper>
                  <Signup.Input
                    type="text"
                    name="lastname"
                    placeholder="last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Signup.InputWrapper>
              </Signup.Row>

              <Signup.InputLabel>Email</Signup.InputLabel>
              <Signup.InputWrapper>
                <Signup.Input
                  type="text"
                  name="email"
                  placeholder="example@yourmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Signup.InputWrapper>

              <Signup.InputLabel>Phone Number</Signup.InputLabel>
              <Signup.InputWrapper>
                <Signup.Input
                  type="text"
                  name="phone"
                  placeholder="+233 0554742356"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Signup.InputWrapper>

              <Signup.InputLabel>Password</Signup.InputLabel>
              <Signup.InputWrapper>
                <Signup.Input
                  type="password"
                  name="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Signup.InputWrapper>

              <Signup.Row>
                <Signup.CheckboxLabel>
                  I agree with terms and conditions.
                </Signup.CheckboxLabel>
              </Signup.Row>

              <Signup.RegisterButton>Register</Signup.RegisterButton>
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
