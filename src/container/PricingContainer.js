import React from "react";
import { Pricing } from "../components";
import { pricingCardData } from "../utils";

export default function PricingContainer() {
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
            <Pricing.Card bgColor={"transparent"} cardPadding="0px 40px 20px">
              <Pricing.SideHeader>Pricing Table</Pricing.SideHeader>
              <Pricing.SideDescription>
                This is our Trip Pricing table any trip you want to make across
                the country
              </Pricing.SideDescription>
              <Pricing.Row>
                <Pricing.Image src="/images/busIcon.png" alt="bus image" />
                <Pricing.Social>@famek) transport</Pricing.Social>
              </Pricing.Row>
            </Pricing.Card>

            {pricingCardData &&
              pricingCardData.map((card) => (
                <Pricing.Card key={`pricing-card-data-${card.id}`}>
                  <div>
                    <Pricing.Row marginTop="0px" padding="0px">
                      <Pricing.Image src={card.titleIcon} alt={card.title} />
                      <Pricing.CardTitle>{card.title}</Pricing.CardTitle>
                    </Pricing.Row>
                    <Pricing.CardSubTitle>{card.subTitle}</Pricing.CardSubTitle>

                    {card?.label.map((item) => {
                      return (
                        <Pricing.Row
                          padding="10px 10px 10px 0px"
                          key={`card-label-${item.id}`}
                        >
                          <Pricing.Image src={item.labelIcon} alt={item.tag} />
                          <Pricing.CardLabel>{item.tag}</Pricing.CardLabel>
                        </Pricing.Row>
                      );
                    })}

                    <Pricing.LineDivider />
                    <Pricing.Row gap="0px" marginTop="0px" padding="0px">
                      <Pricing.CardPrice>{`GHC${card.price}`}</Pricing.CardPrice>
                      <Pricing.CardDistance>{`/${card.distance}km`}</Pricing.CardDistance>
                    </Pricing.Row>
                  </div>

                  {card.renderBtn ? (
                    <Pricing.CardButton>
                      <span>More</span>
                      <span>Info</span>
                    </Pricing.CardButton>
                  ) : (
                    <Pricing.AbsoluteBus>
                      <Pricing.Bus src={card.image} alt={card.title} />
                    </Pricing.AbsoluteBus>
                  )}
                </Pricing.Card>
              ))}

            {/* 2nd card */}
            {/* <Pricing.Card bgColor={"#025993"}>Card 2</Pricing.Card> */}

            {/* 3rd card */}
            {/* <Pricing.Card>
              <div>
                <Pricing.Row marginTop="0px" padding="0px">
                  <Pricing.Image src="/images/busIcon.png" alt="bus image" />
                  <Pricing.CardTitle>Single Trip</Pricing.CardTitle>
                </Pricing.Row>
                <Pricing.CardSubTitle>What You'll Get</Pricing.CardSubTitle>
                <Pricing.Row padding="10px 10px 10px 0px">
                  <Pricing.Image
                    src="/images/checkCircleIcon.png"
                    alt="bus image"
                  />
                  <Pricing.CardLabel>
                    10% off Booking for another person
                  </Pricing.CardLabel>
                </Pricing.Row>
                <Pricing.Row padding="10px 10px 10px 0px">
                  <Pricing.Image
                    src="/images/checkCircleIcon.png"
                    alt="bus image"
                  />
                  <Pricing.CardLabel>
                    10% off Booking for another person
                  </Pricing.CardLabel>
                </Pricing.Row>

                <Pricing.LineDivider />
                <Pricing.Row gap="0px" marginTop="0px" padding="0px">
                  <Pricing.CardPrice>{`GHC${250}`}</Pricing.CardPrice>
                  <Pricing.CardDistance>{`/${100}km`}</Pricing.CardDistance>
                </Pricing.Row>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Pricing.CardButton>
                  <span>More</span>
                  <span>Info</span>
                </Pricing.CardButton>
              </div>
            </Pricing.Card> */}

            {/* 4th card */}
            {/* <Pricing.Card>Card 4</Pricing.Card> */}
          </Pricing.Container>
        </div>
      </Pricing.Wrapper>
    </Pricing>
  );
}
