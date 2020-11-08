import React from "react";
import Btn from "./StyledXBtn";
const CrossButton = ({ onBtnClick }) => {
  return <Btn onClick={onBtnClick}>&#10006;</Btn>;
};
export default CrossButton;
