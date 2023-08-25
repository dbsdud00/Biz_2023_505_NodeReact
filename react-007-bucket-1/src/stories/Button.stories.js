import styled from "styled-components";
import Button from "../shareComps/Button";

const Container = styled.div`
  width: 200px;
`;

export default {
  title: "커스텀버튼",
  component: [Button],
};

export const 기본버튼 = () => (
  <Container>
    <Button>기본버튼</Button>
  </Container>
);
export const 빨간버튼 = () => (
  <Container>
    <Button bgColor="red">빨간버튼</Button>
  </Container>
);
export const 노란버튼 = () => (
  <Container>
    <Button bgColor="yellow" color="black">
      노란버튼
    </Button>
  </Container>
);
