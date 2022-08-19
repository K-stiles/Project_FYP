import styled from "styled-components";
import heroImage from "../../assets/hero-image.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const HeroTopSection = styled.section`
  min-height: 90vh;
  height: 100%;
  width: 100%;

  display: grid;
  place-items: center;
  position: relative;

  overflow: hidden;

  background: url(${heroImage});
  /* filter: blur(10px); */
`;

export const HeroInfo = styled.div`
  height: 100%;
  padding: 8% 0px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const HeroTitle = styled.h1`
  margin: 0px 0px 20px;
  width: 1019px;
  height: 294px;

  font-family: "GT Walsheim Pro";
  font-style: normal;
  font-weight: 800;
  font-size: 120px;
  line-height: 147px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  @media (max-width: 1144px) {
    font-size: 5rem;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    font-weight: 900;
  }
`;

export const HeroDescription = styled.p`
  width: 876px;
  height: 46px;

  font-family: "GT Walsheim Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #dbdada;

  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;
export const SocialMediaLinks = styled.div`
  display: flex;
  position: absolute;
  left: 10%;
  bottom: 50px;
`;
export const Facebook = styled(FaFacebook)`
  color: #fff;
  margin: 0px 10px;
  font-size: 1.5rem;
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
export const Instagram = styled(FaInstagram)`
  color: #fff;
  margin: 0px 10px;
  font-size: 1.5rem;
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
export const Twitter = styled(FaTwitter)`
  color: #fff;
  margin: 0px 10px;
  font-size: 1.5rem;
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const HeroDownSection = styled.div`
  height: 10vh;
  padding: 10px 10%;
  background-color: #d9d9da;
`;
export const HeroDownContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Tag = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 57px;
  text-align: center;
  text-transform: uppercase;

  color: #02416b;
`;
export const TagDesc = styled.p`
  margin-left: 10px;

  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 25px;
  text-transform: uppercase;

  color: #02416b;
`;
