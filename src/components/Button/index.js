import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 30px;
  transition: transform 0.3s ease 0s;
  outline: none;

  color: #0088a9;
  background-color: #fff;

  padding: 10px 25px;
  font-size: 1rem;

  &:hover {
    transform: scale(1.02);
    color: red;
  }
`;

const PrimarySolidBtn = styled(StyledButton)`
  border: none;
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ bgColor }) => bgColor};
`;
export const PrimaryOutlineBtn = styled(StyledButton)`
  background-color: transparent;
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border: 1px solid ${({ color }) => color};
`;
export const GhostBtn = styled(StyledButton)`
  border: none;
  background-color: transparent;
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
`;

export default PrimarySolidBtn;
