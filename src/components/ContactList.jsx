import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ListItem, ContactInfo } from "./Styles/Styles";
import CrossButton from "./CrossButton/CrossButton";
import "./Styles/listTransition.css";
const contactList = ({ phoneContacts, onDeleteContact }) => (
  <TransitionGroup comronent="ul" className="list">
    {phoneContacts.map((phoneContact) => (
      <CSSTransition
        key={phoneContact.id}
        timeout={250}
        classNames="list-item-fade"
      >
        <ListItem key={phoneContact.id}>
          <ContactInfo>{phoneContact.name}</ContactInfo>
          <ContactInfo>{phoneContact.number}</ContactInfo>
          <CrossButton
            onBtnClick={() => onDeleteContact(phoneContact.id)}
          ></CrossButton>
        </ListItem>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default contactList;
