import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
   position: absolute;
   top: 85px;
   right: 0;
   background: ${({ theme }) => theme.background};
   position: relative;

   padding: 40px;

   left: 280px;
   width: calc(100% - 340px);
   height: 100%;
   transition: all 0.5s ease;
`;
export const SectionOne = styled.section``;

export const MainHeaderSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin-top: 30px;
   /* background: ${({ theme }) => "#f3ed87"}; */
`;
export const HeaderSection = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
export const TopWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;

export const MainHeader = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;
   margin: 0px;
   color: ${({ theme }) => theme.text};
`;
export const EditIcon = styled.img`
   width: 20px;
`;

export const TopImages = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom: -5px;
`;
export const TopImageWrapper = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 30px;
   object-fit: cover;
   margin-left: ${({ index }) => (index == 0 ? "0px" : "-10px")};
   border: 2px solid #fff;
`;
export const ImageLayer = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 30px;
   background: ${({ theme }) => theme.card};
   margin-left: -10px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const ImageLayerText = styled.p`
   font-style: normal;
   font-weight: 800;
   font-size: 12px;
   line-height: 20px;
   text-align: center;
   color: ${({ theme }) => theme.primary};
`;
export const UserImageWrapper = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 30px;
   object-fit: cover;
`;
export const UserProfile = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 40px;
`;

export const GoBackBtn = styled.button`
   border: none;
   outline: none;

   padding: 0.8rem 1.5rem;
   border-radius: 30px;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 21px;

   cursor: pointer;
   color: ${({ theme }) => theme.primary};
   background: ${({ theme }) => "#E4ECFA"};
   transition: transform 0.3s ease 0s;

   &:hover {
      transform: scale(1.02);
   }
`;

export const SectionTwo = styled.section``;
export const Card = styled.section`
   width: 100%;
   /* height: 700px; */
   border-radius: 10px;
   padding: 20px 100px;
   margin-top: 20px;

   display: flex;
   flex-direction: column;
   row-gap: 10px;
   background: ${({ theme }) => theme.card};
`;
export const CardTitle = styled.section`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   text-transform: uppercase;

   color: ${({ theme }) => theme.primary};
`;
export const CardHeader = styled.section`
   width: 100%;
   height: 50px;
   padding: 10px;

   margin: 10px 0;

   /* background: ${({ theme }) => theme.primary}; */
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const CardRows = styled.section``;
export const CardRow = styled.section`
   width: 100%;
   height: 50px;
   padding: 10px;

   margin: 10px 0;
   display: flex;
   align-items: center;
   justify-content: space-between;

   /* background: ${({ theme }) => theme.primary}; */
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const CardRowOne = styled.section`
   display: flex;
   align-items: center;
   column-gap: 50px;

   width: 95%;
   height: 100%;

   /* background-color: yellowgreen; */
`;
export const CardRowTwo = styled.section`
   /* background-color: blue; */
   cursor: pointer;
`;

export const RowText = styled.section`
   /* background-color: red; */
   width: 20%;
   height: 100%;

   display: flex;
   align-items: center;
`;

export const Text = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 0.95rem;
   line-height: 18px;
   text-transform: capitalize;
   color: ${({ theme }) => theme.text};

   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;
export const CardInfo = styled.section`
   /* background: #ccc; */
   height: 100%;
   overflow: auto;

   /* Hide scrollbar for IE, Edge and Firefox */
   -ms-overflow-style: none; /* IE and Edge */
   scrollbar-width: none; /* Firefox */
   &::-webkit-scrollbar {
      display: none;
   }
`;

export const CardPricing = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   /* background: #000; */
   height: 50px;
   margin-top: auto;
   width: 50%;
`;
// export const PenWrapper = styled.div`
//    width: 50%;
// `;
export const Pen = styled.img`
   width: 16px;
`;

export const CardPrice = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   line-height: 18px;
   text-transform: capitalize;

   color: ${({ theme, amount }) => (amount ? theme.primary : theme.text)};
`;

export const SectionThree = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100px;

   padding-top: 20px;
   /* background: #000; */
`;

export const NextBtn = styled(Link)`
   text-decoration: none;
   color: inherit;

   display: flex;
   align-items: center;
   gap: 10px;
   padding: 1rem 2rem;
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
