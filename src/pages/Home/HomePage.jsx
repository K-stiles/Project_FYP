import React from "react";
import { FeatureSponsorWrapper, HeroSection } from "../../components";
import {
  AboutUsContainer,
  BannerContainer,
  ContactContainer,
  FaqContainer,
  JoinUsBannerContainer,
  PricingContainer,
  TestimonialContainer,
  TravelledRoutesContainer,
} from "../../container";
import { HomeWrapper } from "./home.styled";

export default function HomePage() {
  return (
    <HomeWrapper>
      <HeroSection />
      <FeatureSponsorWrapper />
      <PricingContainer />
      <BannerContainer />
      <AboutUsContainer />
      <TravelledRoutesContainer />
      <JoinUsBannerContainer />
      <FaqContainer />
      <TestimonialContainer />
      <ContactContainer />
    </HomeWrapper>
  );
}
