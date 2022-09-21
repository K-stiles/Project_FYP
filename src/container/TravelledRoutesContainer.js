import React from "react";
import { TravelledRoutes } from "../components";

const images = [
  {
    id: "one",
    img: "https://images.unsplash.com/photo-1663714978194-dd74f2871e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    alt: "image_one",
  },
  {
    id: "two",
    img: "https://images.unsplash.com/photo-1663739109036-5b20409f8906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    alt: "image_one",
  },
  {
    id: "three",
    img: "https://images.unsplash.com/photo-1663524023198-1e808ad5e686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    alt: "image_one",
  },
  {
    id: "four",
    img: "https://images.unsplash.com/photo-1663714978194-dd74f2871e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    alt: "image_one",
  },
  {
    id: "five",
    img: "https://images.unsplash.com/photo-1663714978194-dd74f2871e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    alt: "image_one",
  },
  {
    id: "six",
    img: "https://images.unsplash.com/photo-1663714978194-dd74f2871e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
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
            </TravelledRoutes.ImageContainer>
          ))}
        </TravelledRoutes.Container>
      </TravelledRoutes.Wrapper>
    </TravelledRoutes>
  );
}
