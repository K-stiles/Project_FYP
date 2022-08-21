import React from "react";
import { Section } from "./About.styled";

export default function AboutSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}
