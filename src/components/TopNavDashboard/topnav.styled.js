import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
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

   /* width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 17.4px 20px;
   border-bottom: 1px solid ${({ theme }) => theme.border}; */
`;
export const SearchWrapper = styled.div`
   width: 330px;
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 10px 15px;
   border-radius: 10px;
   border: 1px solid ${({ theme }) => theme.border};
   background-color: ${({ theme }) => theme.card};
   box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
`;
export const SearchInput = styled.input`
   width: 100%;
   height: 100%;
   outline: none;
   border: none;
   font-size: 0.85rem;
   font-weight: 500;
   padding: 5px;
   background-color: ${({ theme }) => theme.transparent};

   &::-webkit-input-placeholder {
      /* Edge */
      font-weight: 700;
      color: ${({ theme }) => theme.gray};
   }

   &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-weight: 700;
      color: ${({ theme }) => theme.gray};
   }

   &::placeholder {
      font-weight: 700;
      color: ${({ theme }) => theme.gray};
   }
`;

export const SearchIconWrapper = styled.div`
   width: 30px;
   height: auto;
`;
export const SearchIcon = styled.img`
   width: 100%;
   height: 100%;
`;
export const RouteLinks = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
`;

export const NotifySection = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
export const RouteLink = styled(NavLink)`
   text-decoration: none;
   color: inherit;
   padding: 10px 15px;
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
