// 완전한 ES6 함수 코드
// 함수 본체에 한줄짜리 코드만 있을 경우 return 명령과 {} 를 생략할 수 있다.
// 함수 안에 JS 코드를 추가할 수 없다.
// const BucketMain = () => (
//   <>
//     <div></div>
//     <div></div>
//   </>
// );
import { useState } from "react";
import styled from "styled-components";
import { Outlet, useRoutes, Navigate } from "react-router-dom";
import BucketList from "./BucketList";
import BucketItem from "./BucketItem";
import BucketContent from "./BucketContent";
import BucketInput from "./BucketInput";

const ASideBar = styled.aside`
  width: 20rem;
  height: 100%;
  background-color: #f7f7f7;
  border-right: solid 2px #aaa;
  display: flex;
  flex-direction: column;
  & > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const mainAction = () => {
  return <Navigate to="content/3" />;
};
const BucketMain = () => {
  const [bucket, setBucket] = useState();
  const [bucketList, setBucketList] = useState([
    "개발자 되기",
    "리엑트 마스터",
    "스프링 마스터",
  ]);
  const BucketItemListView = bucketList.map((item) => {
    return <BucketItem>{item}</BucketItem>;
  });
  return (
    <>
      <ASideBar>
        <BucketInput />
        <BucketList>
          <ul>{BucketItemListView}</ul>
        </BucketList>
      </ASideBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

// const BucketMain = () => {
//   const routing = useRoutes([
//     {
//       path: "/",
//       element: <BucketMainBody />,
//       children: [{ path: "content/:id", element: <BucketContent /> }],
//     },
//   ]);
//   return routing;
// };

export default BucketMain;
