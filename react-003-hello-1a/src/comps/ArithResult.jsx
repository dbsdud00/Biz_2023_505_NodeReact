const ArithResult = ({ nums }) => {
  const { num1, num2 } = nums;

  /**
   *  const intNum1 = Number(num1)
   *  const intNum2 = Number(num2)
   */
  const [intNum1, intNum2] = [Number(num1), Number(num2)];
  // let minNum = 0;
  // let maxNum = 0;
  // if (intNum1 > intNum2) {
  //   maxNum = intNum1;
  //   minNum = intNum2;
  // } else {
  //   maxNum = intNum2;
  //   minNum = intNum1;
  // }
  const [maxNum, minNum] =
    intNum1 > intNum2 ? [intNum1, intNum2] : [intNum2, intNum1];

  // 위쪽은 Rendering 이 시작되기 전에 실행되는 코드
  // nums State 가 변화되면 ArithResult 함수가 실행되고
  // return 함수를 만나기 전에 코드들은 실행하여 변수를 다시 만들고
  // 만들어진 변수값을 화면으로 Rendering 한다.

  // Rendering 이 시작되는 부분
  return (
    <div>
      <div>
        <strong>
          덧셈 ({maxNum} + {minNum} : {""}
        </strong>
        <span>{maxNum + minNum})</span>
      </div>
      <div>
        <strong>
          뺄셈 ({maxNum} &minus; {minNum} : {""}
        </strong>
        <span>{maxNum - minNum})</span>
      </div>
      <div>
        <strong>
          곱셈({maxNum} &times; {minNum} : {""}
        </strong>
        <span>{maxNum * minNum})</span>
      </div>
      <div>
        <strong>
          나눗셈({maxNum} &divide; {minNum} : {""}
        </strong>
        <span>{maxNum / minNum})</span>
      </div>
    </div>
  );
};
export default ArithResult;
