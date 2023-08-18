import { useState, useRef } from "react";
import "../css/BucketInput.css";
import filePreview from "../modules/ImagePreview";

const BucketInput = ({
  bucket,
  setBucket,
  bucketInput,
  image,
  setImage,
  imgRef,
}) => {
  const fileChangeHandler = async (e) => {
    console.log("file Change");
    const imgSrc = await filePreview(e.target.files[0]);
    // console.log(imgSrc);
    setImage(imgSrc);
    setBucket({ ...bucket, bImage: imgSrc });
    bucketInput();
  };
  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setBucket({ ...bucket, [name]: value });
  };

  return (
    <div className="input">
      <div className="input_text">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          name="bSubject"
          value={bucket.bSubject}
          onChange={inputOnChange}
          onBlur={bucketInput}
        />
        <textarea
          name="bContent"
          id=""
          cols="30"
          rows="10"
          placeholder="내용을 입력하세요"
          value={bucket.bContent}
          onChange={inputOnChange}
          onBlur={bucketInput}
        />
      </div>
      <div className="input_image">
        <label htmlFor="main_image">이미지 선택</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          ref={imgRef}
        />
        <div>
          <img src={image ? image : ""} width="200px" />
        </div>
      </div>
    </div>
  );
};
export default BucketInput;
