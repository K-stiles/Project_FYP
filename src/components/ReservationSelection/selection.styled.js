import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
   position: absolute;
   top: 85px;
   right: 0;
   position: relative;
   height: 10%;

   left: 280px;
   width: calc(100% - 340px);
   height: 100%;
   transition: all 0.5s ease;
   background: ${({ theme }) => theme.background};
`;

// TODO: ----------------- AREA ONE -------------------
export const AreaOne = styled.div`
   padding: 20px;
`;
export const GoBackBtn = styled.button`
   border: none;
   outline: none;

   padding: 0.8rem 1.5rem;
   border-radius: 30px;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 21px;

   align-self: flex-start;

   cursor: pointer;
   color: ${({ theme }) => theme.primary};
   background: ${({ theme }) => "#E4ECFA"};
   transition: transform 0.3s ease 0s;

   &:hover {
      transform: scale(1.02);
   }
`;

export const TopSection = styled.div`
   display: flex;
   flex-direction: column;

   /* background: red; */
`;
export const MainHeaderSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   margin: 10px 0;
   /* background: #000; */
`;
export const HeaderSection = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
export const TopWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;

export const MainHeader = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;
   margin: 0px;
   color: ${({ theme }) => theme.text};
`;
export const EditIcon = styled.img`
   width: 20px;
`;

export const TopImages = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom: -5px;
`;
export const TopImageWrapper = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 30px;
   object-fit: cover;
   margin-left: ${({ index }) => (index == 0 ? "0px" : "-10px")};
   border: 2px solid #fff;
`;
export const ImageLayer = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 30px;
   background: ${({ theme }) => theme.card};
   margin-left: -10px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const ImageLayerText = styled.p`
   font-style: normal;
   font-weight: 800;
   font-size: 12px;
   line-height: 20px;
   text-align: center;
   color: ${({ theme }) => theme.primary};
`;
export const UserImageWrapper = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 30px;
   object-fit: cover;
`;
export const UserProfile = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 40px;
`;

export const InputWrapper = styled.div`
   width: 100%;
   height: 90px;
   border-radius: 10px;
   padding: 10px 20px;
   display: flex;
   column-gap: 10px;
   background: ${({ theme }) => theme.card};
   border: 1px solid ${({ theme }) => theme.border};
`;

export const InputOne = styled.div`
   flex: 3;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0 10px;
`;

export const OrigninLabel = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 20px;
   text-transform: uppercase;
   color: ${({ theme }) => theme.inputLabel};
`;
export const OrigninInputWrapper = styled.div`
   width: 100%;
   height: 50px;
`;
export const OrigninInput = styled.input`
   width: 100%;
   height: 100%;
   padding: 0 5px;
   outline: none;
   border: none;
   background-color: ${({ theme }) => theme.card};

   &::-webkit-input-placeholder {
      /* Edge */
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${({ theme }) => theme.inputLabel};
   }
   &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${({ theme }) => theme.inputLabel};
   }
   &::placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${({ theme }) => theme.inputLabel};
   }
`;

export const InputTwo = styled.div`
   flex: 3;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0 10px;
   border-right: 1px solid ${({ theme }) => theme.border};
`;
export const DestinationLabel = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 20px;

   text-transform: uppercase;

   color: ${({ theme }) => theme.inputLabel};
`;
export const DestinationInputWrapper = styled.div`
   width: 100%;
   height: 50px;
`;

export const DestinationInput = styled.input`
   width: 100%;
   height: 100%;
   outline: none;
   border: none;
   background-color: ${({ theme }) => theme.card};

   &::-webkit-input-placeholder {
      /* Edge */
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${({ theme }) => theme.inputLabel};
   }
   &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${({ theme }) => theme.inputLabel};
   }
   &::placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${({ theme }) => theme.inputLabel};
   }
`;

export const InputLabel = styled.h3`
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 20px;
   text-transform: uppercase;
   color: ${({ theme }) => theme.inputLabel};
`;
export const InputThree = styled.div`
   flex: 1.5;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   border-right: 1px solid ${({ theme }) => theme.border};
   position: relative;
