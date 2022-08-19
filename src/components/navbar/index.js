import React, { useState } from "react";
import {
  NavHeader,
  NavLink,
  LinkContainer,
  Ul,
  Nav,
  Logo,
  Row,
  MenuBtn,
  Overlay,
  OverlayContent,
  CloseBtn,
  OverlayLink,
} from "./NavBar";
import { GhostBtn, PrimaryOutlineBtn } from "../Button";
import logo from "../../assets/logo192.png";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  // nav-bd-change-color
  const [sticky, setSticky] = useState(false);
  const changeStickyness = () => {
    if (window.scrollY >= 800) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", changeStickyness);

  return (
    <NavHeader>
      <Nav sticky={sticky}>
        <Logo src={logo} alt={"logo"} />
        <Ul>
          <LinkContainer>
            <NavLink>Home</NavLink>
          </LinkContainer>
          <LinkContainer>
            <NavLink>Feature</NavLink>
          </LinkContainer>
          <LinkContainer>
            <NavLink>Pricing</NavLink>
          </LinkContainer>
          <LinkContainer>
            <NavLink>About Us</NavLink>
          </LinkContainer>
          <LinkContainer>
            <NavLink>Faq</NavLink>
          </LinkContainer>
          <LinkContainer>
            <NavLink>Testimonial</NavLink>
          </LinkContainer>
          <LinkContainer>
            <NavLink>Contact</NavLink>
          </LinkContainer>
        </Ul>

        <Row>
          <GhostBtn>Log in</GhostBtn>
          <PrimaryOutlineBtn>Register</PrimaryOutlineBtn>
        </Row>
        <MenuBtn onClick={() => setOpenNav(true)} />
      </Nav>

      <Overlay openNav={openNav}>
        <CloseBtn onClick={() => setOpenNav((openNav) => !openNav)} />
        <OverlayContent>
          <OverlayLink>Home</OverlayLink>
          <OverlayLink>Feature</OverlayLink>
          <OverlayLink>Pricing</OverlayLink>
          <OverlayLink>About Us</OverlayLink>
          <OverlayLink>Faq</OverlayLink>
          <OverlayLink>Testimonial</OverlayLink>
          <OverlayLink>Contact</OverlayLink>
        </OverlayContent>
      </Overlay>
    </NavHeader>
  );
}
