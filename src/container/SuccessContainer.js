import React from "react";
import { Success } from "../components";

export default function SuccessContainer() {
   return (
      <Success>
         <Success.Container>
            <Success.HeaderSection>
               <Success.MainHeader>Congratulations</Success.MainHeader>
               <Success.EditIcon
                  src={"/images/edit-icon.png"}
                  alt={"bi-directional-arrow-icon image"}
               />
            </Success.HeaderSection>

            <Success.CenterSection>
               <Success.Content>
                  <Success.SuccessImg
                     src={"/images/succesImage.png"}
                     alt={"succesImage image"}
                  />
                  <Success.MediumText>
                     We have sent the ticket to your mailbox , please check it
                     in time.
                  </Success.MediumText>
                  <Success.BoldText>
                     Congratulations on your successful purchase !!!
                  </Success.BoldText>
                  <Success.BackBtn>Go Back</Success.BackBtn>
               </Success.Content>
            </Success.CenterSection>
         </Success.Container>
      </Success>
   );
}
