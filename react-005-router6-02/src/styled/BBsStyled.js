import styled from "styled-components";
export const Table = styled.table`
  width: 80%;
  margin: 0px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  & > .list-tr {
    border-bottom: 1px solid #ddd;
  }
  & > .list-th {
    padding: 5px;
    background-color: #aaa;
  }
`;
export const Form = styled.form`
  width: 80%;
  margin: 0px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 10px;
`;
/**
 * ${({color})=>(color ? color:"red")} 에서
 * {color} : 부모로부터 받은 props.color 를 전개한 변수
 *
 * ${({bgColor})=>(bgColor ? color:"red")} 에서
 * {bgColor}: 부모로부터 받은 props.bgColor 를 전개한 변수
 */

export const InputDiv = styled.div`
  width: 90%;
  display: flex;
  & label,
  input {
    margin: 5px;
    padding: 8px;
  }
  & label {
    flex: 1;
    text-align: right;
    color: blue;
  }
  & input {
    flex: 3;
    border-radius: 5px;
  }
  & textarea {
    flex: 3;
  }
`;
