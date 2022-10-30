import styled from "styled-components";

export const Label = styled.label`
   display: inline-flex;
   align-items: center;
   column-gap: 10px;
   cursor: pointer;

   font-style: normal;
   font-weight: 400;
   font-size: 12.9625px;
   line-height: 15px;

   color: ${({ theme }) => theme.text};
`;

export const CustomSelection = styled.div`
   width: 1.2em;
   height: 1.2em;
   border: 1px solid ${({ theme }) => theme.primary};
   border-radius: 40%;
   padding: 2px;

   &::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 40%;
      background-color: ${({ theme }) => theme.primary};

      transform: scale(0);
      transition: transform 0.15s;
   }
`;

export const Checkbox = styled.input`
   display: none;

   &:checked + ${CustomSelection}::after {
      transform: scale(1);
   }
`;
