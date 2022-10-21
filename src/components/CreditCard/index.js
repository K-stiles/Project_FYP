import React from "react";
import {
   Card,
   CardContent,
   CardTangle,
   CardWrapper,
   Hash,
   Info,
   InfoText,
   Item,
   Visa,
} from "./creditCard.styled";

export default function CreditCard({
   number = "#############",
   name = "Full Name",
   date = "MM YY",
}) {
   return (
      <CardWrapper>
         <Card>
            <CardContent>
               <Item>
                  <CardTangle />
               </Item>
               <Item>
                  <Visa src={"/images/visa.png"} alt={"visa image"} />
               </Item>
            </CardContent>
            <CardContent>
               <Item>
                  <Hash>{number}</Hash>
               </Item>
            </CardContent>
            <CardContent>
               <Item>
                  <Info>
                     <InfoText>Card Holder</InfoText>
                     <InfoText>{name}</InfoText>
                  </Info>
               </Item>
               <Item>
                  <Info>
                     <InfoText>Express</InfoText>
                     <InfoText>{date}</InfoText>
                  </Info>
               </Item>
            </CardContent>
         </Card>
      </CardWrapper>
   );
}
