import React from "react";
import { Testimonial } from "../components";

export default function TestimonialContainer() {
  return (
    <Testimonial>
      <Testimonial.Wrapper>
        <Testimonial.Title>Frequently ask questions</Testimonial.Title>
        <Testimonial.SubTitle>
          A handpicked collection of beautiful color gradients for designers and
          developers
        </Testimonial.SubTitle>

        <Testimonial.Container>
          <Testimonial.Card>
            <Testimonial.ImageContainer>
              <Testimonial.Developer
                src={"/images/businessCoupleTransport.png"}
                alt={"quote-left"}
              />
            </Testimonial.ImageContainer>
            <Testimonial.CardTitle>Kwaku Stiles</Testimonial.CardTitle>
            <Testimonial.CardContent>
              <Testimonial.TopQuote
                src={"/images/quote-left.png"}
                alt={"quote-left"}
              />
              <Testimonial.CardDescription>
                Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once
                one of Silicon Valley's greatest success stories, Facebook has
                been under constant fire for the past five years, roiled by
                controversies and crises.
              </Testimonial.CardDescription>

              <Testimonial.BottomQuote
                src={"/images/quote-right-1.png"}
                alt={"quote-right"}
              />
            </Testimonial.CardContent>

            <Testimonial.DevRole>Group Member | Developer</Testimonial.DevRole>
            <Testimonial.SocialLinks
              style={{
                width: "92.96px",
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Testimonial.Youtube
                src={"/images/youtube.png"}
                alt={"youtube-right"}
              />
              <Testimonial.Github
                src={"/images/github.png"}
                alt={"github-right"}
              />
              <Testimonial.Twitter
                src={"/images/twitter.png"}
                alt={"twitter-right"}
              />
            </Testimonial.SocialLinks>
          </Testimonial.Card>
        </Testimonial.Container>
      </Testimonial.Wrapper>
    </Testimonial>
  );
}
