import React from "react";
import {
  ContactSection,
  FaqSection,
  FeatureSponsorWrapper,
  HeroSection,
  TestimonialSection,
} from "../../components";
import {
  AboutUsContainer,
  BannerContainer,
  PricingContainer,
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
      <FaqSection />
      <TestimonialSection />
      <ContactSection />
    </HomeWrapper>
  );
}
