import Input from "../shareComps/input";
import Button from "../shareComps/Button";
import style from "./BucketInput.module.css";
import { Form } from "react-router-dom";

const BucketInput = () => {
  return (
    <div className={style.input_box}>
      <div>
        <Input />
      </div>
      <Form method="get" action="content/new">
        <Button>새로작성</Button>
      </Form>
    </div>
  );
};
export default BucketInput;
