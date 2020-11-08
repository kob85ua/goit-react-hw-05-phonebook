import styled from "styled-components";

const AppWrapper = styled.div`
  font-family: "Arial";
  font-size: 18px;
  width: 450px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  margin: auto;
  padding-inline-start: 0;
  /* border: 2px grey solid; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Header = styled.h2`
  margin-right: 50%;
  font-size: 30px;
  font-family: inherit;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  justify-self: left;
  color: #3f51b5;
`;
const InputBlockWrapper = styled.div`
  width: 90%;
`;
const InputBlockStyled = styled.form`
  width: 100%;
  display: flex;
  /* height: 120px; */
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;
const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 10px;
`;
const Input = styled.input`
  border: 1px grey solid;
  height: 35px;
  border-radius: 5px;
  width: 98%;
  /* & :focus {
    border: 2px #3f51b5 solid;
  } */
`;
const InputNames = styled.span`
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  color: #3f51b5;
`;
const Button = styled.button`
  width: 90px;
  align-self: center;
  height: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const List = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ListItem = styled.li`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const ContactInfo = styled.p`
  width: 42%;
  padding-left: 10px;
  font-size: 18px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
`;
export {
  AppWrapper,
  InputBlockWrapper,
  InputBlockStyled,
  Label,
  Input,
  Button,
  List,
  ListItem,
  ContactInfo,
  Header,
  InputNames,
};
