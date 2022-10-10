import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
   position: relative;
   height: 100vh;
   left: 280px;
   width: calc(100% - 280px);
   transition: all 0.5s ease;
   /* background-color: ${({ theme }) => theme.background}; */
`;

export const Container = styled.div`
   display: grid;
   grid-template-columns: 9.4fr 0.6fr;
   height: 100%;

   /* background: #000; */
`;

export const TopRegion = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 17.4px 20px;
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const SearchWrapper = styled.div`
   width: 330px;
   display: flex;
   align-items: center;
   gap: 10px;

   padding: 10px 15px;
   border-radius: 10px;
   border: 1px solid ${({ theme }) => theme.border};
   background-color: ${({ theme }) => theme.white};
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
      ${({ theme }) => theme.gray};
   }

   &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-weight: 700;
      ${({ theme }) => theme.gray};
   }

   &::placeholder {
      font-weight: 700;
      ${({ theme }) => theme.gray};
   }
`;

export const SearchIconWrapper = styled.div`
   width: 30px;
   height: auto;
   /* background: #000; */
`;
export const SearchIcon = styled.img`
   width: 100%;
   height: 100%;
`;
export const RouteLinks = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   /* background-color: ${({ theme }) => theme.red}; */
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
   /* background-color: cyan; */
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

export const SubHeader = styled.h2`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;
   color: ${({ theme }) => theme.gray_label};
`;
export const MainHeader = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;

   color: ${({ theme }) => theme.text};
`;

export const CentralRegion = styled.div`
   width: 100%;
   height: 100%;
   padding: 20px;
   /* display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 17.4px 20px;
   border-bottom: 1px solid ${({ theme }) => theme.border}; */
   background-color: cyan;
`;
export const PictureBar = styled.div`
   height: 100vh;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
   padding: 20px 5px;
   border-left: 1px solid ${({ theme }) => theme.border};

   position: relative;
   /* background-color: red; */
`;
export const CloseWrapper = styled.div`
   width: 40px;
   padding: 10px;
   height: auto;
   cursor: pointer;
   margin-top: 5px;

   /* background-color: #fffddd; */
`;
export const CloseIcon = styled.img`
   width: 100%;
   /* height: 100%; */
`;
export const Line = styled.div`
   width: 100%;
   position: absolute;
   top: 84.5px;
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const UsersContainer = styled.div`
   height: 100%;
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   justify-content: center;

   height: 100%;
   /* background-color: #fffddd; */
`;

export const UserImageWrapper = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 30px;
   object-fit: cover;
`;
export const UserImage = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 40px;
`;

export const ArrowWrapper = styled.div`
   width: 40px;
   padding: 10px;
   height: auto;
   /* background-color: #fffddd; */
`;
export const ArrowIcon = styled.img`
   width: 100%;
   /* height: 100%; */
`;
export const ArrowLine = styled.div`
   width: 100%;
   position: absolute;
   bottom: 80px;
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
