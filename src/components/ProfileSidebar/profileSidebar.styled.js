import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Section = styled.section`
   width: 260px;
   background: ${({ theme }) => theme.card};
   border-right: 2px solid ${({ theme }) => theme.border};
   transition: all 0.5s ease;
`;

export const Container = styled.div`
   height: 100%;
   padding: 85px 20px 70px;

   display: flex;
   flex-direction: column;
   /* background: ${({ theme }) => theme.green}; */
`;
export const LabelRow = styled(Link)`
   text-decoration: none;
   color: inherit;

   display: flex;
   align-items: center;
   column-gap: 10px;
   cursor: pointer;

   margin-bottom: 30px;
`;
export const LogOut = styled.p``;

export const Label = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 0.9rem;
   line-height: 18px;
   display: flex;
   align-items: center;
   text-transform: uppercase;

   color: ${({ theme }) => theme.text};
   &:hover {
      color: ${({ theme }) => theme.primary};
   }
`;
export const LabelIcon = styled.img`
   width: 25px;
   object-fit: contain;
`;
export const Labels = styled.div``;

export const LogoutRow = styled.button`
   outline: none;
   border: none;
   padding: 0.5rem;

   display: flex;
   align-items: center;
   column-gap: 10px;
   cursor: pointer;

   margin-top: auto;
   background-color: ${({ theme }) => theme.card};
`;
