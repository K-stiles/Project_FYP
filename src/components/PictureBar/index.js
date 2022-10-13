import React from "react";
import { userImages } from "../../utils";
import {
   ArrowIcon,
   ArrowLine,
   ArrowWrapper,
   CloseIcon,
   CloseWrapper,
   Line,
   PictureBarSection,
   PictureBarWrapper,
   UserImage,
   UserImageWrapper,
   UsersContainer,
} from "./picturebar.styled";

export default function PictureBar() {
   return (
      <PictureBarWrapper>
         <PictureBarSection>
            <CloseWrapper>
               <CloseIcon src={"/images/close-icon.png"} alt={"close icon"} />
            </CloseWrapper>
            <Line />
            <UsersContainer>
               {userImages.map((item) => (
                  <UserImageWrapper key={`userImages---${item.id}`}>
                     <UserImage
                        src={"/images/sideBarImage.png"}
                        alt={"close icon"}
                     />
                  </UserImageWrapper>
               ))}
            </UsersContainer>
            <ArrowLine />
            <ArrowWrapper>
               <ArrowIcon
                  src={"/images/arrow_forward.png"}
                  alt={"close icon"}
               />
            </ArrowWrapper>
         </PictureBarSection>
      </PictureBarWrapper>
   );
}
