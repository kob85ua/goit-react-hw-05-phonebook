import React from "react";
import StyledWarning from "./StyledWarning";
const WarningItem = ({ condition, nextCondition }) => (
  <StyledWarning>
    {condition
      ? "Contact already exists!"
      : nextCondition
      ? "Fill in all fields!"
      : ""}
  </StyledWarning>
);
export default WarningItem;
