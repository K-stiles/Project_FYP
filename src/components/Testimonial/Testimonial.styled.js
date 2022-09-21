import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 10%;
  /* background-color: tomato; */
`;
export const Wrapper = styled.div`
  /* background-color: green; */
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;

  color: #ffffff;
`;
export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  /* width: 437px;
  align-self: center; */

  color: #dbdada;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  max-width: 100%;
  padding: 20px;
  /* background-color: aliceblue; */

  margin-top: 6%;
`;

export const Card = styled.div`
  width: 340px;
  height: 425px;
  background: #fff;
  padding: 30px 30px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  position: relative;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;

  color: #02416b;
  margin-top: 55px;
`;
export const DevRole = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;

  color: #02416b;
  margin-top: 10px;
`;

export const CardDescription = styled.div`
  /* text-align: justify; */
  margin: 15px 0px;
  width: 263px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #025993;
`;
export const ImageContainer = styled.div`
  width: 145px;
  height: 145px;
  background: #02416b;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 28%;
  top: -70px;
`;
export const SocialLinks = styled.div`
  width: 92.96px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Developer = styled.img`
  max-width: 130px;
  max-height: 130px;

  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  /* border: 2px solid red; */
`;
export const Youtube = styled.img`
  max-height: 15.456734657287598px;
  max-width: 21.940006256103516px;

  height: 100%;
  width: 100%;
`;
export const Github = styled.img`
  max-height: 21.39902687072754px;
  max-width: 21.940921783447266px;

  height: 100%;
  width: 100%;
`;
export const Twitter = styled.img`
  max-width: 21px;
  max-height: 18px;

  height: 100%;
  width: 100%;
`;
export const TopQuote = styled.img`
  height: 100%;
  width: 100%;
  max-width: 35px;
  max-height: 25px;
`;

export const BottomQuote = styled.img`
  height: 100%;
  width: 100%;

  max-width: 35px;
  max-height: 25px;

  align-self: flex-end;
`;

// @media (max-width: 1045px) {
//   .container .box {
//     width: calc(50% - 10px);
//     margin-bottom: 20px;
//   }
// }
// @media (max-width: 710px) {
//   .container .box {
//     width: 100%;
//   }
// }
