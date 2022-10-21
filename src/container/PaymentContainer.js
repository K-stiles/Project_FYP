import React from "react";
import { CreditCard, Payment } from "../components";

export default function PaymentContainer() {
   return (
      <Payment>
         <Payment.Wrapper>
            <Payment.Container>
               <Payment.Col>
                  <Payment.HeaderSection>
                     <Payment.MainHeader>Billing Address</Payment.MainHeader>
                     <Payment.EditIcon
                        src={"/images/edit-icon.png"}
                        alt={"bi-directional-arrow-icon image"}
                     />
                  </Payment.HeaderSection>
                  <Payment.ColContent>
                     <Payment.AcceptedCards>
                        Accepted Cards:
                     </Payment.AcceptedCards>
                     <Payment.CardImg
                        src={"/images/payment_modes.png"}
                        alt={"payment modes image"}
                     />
                     <Payment.FormWrapper>
                        <Payment.Form>
                           <Payment.Label>Full Name</Payment.Label>
                           <Payment.InputWrapper>
                              <Payment.Input placeholder="John Doe" />
                           </Payment.InputWrapper>

                           <Payment.Label>Email</Payment.Label>
                           <Payment.InputWrapper>
                              <Payment.Input placeholder="example@yourmail.com" />
                           </Payment.InputWrapper>

                           <Payment.Label>Address</Payment.Label>
                           <Payment.InputWrapper>
                              <Payment.Input placeholder="Town - Street - locality" />
                           </Payment.InputWrapper>

                           <Payment.Label>City</Payment.Label>
                           <Payment.InputWrapper>
                              <Payment.Input placeholder="Accra" />
                           </Payment.InputWrapper>

                           <Payment.InputRow>
                              <Payment.One>
                                 <Payment.Label>State</Payment.Label>
                                 <Payment.InputWrapper>
                                    <Payment.Input placeholder="Accra" />
                                 </Payment.InputWrapper>
                              </Payment.One>

                              <Payment.One>
                                 <Payment.Label>Zip Code</Payment.Label>
                                 <Payment.InputWrapper>
                                    <Payment.Input placeholder="0233" />
                                 </Payment.InputWrapper>
                              </Payment.One>
                           </Payment.InputRow>
                        </Payment.Form>
                     </Payment.FormWrapper>
                  </Payment.ColContent>
               </Payment.Col>

               <Payment.Col>
                  <Payment.HeaderSection>
                     <Payment.MainHeader>Payment</Payment.MainHeader>
                     <Payment.EditIcon
                        src={"/images/edit-icon.png"}
                        alt={"bi-directional-arrow-icon image"}
                     />
                  </Payment.HeaderSection>
                  <Payment.ColContent>
                     <div style={{ height: "10px" }}></div>
                     <CreditCard
                     // number={"96535689076543"}
                     // name={"Jame Gunn"}
                     // date="20-12-22"
                     />

                     <Payment.FormWrapper>
                        <Payment.Form>
                           <Payment.Label>Card Number</Payment.Label>
                           <Payment.InputWrapper>
                              <Payment.Input placeholder="John Doe" />
                           </Payment.InputWrapper>

                           <Payment.Label>Card Holder</Payment.Label>
                           <Payment.InputWrapper>
                              <Payment.Input placeholder="example@yourmail.com" />
                           </Payment.InputWrapper>

                           <Payment.InputRow>
                              <Payment.One>
                                 <Payment.Label>Expiration - MM</Payment.Label>
                                 <Payment.InputWrapper>
                                    <Payment.Input placeholder="Accra" />
                                 </Payment.InputWrapper>
                              </Payment.One>

                              <Payment.One>
                                 <Payment.Label>Expiration - YY</Payment.Label>
                                 <Payment.InputWrapper>
                                    <Payment.Input placeholder="0233" />
                                 </Payment.InputWrapper>
                              </Payment.One>
                              <Payment.One>
                                 <Payment.Label>CVV</Payment.Label>
                                 <Payment.InputWrapper>
                                    <Payment.Input placeholder="0233" />
                                 </Payment.InputWrapper>
                              </Payment.One>
                           </Payment.InputRow>
                        </Payment.Form>
                     </Payment.FormWrapper>
                  </Payment.ColContent>
               </Payment.Col>
            </Payment.Container>
            <Payment.CheckoutBtnSection>
               <Payment.CheckoutBtn>Proceed to Payment</Payment.CheckoutBtn>
            </Payment.CheckoutBtnSection>
         </Payment.Wrapper>
      </Payment>
   );
}
