import React from "react";
import { Pricing } from "../components";

export default function PricingSection() {
  return (
    <Pricing>
      <Pricing.Wrapper>
        <Pricing.Title>Pricing</Pricing.Title>
        <Pricing.SubTitle>
          The StateProvider class includes everything that ovider class includes
          everything.
        </Pricing.SubTitle>

        <div>
          <Pricing.Container>
            <Pricing.Card bgColor={"transparent"}>
              <h1>Pricing Table</h1>
              <p>
                This is our Trip Pricing table any trip you want to make across
                the country
              </p>
              <Pricing.Row>
                <Pricing.Image src="/images/busIcon.png" alt="bus image" />
                <p>@famek) transport</p>
              </Pricing.Row>
            </Pricing.Card>

            <Pricing.Card bgColor={"#025993"}>Card 2</Pricing.Card>
            <Pricing.Card>Card 3</Pricing.Card>
            <Pricing.Card>Card 4</Pricing.Card>
          </Pricing.Container>
        </div>
      </Pricing.Wrapper>
    </Pricing>
  );
}
