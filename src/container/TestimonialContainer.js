import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../constants/constantStyles.css";

import { Testimonial } from "../components";
import TestimonialCardContainer from "./TestimonialCardContainer";
const testimonials = [
  {
    id: "ojnxa",
    dev: "Kwaku Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "dscns",
    dev: "Davis Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "2321ojnxa",
    dev: "Theo Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "ojn231jidwnjxa",
    dev: "Desy Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "nnklojnxa",
    dev: "One Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "yytszzxcbn,lo0dscns",
    dev: "Two Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "88902321ojnxa",
    dev: "Three Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
  {
    id: "0987ojn231jidwnjxa",
    dev: "Four Stiles",
    description: `Kwaku Stiles is inviting you to a scheduled Zoom meeting.Once one of
          Silicon Valley's greatest success stories, Facebook has been under
          constant fire for the past five years, roiled by controversies and
          crises.`,
  },
];

export default function TestimonialContainer() {
  return (
    <Testimonial>
      <Testimonial.Wrapper>
        <Testimonial.TopWrapper>
          <Testimonial.Title>Client's Feedback</Testimonial.Title>
          <Testimonial.SubTitle>
            A handpicked collection of beautiful color gradients for designers
            and developers
          </Testimonial.SubTitle>
        </Testimonial.TopWrapper>

        <Testimonial.Container>
          <Swiper
            modules={[Pagination, Navigation]}
            className="mySwiper"
            navigation={true}
            loopFillGroupWithBlank={true}
            slidesPerView={4}
            spaceBetween={15}
            loop={true}
            slidesPerGroup={1}
            grabCursor={false}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                {TestimonialCardContainer(item)}
                {/* <Testimonial.Card>
                  <div
                    style={{
                      background: "aliceblue",
                      position: "relative",
                      width: "100%",
                      height: "140px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-20px",
                        left: "25%",
                      }}
                    >
                      <Testimonial.ImageContainer>
                        <Testimonial.Developer
                          src={"/images/businessCoupleTransport.png"}
                          alt={"quote-left"}
                        />
                      </Testimonial.ImageContainer>
                    </div>
                  </div>
                  <Testimonial.CardTitle>bgyg{item.dev}</Testimonial.CardTitle>
                  <Testimonial.CardContent>
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

                  <Testimonial.DevRole>
                    Group Member | Developer
                  </Testimonial.DevRole>
                  <Testimonial.SocialLinks>
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
                </Testimonial.Card> */}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <TestimonialCardContainer /> */}
          {/* <Testimonial.SliderNavigator onClick={() => swiper.slideNext()}>
            <Testimonial.SNavIcon src={"/images/angle-arrow-white.png"} alt />
          </Testimonial.SliderNavigator>
          <Testimonial.SliderNavigator onClick={() => swiper.slidePrev()}>
            <Testimonial.SNavIcon src={"/images/angle-arrow-blue.png"} alt />
          </Testimonial.SliderNavigator> */}
        </Testimonial.Container>
      </Testimonial.Wrapper>
    </Testimonial>
  );
}
