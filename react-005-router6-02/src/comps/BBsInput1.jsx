import { useRouter, Outlet, NavLink } from "react-router-dom";
import { Button, Form, InputDiv } from "../styled/BBsStyled";
const BBsInput = ({ bbsDto, setBbsDto }) => {
  let inputOnChange = (e) => {
    const { name, value } = e.target;
    setBbsDto({ ...bbsDto, [name]: value });
  };
  return (
    <Form>
      <InputDiv>
        <label>작성자</label>
        <input
          type="text"
          value={bbsDto.bWriter}
          name="bWriter"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label>제목</label>
        <input
          type="text"
          onChange={inputOnChange}
          value={bbsDto.bSubject}
          name="bSubject"
        />
      </InputDiv>
      <InputDiv>
        <label>내용</label>
        <textarea
          rows={10}
          value={bbsDto.bContent}
          name="bContent"
          onChange={inputOnChange}
        ></textarea>
      </InputDiv>
      <Button type="button">저장</Button>
    </Form>
  );
};
export default BBsInput;
