import styled from "styled-components";

export const CardWrapper = styled.div`
   width: 100%;
   height: 280px;
   border-radius: 10px;
   padding: 20px 30px;

   background: linear-gradient(90deg, #1871ac 0%, #1da1f2 63.86%);
`;

export const Card = styled.div`
   /* background: #000; */
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const CardContent = styled.div`
   /* background: #eee; */
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
export const Item = styled.div`
   /* background: #fcccef; */
   height: 70px;

   display: flex;
   align-items: center;
`;

export const Info = styled.div``;
export const InfoText = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;

   margin: 10px 0;

   color: ${({ theme }) => theme.white};
`;
export const Hash = styled.div`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;

   color: ${({ theme }) => theme.white};
`;
export const Visa = styled.img`
   width: 90px;
`;
export const CardTangle = styled.img`
   width: 50px;
   height: 41px;
   background-color: aliceblue;
   border-radius: 10px;
`;
