import BucketDate from "./BucketDate";
import BucketInput from "./BucketInput";
import "../css/BucketMain.css";
import BucketListBox from "./BucketListBox";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { BucketDto } from "../data/bucketDto";
import uuid from "react-uuid";
import moment from "moment";

const BucketMain = () => {
  const [bucket, setBucket] = useState("");
  const [bucketList, setBucketList] = useState([]);
  const [image, setImage] = useState("");
  const imgRef = useRef(null);

  const bucketUpdate = () => {
    const newBKList = bucketList.map((bK) => {
      if (bK.id === bucket.id) {
        const updateBKs = {
          ...bK,
          bContent: bucket.bContent,
          bSubject: bucket.bSubject,
          bImage: bucket.bImage,
        };
        return updateBKs;
      }
      return bK;
    });
    setBucketList([...newBKList]);
  };
  const bucketInput = () => {
    let newBKDto = { ...BucketDto };
    if (!bucket.id) {
      console.log("id 없음");
      newBKDto = {
        ...bucket,
        id: uuid(),
        bDate: moment().format("YYYY[-]MM[-]DD"),
        bTime: moment().format("HH[-]mm[-]ss"),
      };
      setBucket({ ...newBKDto });
      setBucketList([...bucketList, newBKDto]);
    } else {
      console.log("id 있음");
      bucketUpdate();
    }

    console.log(bucket);
    console.log(bucketList);
  };
  const resetBucket = () => {
    setBucket({ ...BucketDto });
    setImage("");
  };
  const focusBucket = (e, item) => {
    console.log(item);
    setBucket({ ...item });
  };
  const bucketListItemView = bucketList?.map((item, index) => {
    return (
      <div
        className="BucketListBox"
        onClick={(e) => {
          focusBucket(e, item);
        }}
      >
        <img
          src={
            item.bImage
              ? item.bImage
              : "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
          }
          alt="없음"
        />
        <div>{item.bSubject}</div>
      </div>
    );
  });
  return (
    <>
      <h1>오늘이 가장 어리다</h1>
      <div className="main">
        <div>
          <BucketDate resetBucket={resetBucket} />
          <BucketListBox>{bucketListItemView}</BucketListBox>
        </div>
        <div>
          <BucketInput
            bucket={bucket}
            setBucket={setBucket}
            bucketInput={bucketInput}
            image={image}
            setImage={setImage}
            imgRef={imgRef}
          />
        </div>
      </div>
    </>
  );
};
export default BucketMain;
