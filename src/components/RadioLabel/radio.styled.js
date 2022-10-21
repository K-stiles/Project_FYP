import styled from "styled-components";

export const Label = styled.label`
   display: inline-flex;
   align-items: center;
   column-gap: 10px;
   cursor: pointer;
`;

export const CustomSelection = styled.div`
   width: 1.2em;
   height: 1.2em;
   border: 2px solid ${({ theme }) => theme.primary};
   border-radius: 50%;
   padding: 2px;

   &::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.primary};

      transform: scale(0);
      transition: transform 0.15s;
   }
`;

export const Radio = styled.input`
   display: none;

   &:checked + ${CustomSelection}::after {
      transform: scale(1);
   }
`;
