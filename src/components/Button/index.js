import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledButton = styled(NavLink)`
   cursor: pointer;
   border-radius: 30px;
   transition: transform 0.3s ease 0s;
   outline: none;

   color: #0088a9;
   background-color: #fff;

   padding: 10px 25px;
   font-size: 1rem;

   text-decoration: none;

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
