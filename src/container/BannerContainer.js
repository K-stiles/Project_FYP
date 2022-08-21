import React from "react";

import { Banner, PrimarySolidBtn } from "../components";

const images = {
  couple: "/images/businessCoupleTransport.png",
  coupleAlt: "businessCoupleTransport",
  hand: "/images/3dhand.png",
  handAlt: "3dhand.png",
};

export default function BannerContainer() {
  return (
    <Banner>
      <Banner.Wrapper>
        <Banner.Container>
          <Banner.Image src={images.couple} alt={images.coupleAlt} />

          <Banner.Info>
            <Banner.Title>jhibwsnjc</Banner.Title>
            <Banner.Description>
              You have been asked to log into the central server used for
              maintaining the git repository for the web api, which is located
              in the cloud_user's home directory, and correct the spelling
              within the file.
            </Banner.Description>
            <PrimarySolidBtn bgColor="#02416B" color="#fff" padding="10px 25px">
              Book A Seat Now
            </PrimarySolidBtn>
            <Banner.HandWrapper>
              <Banner.Hand src={images.hand} alt={images.handAlt} />
            </Banner.HandWrapper>
          </Banner.Info>
        </Banner.Container>
      </Banner.Wrapper>
    </Banner>
  );
}
