import React from "react";
import { SuccessConfirmSignup } from "../components";

export default function SuccessSignupConfirmContainer() {
  return (
    <SuccessConfirmSignup>
      <SuccessConfirmSignup.Container>
        <SuccessConfirmSignup.Form>
          <SuccessConfirmSignup.Title>
            Confirm Registration
          </SuccessConfirmSignup.Title>
          <SuccessConfirmSignup.Info>
            Input your new desired password in the input fields below to create
            a new password. We strongly advise you to store it safely.Input your
            new desired password in the input fields below to create a new
            password. We strongly advise you to store it safely.
          </SuccessConfirmSignup.Info>

          <SuccessConfirmSignup.SuccessButton>
            Go to Login
          </SuccessConfirmSignup.SuccessButton>
        </SuccessConfirmSignup.Form>
      </SuccessConfirmSignup.Container>
    </SuccessConfirmSignup>
  );
}
