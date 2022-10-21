import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
   height: calc(100vh - 80px);
   padding: 20px;
   background: ${({ theme }) => theme.background};
`;

export const Container = styled.div`
   padding: 0px 15%;
   height: 95%;
   /* height: 800px; */
   /* background: aliceblue; */
`;

// ----------------------
export const HeaderSection = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   /* background: #fff; */
`;
export const MainHeader = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 2rem;
   line-height: 55px;
   margin: 0;
   text-transform: uppercase;
   color: ${({ theme }) => theme.text};
`;
export const EditIcon = styled.img`
   width: 20px;
`;
export const CenterSection = styled.div`
   /* background: red; */
   height: 90%;

   display: flex;
   align-items: center;
   justify-content: center;
`;
export const Content = styled.div`
   /* background: #000; */
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
export const SuccessImg = styled.img`
   width: 550px;
   height: auto;
   object-fit: over;
`;
export const MediumText = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 21px;

   color: #829ba4;
`;
export const BoldText = styled.p`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;
   text-align: center;
   width: 972px;

   /* icon */

   color: #0088cc;
`;

export const BackBtn = styled(Link)`
   text-decoration: none;
   color: inherit;
   margin-top: 50px;

   padding: 1rem 5rem;
   border-radius: 10px;
   font-style: normal;
   font-weight: 400;
   font-size: 1rem;
   line-height: 21px;

   cursor: pointer;
   color: ${({ theme }) => theme.white};
   background: ${({ theme }) => theme.primary};
   transition: transform 0.3s ease 0s;

   &:hover {
      transform: scale(1.02);
   }
`;
