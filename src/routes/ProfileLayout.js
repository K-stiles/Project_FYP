import { Outlet } from "react-router-dom";
import styled from "styled-components";

import {
   CentralProfileHeaderContainer,
   ProfileNavbarContainer,
   ProfileSidebarContainer,
} from "../container";

export const Wrapper = styled.div`
   transition: all 0.3ss ease;
   display: grid;
   grid-template-columns: 1fr 9fr;
   /* overflow: hidden; */
`;
export const WhiteSpace = styled.div`
   position: relative;
   background: ${({ theme }) => theme.background};
`;
export const Container = styled.div``;
export const ProfileWrapper = styled.div`
   width: 150px;
   height: 150px;
   border-radius: 150px;
   border: 7px solid ${({ theme }) => theme.white};
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 10px;
   left: 40px;
`;
export const IconWrapper = styled.div`
   cursor: pointer;
   width: 40px;
   z-index: 90;
   position: absolute;
   top: 60px;
   left: 95px;
`;
export const ProfileImg = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 150px;
   object-fit: cover;
`;
export const Icon = styled.img`
   width: 100%;
`;
export const GridRows = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 9fr;
   /* overflow: hidden; */
`;

export default function ProfileLayout() {
   return (
      <>
         <ProfileNavbarContainer />
         <Wrapper>
            <ProfileSidebarContainer />
            <GridRows>
               <WhiteSpace>
                  <Container>
                     <IconWrapper>
                        <Icon
                           src="/images/profile-camera.png"
                           alt="profile-camera"
                        />
                     </IconWrapper>
                     <ProfileWrapper>
                        <ProfileImg
                           src="/images/businessCoupleTransport.png"
                           // src="/images/sideBarImage.png"
                           alt="user profille"
                        />
                     </ProfileWrapper>
                  </Container>
               </WhiteSpace>
               <CentralProfileHeaderContainer />
               <Outlet />
            </GridRows>
         </Wrapper>
      </>
   );
}
