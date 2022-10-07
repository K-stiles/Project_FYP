import styled from "styled-components";

export const Section = styled.section`
   /* position: relative;
   left: 88px;
   height: 100%;
   width: calc(100%-88px);*/

   background-color: ${({ theme }) => theme.background};
   position: absolute;
   top: 0;
   left: 250px;
   height: 100vh;
   width: calc(100% - 250px);

   padding: 20px;
   /* background-color: var(--body-color);
    transition: var(--tran-05); */
`;

export const Container = styled.div``;

export const Wrapper = styled.div``;

export const Header = styled.h1`
   font-size: 5rem;
   color: ${({ theme }) => theme.text};
`;
