import styled from "styled-components";

export const Section = styled.section`
   height: calc(100vh - 80px);
   padding: 20px 20px;

   background: ${({ theme }) => theme.background};
`;
export const Wrapper = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   row-gap: 10px;

   /* background: yellow; */
`;
export const Container = styled.div`
   padding: 0px 15%;
   height: 100%;
   display: flex;
   column-gap: 10px;

   /* background: aliceblue; */
`;

export const Col = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   /* background: green; */
`;
export const ColContent = styled.div`
   flex: 1;
   /* background: yellowgreen; */
`;

// ----------------------
export const HeaderSection = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;
export const MainHeader = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 3rem;
   line-height: 55px;
   margin: 0;
   text-transform: uppercase;
   color: ${({ theme }) => theme.text};
`;
export const EditIcon = styled.img`
   width: 20px;
`;
export const AcceptedCards = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 1rem;
   line-height: 21px;

   text-transform: uppercase;
   margin: 10px 0;

   color: ${({ theme }) => theme.text};
`;
export const CardImg = styled.img`
   width: 300px;
   height: auto;
   object-fit: cover;

   margin-bottom: 50px;
`;

export const CheckoutBtnSection = styled.div`
   padding: 0 15%;
`;
export const FormWrapper = styled.div`
   margin-top: 50px;
   /* background: #000; */
`;

export const Form = styled.form`
   /* background-color: ${({ theme }) => theme.red}; */
   max-width: 600px;
   width: 90%;
   padding: 1rrem 2rem;
   /* box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15); */
`;

export const Label = styled.form`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   margin-left: 5px;

   text-transform: uppercase;

   color: ${({ theme }) => theme.text};
`;

export const InputWrapper = styled.div`
   width: 100%;
   height: 45px;
   border-radius: 10px;
   margin: 5px 0 20px 0;
   background-color: ${({ theme }) => theme.card};
   border: 1px solid ${({ theme }) => theme.border};
`;

export const InputRow = styled.div`
   display: flex;
   column-gap: 20px;
   justify-content: space-between;
   margin-top: 10px;
`;
export const Input = styled.input`
   width: 100%;
   height: 100%;
   outline: none;
   border: none;
   font-size: 1rem;
   padding: 5px 20px;
   border-radius: 7px;
   background-color: ${({ theme }) => theme.transparent};
   color: ${({ theme }) => theme.text};
`;
export const One = styled.div`
   width: 100%;
`;

export const CheckoutBtn = styled.button`
   outline: none;
   border: none;
   width: 100%;
   padding: 1rem 2rem;

   border-radius: 10px;
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   text-transform: uppercase;
   cursor: pointer;
   color: ${({ theme }) => theme.white};
   background: ${({ theme }) =>
      `linear-gradient(${89.98}deg, #02416B ${0.02}%, #1DA1F2 ${99.36}%)`};
   transition: transform 0.3s ease 0s;

   &:hover {
      transform: scale(1.02);
   }
`;
