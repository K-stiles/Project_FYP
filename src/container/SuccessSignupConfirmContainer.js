import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SuccessConfirmSignup } from "../components";
import { logout } from "../redux/features/userSlice";

export default function SuccessSignupConfirmContainer() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   // const user = useSelector(GET_USER);
   // console.log(user);

   const handleSuccess = () => {
      dispatch(logout());
      navigate("/login");
   };
   return (
      <SuccessConfirmSignup>
         <SuccessConfirmSignup.Container>
            {/* <SuccessConfirmSignup.Div>*/}
            <SuccessConfirmSignup.Title>
               Confirm Registration
            </SuccessConfirmSignup.Title>
            <SuccessConfirmSignup.Info>
               Input your new desired password in the input fields below to
               create a new password. We strongly advise you to store it
               safely.Input your new desired password in the input fields below
               to create a new password. We strongly advise you to store it
               safely.
            </SuccessConfirmSignup.Info>

            <SuccessConfirmSignup.SuccessButton>
               <SuccessConfirmSignup.BtnLink onClick={handleSuccess}>
                  Go to Login
               </SuccessConfirmSignup.BtnLink>
            </SuccessConfirmSignup.SuccessButton>
            {/* </SuccessConfirmSignup.Div>  */}
         </SuccessConfirmSignup.Container>
      </SuccessConfirmSignup>
   );
}
