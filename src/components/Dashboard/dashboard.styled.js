import styled from "styled-components/macro";

export const Section = styled.section`
  position: absolute;
  top: 85px;
  right: 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  height: 100%;

  left: 280px;
  width: calc(100% - 340px);
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  height: 100%;
`;

export const SubHeader = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;
  color: ${({ theme }) => theme.gray_label};
`;

export const CentralRegion = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  background: ${({ theme }) => theme.background};
`;

// TODO: ----------------- AREA ONE -------------------
export const AreaOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;

  /* background-color: green; */
`;

export const LiveSection = styled.div``;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.card};

  width: 300px;
  height: 150px;
  border-radius: 10px;
  padding: 15px 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 5px;

  box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
`;
export const Topcontent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  column-gap: 15px;
  /* background: #0e0; */
`;
export const Bottomcontent = styled.div`
  width: 90%;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 10px;
  /* background: #0efff0; */
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;

  color: ${({ theme }) => theme.text};
`;

export const CardIconWrapper = styled.div`
  width: 30px;
  height: 31px;
  display: grid;
  place-items: center;
  padding: 5px;
  border-radius: 5px;

  background-color: ${({ wrapperColor }) => wrapperColor};
`;

export const CardIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const GraphText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  align-self: flex-end;
`;
export const Graph = styled.img`
  width: 70px;
  height: auto;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.gray_label};
  align-self: flex-end;
  margin-bottom: -5px;
`;
export const SmallText = styled.p`
  color: ${({ percentageColor }) => percentageColor};

  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 18px;
`;

export const GraphWrapper = styled.div``;

export const DirectionIconWrapper = styled.div`
  width: 10px;
`;
export const DirectionIcon = styled.img`
  width: 100%;
  height: auto;
`;
export const TextIcon = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

// TODO: ----------------- AREA TWO -------------------
export const AreaTwo = styled.div`
  /* background-color: blue; */
`;
export const MainHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;
  margin: 40px 0px 0px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;
export const MainHeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditIcon = styled.img`
  width: 20px;
  margin-bottom: -30px;
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
  margin-left: ${({ index }) => (index === 0 ? "0px" : "-10px")};
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
// export const DateSelector = styled.DateRange``;
export const Passengers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const InputThree = styled.div`
  border-right: 1px solid ${({ theme }) => theme.border};
  flex: 1.5;

  display: flex;
  /* background: #000; */
  flex-direction: column;
  align-items: flex-start;

  position: relative;
`;
export const InputFour = styled.div`
  border-right: 1px solid ${({ theme }) => theme.border};
  flex: 1.5;

  display: flex;
  /* background: #000; */
  flex-direction: column;
  align-items: flex-start;
`;
export const InputFive = styled.div`
  flex: 1.5;

  display: flex;
  /* background: #000; */
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

// TODO: ----------------- AREA THRREE -------------------
export const AreaThree = styled.div`
  padding: 20px 0;
  margin-top: 10px;

  /* background-color: red; */
`;
export const AreaThreeTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 21px;

  margin-bottom: 10px;
  color: ${({ theme }) => theme.gray_label};
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px 10px 0 0;
  background: ${({ theme }) => theme.primary};

  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  column-gap: 5px;
`;
export const TableTitleWrapper = styled.div`
  /* background-color: red; */
  padding: 5px;
  flex: 1;

  text-align: center;
  align-self: center;

  &:first-child {
    text-align: start;
  }
`;
export const TableTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  color: #ffffff;
`;

export const TableRow = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.card};
  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const RowItemWrapper = styled.div`
  /* background-color: green; */
  padding: 5px;
  flex: 1;

  text-align: center;
  align-self: center;

  &:first-child {
    text-align: start;
  }
`;
export const RowText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;

  color: ${({ theme }) => theme.gray_label};
`;

export const TableFooter = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 0px 0px 10px 10px;
  background: ${({ theme }) => theme.card};

  padding: 5px 20px 5px 30px;

  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
`;
export const FooterContent = styled.div`
  /* flex: 1; */
  width: 35%;
  height: 100%;
  column-gap: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const FooterTextWrapper = styled.div``;
export const FooterLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.gray_label};
`;
export const FooterNumberIconWrapper = styled.div`
  /* width: 15px; */
  /* background-color: red; */
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const FooterNumberIcon = styled.img`
  width: 15px;
  cursor: pointer;
`;

export const FooterNumber = styled.p`
  color: ${({ theme }) => theme.text};
`;

export const LeftArrow = styled.img`
  width: 25px;
  cursor: pointer;
  /* height: auto; */
`;
export const RightArrow = styled.img`
  width: 25px;
  cursor: pointer;
`;

// TODO: ----------------- AREA FOUR -------------------
export const Form = styled.form`
  /* background-color: green; */
`;
export const AreaFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */

  margin: 40px 0;
`;
export const ProceedBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  padding: 1.1rem 5rem;
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 21px;

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
export const BtnRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
export const EmojiHand = styled.h2``;
