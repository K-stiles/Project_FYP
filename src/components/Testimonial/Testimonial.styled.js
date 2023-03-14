import styled from "styled-components/macro";

export const Section = styled.section`
  padding: 100px 5%;
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
  width: 437px;
  text-align: center;
  align-self: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #dbdada;
  margin-bottom: 15px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background: gray; */
`;

//SLIDER CONTAINER
export const Container = styled.div`
  max-width: 100%;
  height: 600px;
  padding: 0px 5% 10px;
  margin-top: 1%;

  position: relative;
  /* background: red; */

  & > .swiper {
    width: 100%;
    height: 90%;
    position: unset;
    /* background: teal; */
    padding: 50px 5px 5px;
  }
  & .swiper-wrapper {
    box-sizing: border-box;
  }
  & .swiper-slide {
    /* background: #025993; */
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  /* background-color: #d7f2ff; */
  padding: 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  position: relative;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const CardTitle = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;

  color: #02416b;
  margin-bottom: 15px;
`;
export const DevRole = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-transform: uppercase;

  color: #02416b;
  margin-top: 10px;
`;

export const CardDescription = styled.div`
  padding: 10px 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #025993;
`;
export const ImageContainer = styled.div`
  width: 140px;
  height: 140px;
  background: #02416b;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  position: absolute;
  left: 28%;
  top: -50px;
  z-index: 999;
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
  /* max-width: 90px;
  max-height: 90px; */

  height: 90%;
  width: 90%;
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
  max-width: 30px;
  max-height: 20px;
`;

export const BottomQuote = styled.img`
  height: 100%;
  width: 100%;

  max-width: 30px;
  max-height: 20px;

  align-self: flex-end;
`;
export const SliderNavigator = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  /* background: transparent; */
  cursor: pointer;
`;
export const SNavIcon = styled.img`
  width: 20px;
  object-fit: contain;
`;

// //SLIDER CONTAINER SKELETON
// export const Container = styled.div`
//   max-width: 100%;
//   height: 550px;
//   padding: 20px 5%;
//   margin-top: 6%;

//   position: relative;

//   & > .swiper {
//     background: yellow;
//     width: 100%;
//     height: 100%;
//     position: unset;
//   }
//   & .swiper-wrapper {
//     background: red;
//     color: red;
//     box-sizing: border-box;
//   }
//   & .swiper-slide {
//     background: green;
//     padding: 10px;
//   }
// `;
