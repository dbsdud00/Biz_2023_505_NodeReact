import { useState } from "react";

// 여기는 Todo Content 를 입력하고 추가를 실행하는 Component
/**
 *
 * @param {*} props
 * 부모 Comp로 부터 전달받은 모든 것을 담아오는 바구니
 * props를 통하여 전달받은 모든 것은 Read Only 이다.
 * props 를 통하여 전달받은 state도 여기에서 절대 변경할 수 없다
 * props 를 통하여 전달받은 state를 변경하려면
 *    state를 변경할 함수도 같이 전달받아야 한다.
 * @returns
 */
const TodoInput = (props) => {
  // 와면에 데이터를 Rendering 할 때 사용할 State(변수) tjsdjs
  // const [content, setContent] = useState("");
  const { content, setContent, todoListAdd } = props;
  // const content1 = props.content;
  // const setContent1 = props.setContent1;
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };
  const btnClickHandler = (e) => {
    todoListAdd(content);
    setContent("");
  };

  return (
    <div className="input">
      <input placeholder="TODO" value={content} onChange={inputChangeHandler} />
      {/**
       * JSX 주석
       * 본문의 tag 내에서 사용하는 주석문
       *
       * button disabled 속성
       * html 에서는 disabled="disabled" 라고 속성을 지정하면
       * button tag 에 click 속성이 사라지는 효과를 낼 수 있다.
       * button:disabled style 을 지정해주면
       * button disabled 가 설정되었을 때 모양을 만들 수 있다.
       *
       * react 에서는 disabled={true} 라는 속성으로 사용한다.
       */}
      <button disabled={content.length < 2} onClick={btnClickHandler}>
        저장
      </button>
    </div>
  );
};
export default TodoInput;
