import React from "react";
import {
  AboutUsSection,
  ContactSection,
  FaqSection,
  FeatureSponsorWrapper,
  HeroSection,
  TestimonialSection,
} from "../../components";
import { PricingContainer } from "../../container";
import { HomeWrapper } from "./home.styled";

export default function HomePage() {
  return (
    <HomeWrapper>
      <HeroSection />
      <FeatureSponsorWrapper />
      <PricingContainer />
      <AboutUsSection />
      <FaqSection />
      <TestimonialSection />
      <ContactSection />
    </HomeWrapper>
  );
}
