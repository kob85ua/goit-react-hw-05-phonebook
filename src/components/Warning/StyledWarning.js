import styled from "styled-components";

const StyledWarning = styled.div`
  position: absolute;
  left: 50%;
  top: 35px;
  padding: 0;
  border-radius: 3px;
  background-color: #ff2400;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
  text-decoration: none;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 220px;
  height: 50px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;
export default StyledWarning;
