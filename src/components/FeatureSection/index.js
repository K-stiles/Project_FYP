import React from "react";
import {
  FeatureGradientWrapper,
  FeatureImage,
  FeatureInner,
  FeatureMainTitle,
  FeaturePane,
  FeatureSubTitle,
  FeatureTitle,
  Section,
} from "./Feature.styled";
import PrimarySolidBtn from "../Button";

import { featureData } from "../../utils";

export default function FeatureSection() {
  return (
    <FeatureGradientWrapper>
      <Section>
        <FeatureMainTitle>Feature</FeatureMainTitle>
        {featureData &&
          featureData.map((item) => (
            <FeatureInner key={item.id} direction={item.direction}>
              <FeaturePane>
                <FeatureImage src={item.image} alt={item.alt} />
              </FeaturePane>
              <FeaturePane>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureSubTitle>{item.description}</FeatureSubTitle>
                {item.btn && (
                  <PrimarySolidBtn margin={"20px 0 0"} padding={"10px 35px"}>
                    Buy Me
                  </PrimarySolidBtn>
                )}
              </FeaturePane>
            </FeatureInner>
          ))}
      </Section>
    </FeatureGradientWrapper>
  );
}
