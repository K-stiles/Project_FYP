import styled from "styled-components";

export const Section = styled.section`
   display: flex;
   align-items: center;
   background: ${({ theme }) => theme.primary};
   padding: 0 30px 0 200px;
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   /* background: red; */

   height: 100%;
   width: 100%;
`;

export const ProfileName = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;

   text-transform: uppercase;

   color: ${({ theme }) => theme.white};
`;
export const ProfileLogout = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 1.3rem;
   line-height: 21px;
   text-transform: capitalize;

   margin-left: auto;

   color: ${({ theme }) => theme.white};
`;
