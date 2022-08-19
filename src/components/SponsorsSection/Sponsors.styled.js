import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 10%;
  height: 200px;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionContainer = styled.div`
  max-width: 1530px;
  width: 100%;
  height: 155px;
  align-self: center;
`;
export const SectionTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  /* color: #fff; */
  color: #02416b;
`;
export const SectionLabelsWrapper = styled.div`
  height: 100%;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;

  border-radius: 10px;

  /* box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.21); */
  background: #ffffff;
  opacity: 0.6;
  box-shadow: 0px 4px 22px rgba(2, 65, 107, 0.4);

  @media (max-width: 1144px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    padding: 15px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    height: auto;
  }
`;
export const LabelRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1144px) {
    padding: 15px;
  }
`;
