import {
  useRoutes,
  Outlet,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import BBsList from "./BBsList";
import BBsItem from "./BBsItem";
import BBsInput from "./BBsInput";
import { useState, useEffect } from "react";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";
import moment from "moment";
import uuid from "react-uuid";
import localforage from "localforage";

const BBsBody = () => {
  return (
    <>
      <h2>자유게시판</h2>
      <Outlet />
    </>
  );
};

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState("");
  const [bbsList, setBbsList] = useState([]);
  const navigate = useNavigate();
  // 화면이 최초 rendering 된 후(Mount 된 후)에 한번만 실행하라
  useEffect(() => {
    const getForage = async () => {
      setBbsList(await localforage.getItem("BBS"));
    };
    getForage();
  }, []);
  // bbsList 가 변경되는 event 가 발생하면 ()=>{} 함수를 실행하라
  useEffect(() => {
    const setForage = async () => {
      await localforage.setItem("BBS", bbsList);
    };
    setForage();
  }, [bbsList]);

  const bbsUpdate = (bId) => {
    const newBbsList = bbsList.map((bbs) => {
      if (bbs.id === bbsDto.id) {
        const updateBbs = {
          ...bbs,
          bContent: bbsDto.bContent,
          bSubject: bbsDto.bSubject,
        };
        return updateBbs;
      }
      return bbs;
    });
    setBbsList([...newBbsList]);
  };
  const bbsInput = () => {
    // 저장 button 을 클릭하면 데이터를 어딘가에 저장하기
    let newBbsDto = { ...bbsData };
    if (!bbsDto.id) {
      newBbsDto = {
        ...bbsDto,
        id: uuid(),
        bDate: moment().format("YYYY[-]MM[-]DD"),
      };
    } else {
      return bbsUpdate();
    }
    setBbsList([...bbsList, newBbsDto]);
    navigate("/bbs");
  };
  /**
   * 가. BBsList.jsx 에서 bbsList 데이터를 props 로 받아 만들던 BBsItem 컴포넌트를 BBsMain.jsx 에서 만들고 있다.
   */
  const bbsListItemView = bbsList?.map((item, index) => {
    return <BBsItem item={item} key={item.id} seq={index} />;
  });
  const bbsRouter = useRoutes([
    {
      // rootPath : /bbs 로 요청
      path: "/",
      element: <BBsBody />,
      children: [
        {
          // path 에 "" 이 연결된 경우
          // rootPath 와 함께 제일 먼저 보여질 Component
          path: "",
          element: (
            <>
              {/** 나. BBsMain 영역에서 생성된 bbsListItemView 를
               *      BBsList 컴포넌트 사이에 주입하였다.
               *      별도의 변수로 설정하지 않았다.
               *  다. 컴포넌트 사이에 주입된 다른 {bbsListItemView} 컴포넌트는
               *      BBsList 에서 {children} 이라는 정해진 props 변수로 받는다.
               */}
              <BBsList>{bbsListItemView}</BBsList>
              <NavLink to="/bbs/writer">글쓰기</NavLink>
            </>
          ),
        },
        {
          // path 에 "" 이 연결된 경우
          // rootPath 와 함께 제일 먼저 보여질 Component
          path: "writer",
          element: (
            <BBsInput
              bbsDto={bbsDto}
              setBbsDto={setBbsDto}
              bbsInput={bbsInput}
            />
          ),
        },
        {
          // Navigate Component
          // 무조건 redirect 하기 위한 컴포넌트
          // to 에 지정한 URL path 로 무조건 화면전환한다.
          path: "home",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
  return bbsRouter;
};
export default BBsMain;
