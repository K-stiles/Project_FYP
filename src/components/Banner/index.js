import React from "react";
import { Description, Section, Title } from "./banner.styled";

export default function Banner({ childrren, restProps }) {
  return <Section {...restProps}>{childrren}</Section>;
}

Banner.Title = function BannerTitle({ childrren, restProps }) {
  return <Title {...restProps}>{childrren}</Title>;
};
Banner.Description = function BannerDescription({ childrren, restProps }) {
  return <Description {...restProps}>{childrren}</Description>;
};
