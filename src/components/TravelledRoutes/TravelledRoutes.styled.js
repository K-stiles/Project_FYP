import styled from "styled-components";

export const Section = styled.section`
  padding: 10px 10%;
  /* margin-top: -10px; */
  margin-bottom: 70px;
  /* background-color: aliceblue; */
`;
export const Wrapper = styled.div`
  /* background-color: green; */
`;
export const Container = styled.div`
  /* background-color: red; */
  margin-top: 25px;
  padding: 0 95px 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  row-gap: 30px;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;

  color: #ffffff;
`;

export const ImageContainer = styled.div`
  width: 22rem;
  height: 28rem;
  cursor: pointer;
  /* background-color: aliceblue; */
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
