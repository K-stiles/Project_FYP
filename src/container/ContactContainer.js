import React from "react";
import { Contact } from "../components";

export default function ContactContainer() {
  // handleSubmit(event) {
  //     event.preventDefault();
  //   }

  return (
    <Contact>
      <Contact.Wrapper>
        <Contact.Title>contact us</Contact.Title>

        <Contact.Container>
          <Contact.Inner>
            <Contact.LeftPane>
              <Contact.Addressing>
                {/* -------- */}
                <Contact.MiniTitle>Address</Contact.MiniTitle>
                <Contact.Info>McCarthy Hill</Contact.Info>
                <Contact.Info>Accra - Ghana</Contact.Info>
                {/* ------ */}
              </Contact.Addressing>
              <Contact.Phone>
                <Contact.MiniTitle>Phone</Contact.MiniTitle>
                {/* ------ */}
                <Contact.Info>+233 553 741 256</Contact.Info>
                <Contact.Info>+0003 6652 1319</Contact.Info>
                {/* ------ */}
              </Contact.Phone>
              <Contact.Email>
                <Contact.MiniTitle>Email</Contact.MiniTitle>
                {/* ------ */}
                <Contact.Info>michealessuman08@gmail.com</Contact.Info>
                <Contact.Info>theophilus@gmail.com</Contact.Info>
                <Contact.Info>davis@gmail.com</Contact.Info>
                {/* ------ */}
              </Contact.Email>
            </Contact.LeftPane>

            <Contact.RightPane>
              <Contact.MaxTitle>Send us a message</Contact.MaxTitle>
              <Contact.SubTitle>
                Once one of Silicon Valley's greatest success stories, Facebook
                has been under constant fire for the past five years, roiled by
                controversies and crises.
              </Contact.SubTitle>

              <Contact.FormWrapper>
                <Contact.Form action="#">
                  <Contact.InputWrapper>
                    <Contact.NameInput
                      //   name={"name"}
                      type="text"
                      placeholder="Enter your name"
                      // value={name}
                      onChange={() => console.log("name")}
                    />
                  </Contact.InputWrapper>
                  <Contact.InputWrapper>
                    <Contact.EmailInput
                      //   name={"email"}
                      type="text"
                      placeholder="Enter your email"
                      // value={email}
                      onChange={() => console.log("email")}
                    />
                  </Contact.InputWrapper>
                  <Contact.TextareaWrapper>
                    <Contact.MsgBox
                      placeholder="Message Box one"
                      // value={"msg box-value"}
                      onChange={() => console.log("msg box")}
                    />
                  </Contact.TextareaWrapper>

                  <Contact.SubmitButton>Submit</Contact.SubmitButton>
                </Contact.Form>
              </Contact.FormWrapper>
            </Contact.RightPane>
          </Contact.Inner>
        </Contact.Container>
      </Contact.Wrapper>
    </Contact>
  );
}
