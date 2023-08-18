import styled from "styled-components";
export const Button = styled.button`
  border: 0;
  outline: none;
  padding: 12px 16px;
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "blue")};
  margin: 12px;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 1px 1px #333;
    cursor: pointer;
  }
`;
