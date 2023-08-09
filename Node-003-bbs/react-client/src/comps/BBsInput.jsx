import { useState, useRef } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreviews";
import { bbsInsert } from "../modules/FetchModules";

const BBsInput = () => {
  const [bbs, setBbs] = useState({
    b_nickname: "",
    b_title: "",
    b_title: "",
    b_content: "",
  });
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const imgRef = useRef(null);

  const setMainImage = (image) => {
    setImage(image);
  };
  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        alt=""
        onClick={(e) => {
          setMainImage(image);
        }}
      />
    );
  });

  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);
    setImage(imgSrc);
    // console.log(imgSrc);
  };
  const filesChangeHandler = async (e) => {
    const files = e.target.files;
    const imgSrcList = await Promise.all(filesPreview(files));
    // console.log(imgSrcList.length);
    // console.log(imgSrcList[0]);
    setImages(imgSrcList);
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };
  /**
   * fetch 를 통해서 서버로 데이터 , 이미지를 전송하기
   * 1. formData 만들기
   * 2. formData 에 각 데이터들 append
   * 3. fetch 보내기
   */
  const insertButtonClickHandler = async (e) => {
    // alert("hello");
    /** JS 에서 제공하는 Http 객체다 */
    let formData = new FormData();
    formData.append("bbs", bbs);
    // document.querySelctor("#b_img").files[0]
    formData.append("b_img", imgRef.current.files[0]);

    await bbsInsert(formData);
  };
  return (
    <section className="main">
      <div className="bbs input">
        <input
          name="b_nickname"
          placeholder="작성자"
          value={bbs.b_nickname}
          onChange={inputChangeHandler}
        />
        <input
          name="b_title"
          placeholder="제목"
          value={bbs.b_title}
          onChange={inputChangeHandler}
        />
        <input
          name="b_content"
          placeholder="내용"
          value={bbs.b_content}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="image main">
        <label htmlFor="main_image">대표이미지</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          /* React 에서 각 요소의 Key 역할을 하는 속성 */
          ref={imgRef}
        />
        <div className="thumb main">
          <img src={image ? image : ""} />
        </div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_image">갤러리</label>
        <input
          id="gallery_image"
          type="file"
          multiple="multiple"
          accept="image/*"
          onChange={filesChangeHandler}
        />
        <div className="thumb gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button onClick={insertButtonClickHandler}>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
