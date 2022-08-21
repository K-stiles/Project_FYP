import styled from "styled-components";

export const Section = styled.section`
  padding: 10px 10%;
  margin-top: 5rem;
`;
export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;

  color: #ffffff;
`;

export const MainTitle = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  text-transform: uppercase;

  color: #ffffff;
`;
export const SubTitle = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #dbdada;
  width: 437px;
  align-self: center;
  margin-top: 0.5rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #dbdada;
  margin-bottom: 2rem;
`;
