import styled from "styled-components";

export const Section = styled.section`
  background-color: #d7f2ff;
  padding: 10px 2%;
  margin-bottom: 100px;

  /* height: 500px; */
`;
export const Container = styled.div`
  padding: 10px 0;
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Left = styled.div`
  position: relative;
`;
export const Right = styled.div`
  padding: 20px 0 30px;
`;

export const Reason = styled.div`
  /* background-color: red; */
  margin: 5% 0px;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 55px;

  margin: 0%;
  color: #0088cc;
`;
export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 21px;
  text-transform: uppercase;

  color: #02416b;
`;
export const Point = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 18px;
  text-transform: capitalize;
  margin: 5px 0;

  color: #0088cc;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 585px;
  left: 10%;
  top: -15%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const RegisterButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  padding: 10px 25px;
  margin-top: 5px;

  color: #ffffff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-transform: uppercase;

  background-color: #0088cc;
  transition: transform 0.3s ease 0s;
  &:hover {
    transform: scale(1.02);
    color: #0088cc;
    background-color: #ffffff;
  }
`;
