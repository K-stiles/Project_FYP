import styled from "styled-components";

export const DashboardWrapper = styled.div`
   min-height: 100vh;
   transition: all 0.3s ease;
   background-color: ${({ theme }) => theme.background};
`;
