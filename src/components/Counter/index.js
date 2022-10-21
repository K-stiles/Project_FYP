import React from "react";
import { Button, CounterContainer, Label, Number } from "./counter.styled";

export default function Counter({
   label,
   number,
   decrease,
   increase,
   disabled,
}) {
   return (
      <CounterContainer>
         <Label>{label}</Label>
         <Button onClick={decrease} disabled={disabled}>
            -
         </Button>
         <Number>{number}</Number>
         <Button onClick={increase}>+</Button>
      </CounterContainer>
   );
}
