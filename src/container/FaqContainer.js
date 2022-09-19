import React, { useState } from "react";
import { Faq } from "../components";

import { faqData } from "../utils";

const Image = {
  img: "/images/faq-img.png",
  alt: "faq-img",
  icon: "/images/angle-small-down.png",
  Iconalt: "chevron",
};

export default function FaqContainer() {
  const [clicked, setClicked] = useState(null);
  // const [iconRotation, setIconRotation] = useState(false);
  function toggleAccordion(index) {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
    console.log(clicked, index);
  }

  return (
    <Faq>
      <Faq.Wrapper>
        <Faq.Title>Frequently ask questions</Faq.Title>
        <Faq.SubTitle>
          A handpicked collection of beautiful color gradients for designers and
          developers
        </Faq.SubTitle>
        <Faq.Container>
          <Faq.ImageWrapper>
            <Faq.Image src={Image.img} alt={Image.alt} />
          </Faq.ImageWrapper>

          <Faq.FaqContainer>
            <Faq.FaqTitle>Faq</Faq.FaqTitle>

            <Faq.Accordion>
              {faqData.map((item, index) => (
                <Faq.AccordionContent key={`faq-data-${index}`}>
                  <Faq.Header onClick={() => toggleAccordion(index)}>
                    <Faq.Question>{item.question}</Faq.Question>

                    {clicked === index ? <Faq.IconDown /> : <Faq.IconUp />}
                  </Faq.Header>
                  {clicked === index ? (
                    <Faq.Answer>{item.answer}</Faq.Answer>
                  ) : null}
                  {item.showLine && <Faq.Line />}
                </Faq.AccordionContent>
              ))}
            </Faq.Accordion>
          </Faq.FaqContainer>
        </Faq.Container>
      </Faq.Wrapper>
    </Faq>
  );
}
