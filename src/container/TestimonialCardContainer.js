import React from "react";
import { Testimonial } from "../components";

export default function TestimonialCardContainer(item) {
  console.log(item.dev);
  return (
    <Testimonial.Card>
      <Testimonial.ImageContainer>
        <Testimonial.Developer
          src={"/images/businessCoupleTransport.png"}
          alt={"quote-left"}
        />
      </Testimonial.ImageContainer>

      <Testimonial.CardContent>
        <Testimonial.CardTitle>{item.dev}</Testimonial.CardTitle>
        <Testimonial.TopQuote
          src={"/images/quote-left.png"}
          alt={"quote-left"}
        />
        <Testimonial.CardDescription>
          {item.description}
        </Testimonial.CardDescription>

        <Testimonial.BottomQuote
          src={"/images/quote-right-1.png"}
          alt={"quote-right"}
        />
      </Testimonial.CardContent>

      <Testimonial.DevRole>Group Member | Developer</Testimonial.DevRole>
      <Testimonial.SocialLinks>
        <Testimonial.Youtube
          src={"/images/youtube.png"}
          alt={"youtube-right"}
        />
        <Testimonial.Github src={"/images/github.png"} alt={"github-right"} />
        <Testimonial.Twitter
          src={"/images/twitter.png"}
          alt={"twitter-right"}
        />
      </Testimonial.SocialLinks>
    </Testimonial.Card>
  );
}
