import styled from "styled-components/macro";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const NavHeader = styled.header`
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  transition: all 0.3s ease 0s;

  box-shadow: -3px 7px 8px -4px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: -3px 7px 8px -4px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: -3px 7px 8px -4px rgba(0, 0, 0, 0.68);
`;
export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0px 10%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background: ${({ sticky }) => (sticky ? "#fff" : "#ffffff")};
  opacity: 1;
`;

export const Ul = styled.ul`
  @media (max-width: 1144px) {
    display: none;
  }
`;
export const LinkContainer = styled.li`
  display: inline-block;
  list-style: none;
  padding: 20px;
  cursor: pointer;
`;
export const Link = styled(NavLink)`
  color: #0188cc;
  text-decoration: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const LogoWrapper = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  width: 180px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* background: #000; */
`;
export const Logo = styled.img`
  margin-top: 10px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  @media (max-width: 1144px) {
    display: none;
  }
`;
export const MenuBtn = styled(BiMenuAltRight)`
  display: none;
  font-size: 2.5rem;
  color: #0088a9;
  cursor: pointer;

  @media (max-width: 1144px) {
    display: inherit;
  }
`;
export const CloseBtn = styled(BiX)`
  font-size: 3rem;
  color: #0088a9;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 10%;
`;

export const Overlay = styled.div`
  width: ${({ openNav }) => (openNav === false ? "0" : "100%")};
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s ease 0s;

  @media (min-width: 1144px) {
    display: none;
  }
`;
export const OverlayContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
`;

export const OverlayLink = styled.a`
  cursor: pointer;
  display: block;
  padding: 15px;

  text-align: center;

  color: #0088a9;
  font-size: 1.5rem;
  font-weight: 500;

  transition: all 0.3s ease 0s;

  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
