import React, { useState } from "react";
import {
  NavHeader,
  Link,
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
  LogoWrapper,
} from "./NavBar";
import { GhostBtn, PrimaryOutlineBtn } from "../Button";

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
        <LogoWrapper>
          <Logo src={"/images/logo_primary.png"} alt={"logo"} />
        </LogoWrapper>
        <Ul>
          <LinkContainer>
            <Link>Home</Link>
          </LinkContainer>
          <LinkContainer>
            <Link>Feature</Link>
          </LinkContainer>
          <LinkContainer>
            <Link>Pricing</Link>
          </LinkContainer>
          <LinkContainer>
            <Link>About Us</Link>
          </LinkContainer>
          <LinkContainer>
            <Link>Faq</Link>
          </LinkContainer>
          <LinkContainer>
            <Link>Testimonial</Link>
          </LinkContainer>
          <LinkContainer>
            <Link>Contact</Link>
          </LinkContainer>
        </Ul>

        <Row>
          <GhostBtn to="/login">Log in</GhostBtn>
          <PrimaryOutlineBtn to="/register">Register</PrimaryOutlineBtn>
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
