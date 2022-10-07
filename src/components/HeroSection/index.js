import React from "react";
import PrimarySolidBtn from "../Button";
import {
   HeroDescription,
   HeroDownContent,
   HeroDownSection,
   HeroTitle,
   HeroTopSection,
   HeroInfo,
   SocialMediaLinks,
   Facebook,
   Instagram,
   Twitter,
   Tag,
   TagDesc,
   TagWrapper,
} from "./HeroSection.styled";

export default function HeroSection() {
   return (
      <>
         <HeroTopSection>
            <HeroInfo>
               <HeroTitle>Where do you want to Go?</HeroTitle>
               <HeroDescription>
                  Every GraphQL server including Apollo Server uses a schema to
                  define the structure of data that clients can query. In this
                  example, we'll create a server for querying a collection of
                  books by title and author.
               </HeroDescription>
               <PrimarySolidBtn to="/register">Get Started</PrimarySolidBtn>
            </HeroInfo>

            <SocialMediaLinks>
               <Facebook />
               <Instagram />
               <Twitter />
            </SocialMediaLinks>
         </HeroTopSection>

         <HeroDownSection>
            <HeroDownContent>
               <TagWrapper>
                  <Tag>300+</Tag>
                  <TagDesc>Active Users</TagDesc>
               </TagWrapper>
               <TagWrapper>
                  <Tag>250+</Tag>
                  <TagDesc>Sponsores</TagDesc>
               </TagWrapper>
               <TagWrapper>
                  <Tag>190+</Tag>
                  <TagDesc>New Users per month</TagDesc>
               </TagWrapper>
            </HeroDownContent>
         </HeroDownSection>
      </>
   );
}
