import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

export const Section = styled.section`
  padding: 10px 10%;
  /* background-color: aliceblue; */
`;

export const Wrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  /* height: 660px; */
  background: rgba(255, 255, 255, 0.85);
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 10px;
`;
export const FaqContainer = styled.div`
  /* background-color: pink; */
`;
export const Accordion = styled.div`
  /* background-color: pink; */
`;
export const ImageWrapper = styled.div`
  padding: 60px;
  width: 100%;
  height: 90%;
  /* background-color: blueviolet; */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* ---------------------codingLab---------------------------------- */
  min-height: 50px;
  padding: 0 15px;
  cursor: pointer;
`;
export const Line = styled.div`
  display: block;
  height: 1px;
  width: 100%;
  /* margin: 15px 0; */
  margin: 5px 0;
  background: #025993;
`;
export const AccordionContent = styled.div`
  /* ---------------------codingLab---------------------------------- */
  overflow: hidden;
  border: 1px solid #ffd6b3;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;

  color: #ffffff;
  text-align: center;
`;
export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #dbdada;
  text-align: center;
  width: 437px;
  height: auto;
  margin-top: 5px;
`;
export const FaqTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;

  color: #025993;
  text-transform: uppercase;
`;
export const Question = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;

  color: #02416b;
`;
export const Answer = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #025993;
  /* ---------------------codingLab---------------------------------- */
  padding: 0 15px;
  height: ${({ scrollHeight }) => (scrollHeight ? `${scrollHeight}px` : "0px")};
  transition: all 0.3s linear 0s;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Icon = styled(FaChevronUp)`
  width: 15px;
  height: auto;

  color: #02416b;
  /* transform: rotate(180deg); */
`;
