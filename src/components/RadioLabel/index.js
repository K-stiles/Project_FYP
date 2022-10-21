import React from "react";
import { CustomSelection, Label, Radio } from "./radio.styled";

export default function RadioLabel({
   radioId,
   radioLabel,
   option,
   value,
   onChange,
}) {
   return (
      <Label htmlFor={radioId}>
         <Radio
            type="radio"
            name={radioLabel}
            id={radioId}
            value={value}
            onChange={onChange}
         />
         <CustomSelection></CustomSelection>
         {option}
      </Label>
   );
}
