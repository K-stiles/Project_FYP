import styled from "styled-components";

export const PictureBarWrapper = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   height: 100vh;
   width: 60px;
   background-color: ${({ theme }) => theme.background};
   /* z-index: 100; */
`;
export const PictureBarSection = styled.div`
   height: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
   padding: 20px 5px;
   border-left: 1px solid ${({ theme }) => theme.border};
   position: relative;
   /* background-color: ${({ theme }) => theme.red}; */
`;
export const CloseWrapper = styled.div`
   width: 40px;
   padding: 10px;
   height: auto;
   cursor: pointer;
   margin-top: 5px;
`;
export const CloseIcon = styled.img`
   width: 100%;
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
`;
export const ArrowIcon = styled.img`
   width: 100%;
`;
export const ArrowLine = styled.div`
   width: 100%;
   position: absolute;
   bottom: 80px;
   border-bottom: 1px solid ${({ theme }) => theme.border};
`;
