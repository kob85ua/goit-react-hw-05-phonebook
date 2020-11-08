import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

import ContactList from "./components/ContactList";
import InputBlock from "./components/InputBlock";
import SearchForm from "./components/SearchForm";
import WarningItem from "./components/Warning/Warning";
import { AppWrapper, Header } from "./components/Styles/Styles";
import "./components/Styles/transitionR.css";
import "./components/Styles/warningFade.css";
class App extends Component {
  static defaultProps = {};

  static propTypes = {};
  
  state = {
    contacts: [],
    filter: "",
    isExists: false,
    notFilled: false,
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  findContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  addContact = (contactName, contactNumber) => {
    const existContact = this.state.contacts.find(
      ({ name }) => name === contactName
    );
    if (contactName === "" || contactNumber === "") {
      this.setState({ notFilled: true });
    } else if (existContact !== undefined) {
      this.setState({ isExists: true });
    } else {
      const contact = {
        name: contactName,
        number: contactNumber,
        id: uuidv4(),
      };
      this.setState((prevState) => {
        return {
          contacts: [contact, ...prevState.contacts],
        };
      });
    }
    setTimeout(
      () => this.setState({ isExists: false, notFilled: false }),
      4000
    );
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts, isExists, notFilled } = this.state;
    const visibleContacts = this.findContacts();
    

    return (
      <AppWrapper>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="fadeHeader"
          unmountOnExit
        >
          <Header>Phonebook</Header>
        </CSSTransition>

        <CSSTransition
          in={isExists || notFilled}
          // appear={true}
          timeout={250}
          classNames="warning-item-fade"
          unmountOnExit
        >
          <WarningItem
            condition={isExists}
            nextCondition={notFilled}
          ></WarningItem>
        </CSSTransition>

        <InputBlock onAddContact={this.addContact}></InputBlock>

        <SearchForm
          value={filter}
          onFindContacts={this.changeFilter}
        ></SearchForm>
        {contacts.length > 0 && (
          <ContactList
            phoneContacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        )}
      </AppWrapper>
    );
  }
}

export default App;
