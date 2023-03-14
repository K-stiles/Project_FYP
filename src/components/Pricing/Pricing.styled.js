import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 10%;
  /* background-color: blanchedalmond; */
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
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
  /* max-width: 300px; */
  /* width: 100%; */
  height: 600px;
  position: relative;
  /* height: auto; */
  padding: ${({ cardPadding }) =>
    cardPadding ? cardPadding : "20px 30px 10px"};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border-radius: 20px;
  background-color: ${({ cardColor }) =>
    cardColor ? cardColor : "rgba(255, 255, 255, 0.85)"};
`;
export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 40px;
  color: ${({ busCard }) => (busCard ? "#fff" : "#025993")};
`;

export const CardSubTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 25px;
  padding-bottom: 10px;
  color: ${({ busCard }) => (busCard ? "#fff" : "#a9a9aa")};
`;
export const CardLabel = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  text-overflow: ellipsis;
  /* width: 288px; */

  color: #35353f;
`;

export const SideHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;

  color: #ffffff;
`;
export const SideDescription = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #dbdada;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "10px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "10px")};
  gap: ${({ gap }) => (gap ? gap : "12px")};
`;
export const LineDivider = styled.div`
  margin: 2.5rem 0px 0px;
  /* width: 300px; */
  border: 1px dashed #a9a9aa;
  padding-left: 10px;

  align-self: center;
`;
export const Social = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 18px;
  text-transform: capitalize;
  color: #dbdada;
`;
export const Image = styled.img`
  width: 22px;
  height: auto;
`;
export const Bus = styled.img`
  width: 290px;
  height: auto;
`;
export const AbsoluteBus = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const CardPrice = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 40px;
  color: #025993;
  /* padding-left: 10px; */
`;
export const CardDistance = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 40px;
  color: #025993;
`;
export const CardButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  outline: none;
  border: none;
  border-radius: 30px;
  transition: transform 0.3s ease 0s;

  color: #fff;
  background-color: #02416b;

  padding: 1rem 5.5rem;
  font-size: 1.2rem;
  margin-top: auto;

  &:hover {
    transform: scale(1.02);
    color: red;
  }
`;