`;
export const DateWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   cursor: pointer;
`;
export const DateLabel = styled.div`
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 21px;
   color: ${({ theme }) => theme.inputLabel};
`;
export const Passengers = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
`;
export const InputFour = styled.div`
   border-right: 1px solid ${({ theme }) => theme.border};

   flex: 1.5;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;
export const InputFive = styled.div`
   flex: 1.5;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;
export const BiIconWrapper = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 10px;
   padding: 5px;
   background-color: rgba(0, 136, 204, 0.17);
   transform: rotate(50deg);

   margin-top: 10px;
`;

export const BiIcon = styled.img`
   width: 100%;
   transform: rotate(-50deg);
`;

export const AreaTwo = styled.div`
   padding: 20px;
   margin-top: 20px;

   display: flex;
   flex-direction: column;
   gap: 20px;
`;
export const Card = styled.div`
   width: 100%;
   height: 180px;
   border-radius: 10px;
   padding: 20px 40px;
   background: ${({ theme }) => theme.card};
   border: 1px solid ${({ theme }) => theme.border};
`;

export const CardContent = styled.div`
   height: 100%;

   display: flex;
   align-items: flex-start;
   justify-content: space-between;
`;
export const CardCol = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

// TODO: ----------------- AREA THREE -------------------
export const AreaThree = styled.div`
   padding: 20px;
   display: grid;
   place-items: center;
`;
export const TimeWrapper = styled.div``;

export const TravelTimeWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   margin: 10px 0;
`;
export const TravelTime = styled.p`
   font-style: normal;
   font-size: 1.2rem;
   line-height: 23px;
   font-weight: ${({ bold }) => (bold ? 500 : 400)};
   color: ${({ red, green, theme }) =>
      red ? theme.red : green ? theme.green : theme.text};
`;

export const DurationWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
export const Duration = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 23px;

   color: ${({ theme }) => theme.gray_label};
`;
export const DurationBus = styled.img`
   width: 20px;
`;
export const Price = styled.p`
   font-style: normal;
   font-size: 1.5rem;
   line-height: 27px;
   font-weight: 700;

   color: ${({ theme }) => theme.primary};
`;
export const Sorry = styled.div`
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   /* background: red; */
`;
export const SorryText = styled.h1`
   font-style: normal;
   font-weight: 600;
   font-size: 3rem;
   line-height: 21px;
   color: ${({ theme }) => theme.primary};
`;

export const CardBtn = styled(Link)`
   text-decoration: none;
   color: inherit;

   padding: 1rem 3rem;
   border-radius: 10px;
   font-style: normal;
   font-weight: 400;
   font-size: 1rem;
   line-height: 21px;

   cursor: pointer;
   color: ${({ theme }) => theme.primary};
   border: 1px solid ${({ theme }) => theme.primary};
   transition: transform 0.3s ease 0s;

   &:hover {
      transform: scale(1.02);
   }
`;
export const LoadMoreBtn = styled(Link)`
   text-decoration: none;
   color: inherit;

   display: flex;
   align-items: center;
   gap: 10px;
   padding: 1.2rem 5rem;
   border-radius: 10px;
   font-style: normal;
   font-weight: 400;
   font-size: 1.2rem;
   line-height: 21px;

   cursor: pointer;
   color: ${({ theme }) => theme.white};
   background: ${({ theme }) => theme.primary};
   transition: transform 0.3s ease 0s;

   &:hover {
      transform: scale(1.02);
   }
`;
export const UpdateBtn = styled.button`
   border: none;
   outline: none;

   display: flex;
   align-items: center;
   gap: 10px;
   padding: 1.8rem 3rem;
   border-radius: 10px;

   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 27px;

   cursor: pointer;
   color: ${({ theme }) => theme.white};
   background: ${({ theme, activate }) =>
      activate ? theme.primary : "#bdc3c7"};
   transition: transform 0.3s ease 0s;

   &:disabled {
      cursor: not-allowed;
   }

   &:hover {
      transform: scale(1.02);
   }
`;
