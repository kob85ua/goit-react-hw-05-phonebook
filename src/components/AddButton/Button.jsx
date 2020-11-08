import React from "react";
import Btn from "./StyledBtn";
const Button = ({ onBtnClick }) => {
  return <Btn onClick={onBtnClick}>Add contact </Btn>;
};
export default Button;
