import styled from "styled-components";

export const Section = styled.section`
  padding: 30px 10%;
`;
export const Wrapper = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: #d7f1ff;
  /* background-color: rgba(255, 255, 255, 0.85); */
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  border-radius: 10px;
`;
export const Info = styled.div`
  border-radius: 0px 10px 10px 0px;
  padding-right: 30px;

  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px 0 0 10px;
`;
export const Hand = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
`;
export const HandWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -5px;
`;
export const Title = styled.h1`
  margin-top: 3rem;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;

  color: #0088cc;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #35353f;
  width: 600px;
  margin-bottom: 20px;
`;
