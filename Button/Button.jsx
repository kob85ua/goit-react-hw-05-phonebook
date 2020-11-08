import React from "react";
import Btn from "./StyledBtn";
const Button = ({ onBtnClick }) => {
  return <Btn onClick={onBtnClick}>Go back </Btn>;
};
export default Button;
