import React from "react";
import { Container, Header, Section } from "./dashboard.styled";

export default function Dashboard({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Dashboard.Container = function DashboardContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};
Dashboard.Header = function DashboardHeader({ children, ...restProps }) {
   return <Header {...restProps}>{children}</Header>;
};
