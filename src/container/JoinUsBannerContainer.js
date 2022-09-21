import React from "react";
import { JoinUs } from "../components";

const img = {
  image: "/images/join_us_image.png",
  alt: "join_us_image",
};

export default function JoinUsBannerContainer() {
  return (
    <JoinUs>
      <JoinUs.Container>
        <JoinUs.Left>
          <JoinUs.ImageWrapper>
            <JoinUs.Image src={img.image} alt={img.alt} />
          </JoinUs.ImageWrapper>
        </JoinUs.Left>

        <JoinUs.Right>
          <JoinUs.Title>Why Join Us</JoinUs.Title>
          {/* ------1st ----- */}
          <JoinUs.Reason>
            <JoinUs.SubTitle>Faster booking and checkout</JoinUs.SubTitle>
            <JoinUs.Point>Manage and cancel your trips with ease</JoinUs.Point>
            <JoinUs.Point>
              Save your payment method and billing information
            </JoinUs.Point>
            <JoinUs.Point>
              Save up to 5 passengers to your account!
            </JoinUs.Point>
          </JoinUs.Reason>

          {/* ------2nd ----- */}
          <JoinUs.Reason>
            <JoinUs.SubTitle>Save money on your tickets</JoinUs.SubTitle>
            <JoinUs.Point>
              Earn up to 6% of the value of your ticket in credits
            </JoinUs.Point>
            <JoinUs.Point>
              Get access to all your transactions and credits history
            </JoinUs.Point>
            <JoinUs.Point>
              Redeem your GO credits anytime during checkout!
            </JoinUs.Point>
          </JoinUs.Reason>
          <JoinUs.RegisterButton>Create Account</JoinUs.RegisterButton>
        </JoinUs.Right>
      </JoinUs.Container>
    </JoinUs>
  );
}
