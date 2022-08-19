import React from "react";
import {
  AboutUsSection,
  ContactSection,
  FaqSection,
  FeatureSection,
  FeatureSponsorWrapper,
  HeroSection,
  SponsorsSection,
  TestimonialSection,
} from "../../components";
import { PricingSection } from "../../container";
import { HomeWrapper } from "./home.styled";

export default function HomePage() {
  return (
    <HomeWrapper>
      <HeroSection />
      {/* <SponsorsSection />
      <FeatureSection /> */}
      <FeatureSponsorWrapper />
      <PricingSection />
      <AboutUsSection />
      <FaqSection />
      <TestimonialSection />
      <ContactSection />
    </HomeWrapper>
  );
}
