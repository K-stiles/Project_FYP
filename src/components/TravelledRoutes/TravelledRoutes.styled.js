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

  position: relative;
  border-radius: 1rem;
  transition: all 0.8s;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.25s;

  display: flex;
  align-items: flex-end;

  &:hover {
    opacity: 1;
  }

  & > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  &:hover > * {
    transform: translateY(0px);
  }
`;

export const Location = styled.div`
  height: 37px;
  left: 228px;
  top: 6629px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 20px;
  padding: 0 10px;

  background: rgba(255, 255, 255, 0.49);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;
