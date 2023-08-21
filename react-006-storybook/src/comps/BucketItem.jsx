import { NavLink } from "react-router-dom";
import styled from "styled-components";
const ItemContainer = styled.li`
  text-decoration: none;
  text-align: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  background-color: #eee;
`;
const BucketItem = ({ children }) => {
  /**
   * path:"content/:id" , element:<BucketContent/>
   *
   * 만약 content/우리나라 라는 요청이 오면
   * content/*의  path 를 찾고, 우리나라 라는 문자열을 id 변수에 저장하여
   * BucketContent component 에게 전달하라
   *
   */
  return (
    <ItemContainer>
      <NavLink to={`content/${children}`}>{children}</NavLink>
    </ItemContainer>
  );
};
export default BucketItem;
