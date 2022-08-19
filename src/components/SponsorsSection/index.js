import React from "react";
import {
  LabelRow,
  Section,
  SectionContainer,
  SectionLabelsWrapper,
  SectionTitle,
} from "./Sponsors.styled";

import {
  AppStoreIcon,
  GithubIcon,
  DiscordIcon,
  HuaweiIcon,
  MailchimpIcon,
  NetflixIcon,
  RedditIcon,
  SlackIcon,
  ShopifyIcon,
  YoutubeIcon,
} from "../../assets/svgIcons";

export default function SponsorsSection() {
  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Sponsors</SectionTitle>
        <SectionLabelsWrapper>
          <LabelRow>
            <AppStoreIcon />
          </LabelRow>
          <LabelRow>
            <GithubIcon />
          </LabelRow>
          <LabelRow>
            <DiscordIcon />
          </LabelRow>
          <LabelRow>
            <MailchimpIcon />
          </LabelRow>
          <LabelRow>
            <RedditIcon />
          </LabelRow>
          <LabelRow>
            <SlackIcon />
          </LabelRow>
          <LabelRow>
            <ShopifyIcon />
          </LabelRow>
          <LabelRow>
            <YoutubeIcon />
          </LabelRow>
          <LabelRow>
            <HuaweiIcon />
          </LabelRow>
          <LabelRow>
            <NetflixIcon />
          </LabelRow>
        </SectionLabelsWrapper>
      </SectionContainer>
    </Section>
  );
}
