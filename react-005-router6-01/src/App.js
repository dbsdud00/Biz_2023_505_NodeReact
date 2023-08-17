import logo from "./logo.svg";
import BBsMain from "./comps/BBsMain";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import { Button } from "./styled/BBsStyled";
import "./css/App.css";

function App() {
  // useNavigate hooks 함수를 사용하여 navigate 객체 생성
  /**
   * react-router-dom 의 useNavigate() hooks 함수
   * 보통 react-router-dom 에서 다른 페이지를 열고자 할 때 NavLink 를 사용하여
   * a tag 를 생성하고 페이지 전환을 한다.
   *
   * 하지만 button 등 tag 를 사용할 때는 onClick event 를 캡쳐하여 페이지를
   * 전환해야 하는데 이때는 NavLink 를 사용하기가 다소 불편해 진다.
   * 이럴때 useNavigate() hooks 함수를 통하여 객체를 생성하고
   * 생성한 객체에 URL(requestPath) 를 설정하면
   * JS document.location.href = URL 과 같은 코드를 사용하는 것과 같다
   *
   * v5 에서는 useHistory, Link, useRedirect 등 여러가지 함수와 객체들이 있었는데
   * v6 에서는 대부분이 useNavigate() Hooks 를 통하여 생성된 객체로 통합되었다.
   *
   * 특히 useRedirect 의 경우 별도로 Navigate component 를 통하여 실행할 수도 있다.
   */
  const navigate = useNavigate();
  const AppBody = () => {
    return (
      <div className="App">
        <header className="App-header" onClick={() => navigate("/")}>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Outlet />
      </div>
    );
  };
  const appRouter = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AppBody />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <Button
              bgColor="#777"
              color="#ddd"
              onClick={() => navigate("/bbs")}
            >
              게시판 열기
            </Button>
          ),
        },
        { path: "bbs/*", element: <BBsMain /> },
      ],
    },
  ]);
  return appRouter;
}

export default App;
