import React from "react";
import { About, PrimarySolidBtn } from "../components";

const Image = {
  img: "/images/about-img.png",
  alt: "about-img",
};

export default function AboutUsContainer() {
  return (
    <About>
      <About.Wrapper>
        <About.MainTitle>About Us</About.MainTitle>
        <About.SubTitle>
          A handpicked collection of beautiful color gradients for designers and
          developers
        </About.SubTitle>

        <About.Container>
          <div>
            <About.Header>
              FamekƆ will be your companion all the way till you arrive
            </About.Header>
            <About.Description>
              Let FamekƆ take you there without any stress. We are an online bus
              reservation system that gives you the ability to do enquiries and
              reserve seats from the comfort of your home.
            </About.Description>
            <PrimarySolidBtn>Read More</PrimarySolidBtn>
          </div>
          <About.Image src={Image.img} alt={Image.alt} />
        </About.Container>
      </About.Wrapper>
    </About>
  );
}
