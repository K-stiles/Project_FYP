import React from "react";
import { TravelledRoutes } from "../components";

const images = [
  {
    id: "one",
    location: "East Legon - Accra",
    img: "https://images.unsplash.com/photo-1625191824068-e833954d6c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
    alt: "image_one",
  },
  {
    id: "two",
    location: "Pot Belly - Accra",
    img: "https://images.unsplash.com/photo-1640108290666-8352194d4d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    alt: "image_one",
  },
  {
    id: "three",
    location: "Kejetia market - Kumasi",
    img: "https://images.unsplash.com/photo-1575303093127-18b3c4ef8c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMG1hcmtldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    alt: "image_one",
  },
  {
    id: "four",
    location: "Chorkor nkyona - Accra",
    img: "https://images.unsplash.com/photo-1559968870-77048b6aa65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    alt: "image_one",
  },
  {
    id: "five",
    location: "Hohoi - Accra",
    img: "https://images.unsplash.com/photo-1507835418932-dfcc1a16d393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3274&q=80",
    alt: "image_one",
  },
  {
    id: "six",
    location: "Kantamanto - Accra",
    img: "https://images.unsplash.com/photo-1546388556-40e4b23d8392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    alt: "image_one",
  },
];

export default function TravelledRoutesContainer() {
  return (
    <TravelledRoutes>
      <TravelledRoutes.Wrapper>
        <TravelledRoutes.Title>Top travelled bus routes</TravelledRoutes.Title>

        <TravelledRoutes.Container>
          {images.map((item, index) => (
            <TravelledRoutes.ImageContainer key={`images-${index}`}>
              <TravelledRoutes.Image src={item.img} alt="item.alt" />
              <TravelledRoutes.Overlay>
                <TravelledRoutes.Location>
                  <TravelledRoutes.H2>{item.location}</TravelledRoutes.H2>
                </TravelledRoutes.Location>
              </TravelledRoutes.Overlay>
            </TravelledRoutes.ImageContainer>
          ))}
        </TravelledRoutes.Container>
      </TravelledRoutes.Wrapper>
    </TravelledRoutes>
  );
}
