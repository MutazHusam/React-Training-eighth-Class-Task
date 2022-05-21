import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 15%;
  height: 42px;
  padding: 15px 20px;
  box-sizing: border-box;
  font-size: 22px;
  background: ${(props) =>props.isWhite? "white": "#2b6777"};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isWhite ? "#2b6777" : "white")};
  border: none;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
`;
