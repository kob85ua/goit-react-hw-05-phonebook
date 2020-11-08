import React, { Component } from "react";

import {
  InputBlockWrapper,
  Label,
  Input,
  InputBlockStyled,
  InputNames,
} from "./Styles/Styles";
import Button from "./AddButton/Button";
class InputBlock extends Component {
  static propTypes = {};
  state = {
    name: "",
    number: "",
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <InputBlockWrapper>
        <InputBlockStyled onSubmit={this.handleSubmit}>
          <Label>
            <InputNames>Name</InputNames>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            <InputNames>Number</InputNames>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </InputBlockStyled>
      </InputBlockWrapper>
    );
  }
}

export default InputBlock;
