import Button from "../shareComps/Button";
import { useLoaderData } from "react-router-dom";
import { getBucket } from "../modules/bucketFetch";
import styled from "styled-components";
export const updateLoader = ({ params }) => {
  return getBucket(params.id);
};
const UpdateForm = styled.form``;
const InputDivBox = styled.div``;
const BucketUpdate = () => {
  const bucket = useLoaderData();
  return (
    <form>
      <div>
        <label htmlFor="">작성일자</label>
        <input type="text" value={bucket.sdate} />
      </div>
      <div>
        <label htmlFor="">작성시각</label>
        <input type="text" value={bucket.stime} />
      </div>
      <div>
        <label htmlFor="">하고싶은일</label>
        <input type="text" value={bucket.bucket} />
      </div>
      <div>
        <Button>저장</Button>
      </div>
    </form>
  );
};
export default BucketUpdate;
