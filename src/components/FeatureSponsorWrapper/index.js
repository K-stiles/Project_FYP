import React from "react";
import FeatureSection from "../FeatureSection";
import SponsorsSection from "../SponsorsSection";
import { Divider, GradientWrapper } from "./GradientWrapper.styled";

export default function FeatureSponsorWrapper() {
  return (
    <>
      <GradientWrapper>
        <SponsorsSection />
        <Divider>
          <FeatureSection />
        </Divider>
      </GradientWrapper>
    </>
  );
}
