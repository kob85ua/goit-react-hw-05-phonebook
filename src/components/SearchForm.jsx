import React from "react";
import { Input, InputBlockWrapper, Label, InputNames } from "./Styles/Styles";
const SearchForm = ({ value, onFindContacts }) => {
  return (
    <InputBlockWrapper>
      <Label>
        <InputNames>Find contacts by name</InputNames>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={(e) => onFindContacts(e.target.value)}
        />
      </Label>
    </InputBlockWrapper>
  );
};

export default SearchForm;
