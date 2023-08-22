import uuid from "react-uuid";
const sampleBucketList = ["개발자되기", "리액트 정복", "스프링 정복"];
/**
 * bucket 을 key 로 하고 sampleBucketList 를 데이터로 담아서
 * JSON type 데이터 return
 */
export const bucketLoader = () => {
  return { bucketDataList: sampleBucketList };
};
/**
 * uuid 데이터 추가
 */
export const bucketAction = () => {
  console.log("action");
  return sampleBucketList.push(uuid());
};
