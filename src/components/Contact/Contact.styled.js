import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 10%;
  /* background-color: aliceblue; */
`;
export const Wrapper = styled.div`
  /* background-color: green; */
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 25px;
  background: #d7f1ff;
`;
export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  gap: 10px;

  padding: 20px 8%;
  /* background-color: #ffeefe; */
`;
export const LeftPane = styled.div`
  padding: 0px 0 20px;

  display: flex;
  flex-direction: column;
  /* background-color: tomato; */
`;
export const RightPane = styled.div`
  padding: 0px 0 15px 15px;
  /* background-color: brown; */
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;

  color: #ffffff;
`;
export const MiniTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;

  color: #025993;
  margin-top: 20px;
`;

export const Addressing = styled.div`
  margin-left: -100px;
`;
export const Phone = styled.div`
  margin-left: -100px;
`;
export const Email = styled.div`
  margin-left: -100px;
`;

export const Info = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 21px;
  text-transform: capitalize;
  text-align: center;
  color: #057ecf;
`;

export const MaxTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 55px;
  margin: 0;
  color: #025993;
`;
export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  color: #000000;
`;
export const Form = styled.form``;
export const FormWrapper = styled.div`
  /* background-color: red; */
  margin-top: 25px;
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 45px;
  margin: 5px 0 5px 0;
  padding: 0px 2rem;
  background-color: #025993;
  border-radius: 10px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: transparent;

  &::placeholder {
    color: #f4fbff;
    opacity: 0.6;
  }
`;

export const NameInput = styled(Input)``;
export const EmailInput = styled(Input)``;

export const TextareaWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px 2rem;
  border-radius: 10px;
  background-color: #025993;

  margin: 5px 0;
`;

export const MsgBox = styled.textarea`
  border: none;
  outline: none;
  resize: none;

  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: transparent;

  &::placeholder {
    color: #f4fbff;
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px 2rem;
  margin-top: 5px;

  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-transform: uppercase;

  background-color: #02416b;
  transition: transform 0.3s ease 0s;
  &:hover {
    transform: scale(1.02);
    color: #fff;
    background-color: #025993;
    /* opacity: 0.9; */
  }
`;
