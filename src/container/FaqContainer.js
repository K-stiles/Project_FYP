import React, { useEffect, useState, useRef, forwardRef } from "react";
import { Faq } from "../components";
import { Answer } from "../components/Faq/Faq.styled";

import { faqData } from "../utils";

const Image = {
  img: "/images/faq-img.png",
  alt: "faq-img",
  icon: "/images/angle-small-down.png",
  Iconalt: "chevron",
};

export default function FaqContainer() {
  const answerRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  function check() {
    setScrollHeight(answerRef.current.scrollHeight);
  }
  //   useEffect(() => {
  //     check();
  //   }, []);

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
              {faqData.map((item, id) => (
                <Faq.AccordionContent key={`faq-data-${id}`}>
                  <Faq.Header onClick={check}>
                    <Faq.Question>{item.question}</Faq.Question>
                    <Faq.Icon />
                  </Faq.Header>
                  <Answer ref={answerRef} scrollHeight={scrollHeight}>
                    {item.answer}
                  </Answer>
                  {/* {item.showLine && <Faq.Line />} */}
                </Faq.AccordionContent>
              ))}
            </Faq.Accordion>
          </Faq.FaqContainer>
        </Faq.Container>
      </Faq.Wrapper>
    </Faq>
  );
}

/* <Faq.Answer >
                   When the CIA's most skilled operative-whose true identity is
                   known to none-accidentally uncovers dark agency secrets, a
                   psychopathic former colleague puts a bounty on his head,
                   setting off a global manhunt by international assassins.
                 </Faq.Answer> */
