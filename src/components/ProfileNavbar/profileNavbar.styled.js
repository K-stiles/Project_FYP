import styled from "styled-components";

export const Section = styled.section`
   height: 80px;
   background: ${({ theme }) => theme.primary};
`;

export const Container = styled.div`
   padding: 20px;
   height: 100%;
   display: flex;
   align-items: center;
   column-gap: 10px;
`;
export const ProfileWrapper = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 60px;
   border: 3px solid ${({ theme }) => theme.white};

   display: flex;
   align-items: center;
   justify-content: center;
`;
export const ProfileImg = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50px;
   object-fit: cover;
`;
export const ProfileName = styled.h2`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;

   text-transform: uppercase;

   color: ${({ theme }) => theme.white};
`;
