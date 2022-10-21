import React from "react";
import { Account } from "../components";

export default function AccountSettingsContainer() {
   return (
      <Account>
         <Account.Container>
            {/* COLUMN ONE */}
            <Account.Col>
               <Account.ColTitle>Account Settings</Account.ColTitle>

               <Account.FormWrapper>
                  <Account.Form>
                     <Account.Wrapper>
                        <Account.Label>Full Name</Account.Label>
                        <Account.InputWrapper>
                           <Account.Input placeholder="Micheal Essuman" />
                        </Account.InputWrapper>
                     </Account.Wrapper>
                     <Account.Wrapper>
                        <Account.Label>Email</Account.Label>
                        <Account.InputWrapper>
                           <Account.Input
                              placeholder="example@yourmail.com"
                              type="email"
                           />
                        </Account.InputWrapper>
                     </Account.Wrapper>
                     <Account.Wrapper>
                        <Account.Label>Phone Number</Account.Label>
                        <Account.InputWrapper>
                           <Account.Input placeholder="0552424133" />
                        </Account.InputWrapper>
                     </Account.Wrapper>
                     <Account.Wrapper>
                        <Account.Label>Password</Account.Label>
                        <Account.InputWrapper>
                           <Account.Input
                              placeholder="*************"
                              type="password"
                           />
                        </Account.InputWrapper>
                     </Account.Wrapper>
                  </Account.Form>

                  <Account.SaveBtn>Save Account Settings</Account.SaveBtn>
               </Account.FormWrapper>
            </Account.Col>

            {/* COLUMN TWO */}
            <Account.Col>
               <Account.ColTitle>Billing Information</Account.ColTitle>

               <Account.Form>
                  <Account.Wrapper>
                     <Account.Label>Billing Email</Account.Label>
                     <Account.InputWrapper>
                        <Account.Input placeholder="Micheal Essuman" />
                     </Account.InputWrapper>
                  </Account.Wrapper>
                  <Account.Wrapper>
                     <Account.Label>Address</Account.Label>
                     <Account.InputWrapper>
                        <Account.Input placeholder="example@yourmail.com" />
                     </Account.InputWrapper>
                  </Account.Wrapper>
                  <Account.Wrapper>
                     <Account.Label>City</Account.Label>
                     <Account.InputWrapper>
                        <Account.Input placeholder="0552424133" />
                     </Account.InputWrapper>
                  </Account.Wrapper>
                  <Account.Wrapper>
                     <Account.Label>Zip Code</Account.Label>
                     <Account.InputWrapper>
                        <Account.Input placeholder="*************" />
                     </Account.InputWrapper>
                  </Account.Wrapper>
               </Account.Form>
            </Account.Col>
         </Account.Container>
      </Account>
   );
}
