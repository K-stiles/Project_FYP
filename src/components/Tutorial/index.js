import React from "react";
import { Container, Section } from "./tutorial.styled";

export default function Tutorial({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Tutorial.Container = function TutorialContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
