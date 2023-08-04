// 1개의 Todo Data 를 생성하기 위한 함수
// java Dto 클래스 선언

// initData.js 에서 export 한 함수들 중에서
// initData() 함수만 필요하니 구조분해를 통하여 import
// initData.initData()
import moment from "moment";

// initData 함수를 호출하면 새로운 TodoData 생성하여 return 한다.
const initData = () => {
  return {
    id: null,
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:ss:mm"),
    content: "",
    complete: false,
  };
};
const func1 = () => {};
const func2 = () => {};
const func3 = () => {};
export { initData, func1, func2, func3 };
