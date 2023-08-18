import { useRouter, Outlet, NavLink } from "react-router-dom";
import { InputDiv } from "../styled/BBsStyled";
import { Button } from "../styled/MyButton";

const BBsInput = ({ bbsDto, setBbsDto, bbsInput }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setBbsDto({ ...bbsDto, [name]: value });
  };
  const btnOnClickHandler = () => {
    bbsInput();
  };
  return (
    <>
      <InputDiv>
        <label htmlFor="">작성자</label>
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
      <Button type="button" onClick={btnOnClickHandler}>
        저장
      </Button>
    </>
  );
};
export default BBsInput;
