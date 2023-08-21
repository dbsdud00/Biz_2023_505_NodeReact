import Button from "../../shareComps/Button";
export default {
  title: "나의 버튼",
  component: [Button],
};
export const SampleBtn = () => <Button>children</Button>;
export const SampleBtn2 = () => <Button>hey</Button>;
export const SampleBtn3 = () => <Button bgColor="red">click me</Button>;
export const SampleBtn4 = () => (
  <Button bgColor="green" color="yellow">
    click me
  </Button>
);
