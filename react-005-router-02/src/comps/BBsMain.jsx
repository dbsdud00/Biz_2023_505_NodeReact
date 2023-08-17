import { useRoutes, Outlet, NavLink, Navigate } from "react-router-dom";
import BBsList from "./BBsList";
import BBsItem from "./BBsItem";
import BBsInput from "./BBsInput";
import { useState, useEffect } from "react";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";
const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbsListData);
  const bbsListItemView = bbsList?.map((item) => {
    return <BBsItem item={item} key={item.id} />;
  });
  const BBsBody = () => {
    return (
      <>
        <h2>자유게시판.</h2>
        <Outlet />
      </>
    );
  };
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
              <BBsList>{bbsListItemView}</BBsList>
              <NavLink to="/bbs/writer">글쓰기</NavLink>,
            </>
          ),
        },
        {
          // path 에 "" 이 연결된 경우
          // rootPath 와 함께 제일 먼저 보여질 Component
          path: "writer",
          element: <BBsInput />,
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
