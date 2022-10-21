import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
   width: 100%;
   height: 80px;

   display: flex;
   align-items: center;
   padding: 0 40px;

   background: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.div`
   /* background: #ccc; */
   height: 100%;
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: space-between;
`;
export const Section = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
`;

export const Container = styled.div`
   /* background: yellow; */
`;

// ------------- Header Section
export const HeaderSection = styled.div`
   /* text-decoration: none;
   color: inherit; */

   width: 200px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 20px;
`;
export const HeaderTitle = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 28px;
   color: ${({ theme }) => theme.text};
`;
export const HeaderIconWapper = styled.div`
   width: 20px;
`;
export const HeaderIcon = styled.img`
   width: 100%;
`;

// --------------Top Nav ---------------
export const TSection = styled.div`
   position: fixed;
   top: 0;
   left: 280px;
   right: 60px;

   height: 85.8px;
   width: calc(100%-60px);
   z-index: 100;
   background: ${({ theme }) => theme.background};
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const TopRegion = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 17.4px 20px;
`;

export const RouteLinks = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;

   height: 100%;
   /* padding: 10px 20px; */
   /* background-color: ${({ theme }) => theme.green}; */
`;

export const RouteLink = styled(NavLink)`
   text-decoration: none;
   color: inherit;
   padding: 10px 15px;

   /* padding: 10px 20px; */
   /* background-color: ${({ theme }) => theme.red}; */
`;
export const LinkText = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 0.8rem;
   line-height: 20px;

   color: ${({ theme }) => theme.text};
   &:hover {
      color: ${({ theme }) => theme.primary};
   }
`;
export const NotifySection = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
export const ProfileWrapper = styled.div`
   width: 35px;
   height: 35px;
   object-fit: cover;
   cursor: pointer;
`;
export const BellWrapper = styled.div`
   width: 30px;
   height: 30px;
   cursor: pointer;
`;
export const BellIcon = styled.img`
   width: 100%;
   height: 100%;
`;
export const ProfileImage = styled.img`
   width: 100%;
   height: 100%;
`;
