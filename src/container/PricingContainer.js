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
            <Pricing.Card cardColor={"transparent"} cardPadding="0px 40px 20px">
              <Pricing.SideHeader>Pricing Table</Pricing.SideHeader>
              <Pricing.SideDescription>
                This is our Trip Pricing table any trip you want to make across
                the country
              </Pricing.SideDescription>
              <Pricing.Row>
                <Pricing.Image src="/images/bus-alt 1.png" alt="bus image" />
                <Pricing.Social>@famek) transport</Pricing.Social>
              </Pricing.Row>
            </Pricing.Card>

            <div>
              <Pricing.Card cardColor="#025993">
                <div>
                  <Pricing.Row marginTop="0px" padding="0px">
                    <Pricing.CardTitle busCard>
                      Save More With Famek)
                    </Pricing.CardTitle>
                  </Pricing.Row>
                  <Pricing.CardSubTitle busCard>
                    Choose a plan and get onboard in minutes. Then get GHC100
                    credits for your next trip.
                  </Pricing.CardSubTitle>

                  <Pricing.Row marginTop="0" padding="10px 10px 10px 0px">
                    <Pricing.Image
                      src={"/images/arrow-right-line 1.png"}
                      alt={"item.tag"}
                    />
                  </Pricing.Row>

                  <Pricing.AbsoluteBus>
                    <Pricing.Bus
                      src={"/images/busImage.png"}
                      alt={"card.title"}
                    />
                  </Pricing.AbsoluteBus>
                </div>
              </Pricing.Card>
            </div>

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
                          marginTop="0"
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
          </Pricing.Container>
        </div>
      </Pricing.Wrapper>
    </Pricing>
  );
}
