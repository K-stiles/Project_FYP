import styled from "styled-components";

export const Section = styled.section`
  /* width: 1920px; */
  /* height: 470px; */

  background: #024f82;
`;
export const Container = styled.div`
  /* background: #02f134; */
  padding: 30px 10%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
export const SubFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10%;

  background: #02416b;
`;
export const SubLeft = styled.div`
  flex-grow: 3;
`;
export const SubRight = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  text-transform: lowercase;
  cursor: pointer;

  color: #ffffff;
`;

export const Col = styled.div`
  /* background-color: red; */
  margin-bottom: 20px;
`;
export const Inner = styled.div`
  display: grid;
  justify-content: end;
  /* background-color: tomato; */
`;
export const Header = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 21px;
  text-transform: uppercase;

  margin-bottom: 20px;

  color: #ffffff;
`;
export const Link = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  cursor: pointer;
  text-transform: capitalize;

  margin: 5px;
  color: #ffffff;
`;
export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Socials = styled.img`
  width: 21px;
  height: 18px;
  cursor: pointer;
`;
