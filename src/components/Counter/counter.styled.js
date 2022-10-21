import styled from "styled-components";

export const CounterContainer = styled.div`
   display: inline-flex;
   align-items: center;
   column-gap: 10px;

   margin-top: 5px;
`;

export const Number = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 1rem;
   line-height: 16px;

   color: ${({ theme }) => theme.gray_label};
`;
export const Label = styled.p`
   width: 65px;

   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 18px;
   text-transform: capitalize;

   color: ${({ theme }) => theme.gray_label};
`;

export const Button = styled.button`
   padding: 0.1rem 0.8rem;
   border-radius: 10px;
   cursor: pointer;
   outline: none;
   color: ${({ theme }) => theme.text};
   border: 1px solid ${({ theme }) => theme.primary};

   font-size: larger;
   line-height: 16px;

   &:hover {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.primary};
   }
`;
