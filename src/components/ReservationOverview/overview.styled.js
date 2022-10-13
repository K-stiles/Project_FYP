import styled from "styled-components";

export const Section = styled.section`
   position: absolute;
   top: 85px;
   right: 0;
   background: ${({ theme }) => "#f53d87"};
   position: relative;
   height: 10%;

   left: 280px;
   width: calc(100% - 340px);
   height: 100%;
   transition: all 0.5s ease;
`;
