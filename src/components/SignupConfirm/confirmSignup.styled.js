import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  background-color: #f0eded;
`;

export const Container = styled.div`
  min-height: 100%;
  display: grid;
  place-content: center;
`;
export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  width: 1000px;
  padding: 0rem 0px 0rem 2rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.15);
  /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15); */
`;
export const Left = styled.div`
  width: 100%;
`;
export const Right = styled.div`
  width: 100%;
  border-radius: 0 10px 10px 0;
  background: linear-gradient(180deg, #429ad3 0%, #094166 100%);
`;

export const Form = styled.form`
  width: 400px;
  /* background-color: red; */
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1rem;
  color: #0088cc;
`;
export const SocialText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 32px;
  letter-spacing: 0.08em;

  color: #333333;
  /* margin-top: 30px; */
`;
export const Info = styled.p`
  width: 407.39px;
  height: 45px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 15px;

  color: #404040;
  margin-bottom: 30px;
`;
export const CheckboxLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 15px;

  color: #000000;
`;
export const InputLabel = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
  text-transform: uppercase;

  color: #333333;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;
export const TopRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* background-color: yellow; */
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 45px;
  margin: 10px 0px 30px 0px;
  border-radius: 10px;
  background-color: #f3f4f6;
`;
export const Image = styled.img`
  width: 120px;
  height: 120px;
`;
export const SocialIconWrapper = styled.div`
  width: 1rem;
  height: auto;
  margin-right: 8px;
`;
export const FBSocialIconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
`;
export const FacebookSocialIcon = styled.img`
  width: 22.22px;
  height: 22.22px;
`;
export const BusImage = styled.img`
  width: 370px;
  height: 190px;
`;
export const BgImageWrapper = styled.div`
  /* width: 100%;
  height: 100%;
  background-color: red; */
`;
export const BgImage = styled.img`
  /* width: 100%;
  height: 100%; */
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 5px 20px;
  border-radius: 7px;
  background-color: #f3f4f6;
`;

export const ConfirmButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px 2rem;

  width: 100%;
  height: 50px;
  margin: 30px 0 20px 0;

  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;

  background: linear-gradient(90deg, #053b5e 16.2%, #256c9b 100%);
  box-shadow: 0px 27.7767px 55.5535px rgba(79, 70, 229, 0.15);
  transition: transform 0.3s ease 0s;

  &:hover {
    transform: scale(1.01);
    color: #fff;
    background-color: #025993;
  }
`;

export const SecondaryConfirmButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 8px 1.8rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  background: transparent;
  transition: transform 0.3s ease 0s;

  /* &:hover {
    transform: scale(1.01);
    color: #fff;
    background-color: #025993;
  } */
`;
export const Inner = styled.div`
  /* position: relative; */
`;
export const Holder = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center; */
`;
