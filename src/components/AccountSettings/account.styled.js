import styled from "styled-components";

export const Section = styled.section`
   color: aqua;
   height: calc(100vh - 240px);
   /* padding: 40px 20px 20px; */
   background: ${({ theme }) => theme.card};
`;
export const Container = styled.div`
   height: 100%;
   display: grid;
   grid-template-columns: 1.5fr 2fr;
   column-gap: 10px;

   /* background: #000; */
   padding-left: 30px;
`;
export const Col = styled.div`
   /* background: green; */
   height: 100%;
   padding: 60px 20px 20px;
`;
export const ColTitle = styled.div`
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 55px;
   color: ${({ theme }) => theme.text};
`;
export const FormWrapper = styled.div`
   height: 91%;
   /* background: red; */

   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;
export const Form = styled.form``;
export const Wrapper = styled.div`
   margin-top: 20px;
`;
export const NameWrapper = styled.div`
   /* margin-top: 20px; */
`;

export const Label = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 16.666px;
   line-height: 19px;
   text-transform: uppercase;
   margin-left: 10px;

   color: ${({ theme }) => theme.text};
`;
export const InputWrapper = styled.div`
   width: 407.39px;
   height: 60.18px;
   margin: 5px 0 20px 0;
   background: #f3f4f6;
   border-radius: 7.40713px;
`;
export const Input = styled.input`
   width: 100%;
   height: 100%;
   outline: none;
   border: none;
   font-size: 1rem;
   padding: 5px 20px;
   /* border-radius: 7px; */
   background-color: ${({ theme }) => theme.transparent};
   color: ${({ theme }) => theme.text};
`;

export const SaveBtn = styled.button`
   outline: none;
   border: none;
   /* width: 407px; */
   padding: 1rem 6rem;
   margin-top: auto;

   border-radius: 10px;
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 28px;
   text-transform: capitalize;

   cursor: pointer;
   color: ${({ theme }) => theme.white};

   transition: transform 0.3s ease 0s;
   background: linear-gradient(90deg, #053b5e 16.2%, #256c9b 100%);
   box-shadow: 0px 27.7767px 55.5535px rgba(79, 70, 229, 0.15);
   &:hover {
      transform: scale(1.02);
   }
`;
