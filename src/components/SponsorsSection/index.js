import React from "react";
import {
  LabelRow,
  Section,
  SectionContainer,
  SectionLabelsWrapper,
  SectionTitle,
  SponsorLogo,
} from "./Sponsors.styled";

import { sponsorData } from "../../utils";

export default function SponsorsSection() {
  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Sponsors</SectionTitle>
        <SectionLabelsWrapper>
          {sponsorData &&
            sponsorData.map((item) => (
              <LabelRow key={`sponsor-data-${item.id}`}>
                <SponsorLogo
                  src={item.logo}
                  alt={item.alt}
                  width={item.width}
                />
              </LabelRow>
            ))}
        </SectionLabelsWrapper>
      </SectionContainer>
    </Section>
  );
}
