import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 10%;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  /* background-color: blanchedalmond; */
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  text-align: center;
  text-transform: uppercase;
`;
export const SubTitle = styled.h3`
  color: #dbdada;
  width: 437px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  text-align: center;
  align-self: center;
`;

export const Card = styled.div`
  max-width: 400px;
  width: 100%;
  height: 500px;
  padding: 40px;

  border-radius: 20px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgba(255, 255, 255, 0.85)"};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 27px;
  height: auto;
`;
