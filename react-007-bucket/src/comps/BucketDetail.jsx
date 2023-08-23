import { Form, useLoaderData, redirect } from "react-router-dom";
import dImage from "../assets/default.png";
import Button from "../shareComps/Button";
import css from "./BucketDetail.module.scss";
import { deleteBucket, getBucket, saveBucket } from "../modules/bucketFetch";

export const detailLoader = async ({ params }) => {
  // const id = params.id
  const { id } = params;
  const bucket = await getBucket(id);
  return { bucket };
};
export const deleteAction = async ({ params }) => {
  if (window.confirm("정말 삭제할까요?")) {
    // 삭제
    await deleteBucket(params.id);
    return redirect("/");
  }
  return redirect(`/content/${params.id}`);
};
export const completeAction = async ({ params }) => {
  const { id } = params;
  const result = await getBucket(id);
  const nowComp = !result.content;
  const newBucket = { ...result, content: nowComp };
  await saveBucket(newBucket);
  return redirect(`/content/${id}`);
};
const BucketDetail = () => {
  const { bucket } = useLoaderData();

  return (
    <article className={css.buck_detail}>
      <div className={css.first}>
        <img
          src={bucket?.img_src || dImage}
          alt={bucket?.bucket}
          width="100px"
        />
      </div>
      <div className={css.last}>
        <h1>{bucket.bucket || "None"}</h1>
        <div>
          <Form action="edit">
            <Button>수정</Button>
          </Form>
          <Form method="POST" action="complete">
            <Button bgColor="#7baa84">완료</Button>
          </Form>
          <Form method="POST" action="delete">
            <Button bgColor="#a90303">삭제</Button>
          </Form>
        </div>
      </div>
    </article>
  );
};
export default BucketDetail;
