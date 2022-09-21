import React from "react";
import { Footer } from "../components";

const images = [
  {
    id: "one",
    img: "/images/footer-github.png",
    alt: "github",
  },
  {
    id: "two",
    img: "/images/footer-twitter.png",
    alt: "twitter",
  },
  {
    id: "three",
    img: "/images/footer-youtube.png",
    alt: "youtube",
  },
];

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Col>
          <Footer.Header>Company</Footer.Header>
          <Footer.Link>About Us</Footer.Link>
          <Footer.Link>Our Services</Footer.Link>
          <Footer.Link>Privacy Poolicy</Footer.Link>
          <Footer.Link>Afiliate Programs</Footer.Link>
        </Footer.Col>
        <Footer.Col>
          <Footer.Header>Get Help</Footer.Header>
          <Footer.Link>FAQ</Footer.Link>
          <Footer.Link>How to book trips</Footer.Link>
          <Footer.Link>payment options</Footer.Link>
          <Footer.Link>Afiliate Programs</Footer.Link>
        </Footer.Col>
        <Footer.Col>
          <Footer.Header>Company</Footer.Header>
          <Footer.Link>About Us</Footer.Link>
          <Footer.Link>Our Services</Footer.Link>
          <Footer.Link>Privacy Poolicy</Footer.Link>
          <Footer.Link>Afiliate Programs</Footer.Link>
        </Footer.Col>
        <Footer.Col>
          <Footer.Inner>
            <Footer.Header>FOLLOW US</Footer.Header>
            <Footer.SocialsWrapper>
              <Footer.Socials src={images[0].img} alt={"image"} />
              <Footer.Socials src={images[1].img} alt={"image"} />
              <Footer.Socials src={images[2].img} alt={"image"} />
            </Footer.SocialsWrapper>
          </Footer.Inner>
        </Footer.Col>
      </Footer.Container>

      <Footer.SubFooter>
        <Footer.SubLeft>
          <Footer.Text>
            Copyright © 2022 Famek).com All rights reserved
          </Footer.Text>
        </Footer.SubLeft>
        <Footer.SubRight>
          <Footer.Text>Cookies</Footer.Text>
          <Footer.Text>Security</Footer.Text>
          <Footer.Text>Terms of Service</Footer.Text>
          <Footer.Text>Privacy Statement</Footer.Text>
        </Footer.SubRight>
      </Footer.SubFooter>
    </Footer>
  );
}
