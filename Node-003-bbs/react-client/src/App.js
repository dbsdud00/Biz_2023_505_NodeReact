import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import { hello } from "./modules/FetchModules";
import NavList from "./layout/NavList";
import { Outlet } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");

  // 화면이 mount 될 때 작동되도록 event 핸들러 등록
  // 두번째 파라메터를 빈(blank) 배열([])로 추가하변
  // Effect() 의해 실행할 함수는 화면이 rendering 된 후 한번만 실행된다.
  // useEffect(()=> {실행할 함수()},[])

  /**
   * hello() 함수는 await 를 부착하여 결과를 기다려야 하는 함수
   *  이 함수에 await 를 부착하기 위해서는 이 함수를 감싸는 함수에 async 를 부착해야 한다.
   * 하지만 useEffect() 첫번째 함수에는 async 를 부착할 수 없다.
   */
  // useEffect(() => {
  //   const fetchTitle = async () => {
  //     setTitle(await hello());
  //   };
  //   fetchTitle();
  // }, []);

  /** 즉시 실행함수로 만들기
   * 익명 함수의 호출방식
   * 생성된 함수를 바로 사용하기
   */
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);
  // hello();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "반갑습니다. React BBS Project 입니다."}</p>
      </header>
      <NavList />
      <div className="input">
        <input placeholder="입력하기" className="main_input"></input>
      </div>
      {/* Router 에서 children 으로 설정된 component 가 표시되는 위치 */}
      <Outlet />
    </div>
  );
}

export default App;
