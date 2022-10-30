import React from "react";
import { CustomSelection, Label, Checkbox } from "./checkbox.styled";

export default function CheckboxLabel({
   boxId,
   checkboxName,
   option,
   value,
   onChange,
   checked,
}) {
   return (
      <Label htmlFor={boxId}>
         <Checkbox
            type="checkbox"
            name={checkboxName}
            id={boxId}
            value={value}
            onChange={onChange}
            checked={checked}
         />
         <CustomSelection></CustomSelection>
         {option}
      </Label>
   );
}
