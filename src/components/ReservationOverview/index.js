import React from "react";
import { Section } from "./overview.styled";

export default function ReservationOverview({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
