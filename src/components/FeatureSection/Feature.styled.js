import styled from "styled-components";

export const FeatureGradientWrapper = styled.section`
  /* background: linear-gradient(to bottom, #fff 0%, #02416b 100%); */
`;
export const Section = styled.section`
  margin: 10px 10%;
`;
/* @media (max-width: 1000px) {
    ${FeatureItem}:last-of-type h2 {
      margin-bottom: 50px;
    }
  } */

export const FeatureInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

export const FeaturePane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const FeatureMainTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #02416b;
  /* color: #fff; */
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const FeatureTitle = styled.h1`
  margin-bottom: 8px;
  color: #fff;
  /* color: #0088a9; */
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FeatureSubTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const FeatureImage = styled.img`
  max-width: 100%;
  height: auto;
`;
