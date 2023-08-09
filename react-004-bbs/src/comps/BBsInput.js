import { useState, useRef } from "react";
import { BBsDto } from "../data/BBsDto";

const BBsInput = () => {
  const [bbs, setBbs] = useState(BBsDto);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const imageRef = useRef(null);
  const imagesRef = useRef(null);

  const thumbImages = images.map((image) => {
    return <img src={image} width="50px" />;
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };
  /** type 이 file 인 input 에서 파일이 선택되었을 때 발생하는 event */
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      setImage(fe.target.result);
    };
    fileReader.readAsDataURL(file);

    console.log(file.name);
  };

  /**
   *  JS 에서는 진짜 배열과 유사배열이 있다.
   * 진짜 배열은 순수하게 데이터만 가지고 있는 배열
   * const arr = [1,2,3,4,5,6,7]
   * const images = [ // 순수한 배열이 아니라 속성들이 많이 껴있음
   *  document.createElement("img"),
   *  document.createElement("img"),
   *  document.createElement("img"),
   *  document.createElement("img")
   * ]
   * img tag 들을 요소로 갖는 배열 : 유사배열
   * const images = document.querySelectAll("img")
   * console.log(images[0].src)
   *
   * //고전적인 for 반복문은 정상적으로 작동한다.
   * for (let i = 0; i< images.length ; i++) {
   *  console.log(images[0].src)
   * }
   *
   * 새로운 forEach(map,filter 등등이 포함) 는 사용 불가
   * images.forEach(image=.{})
   *
   * 만약 유사배열을 새로운 forEach() 로 사용하기 위해서는
   * 진짜배열로 변환해 주어야 한다.
   * const 진짜배열 = Array.from(유사배열) : 유사배열을 진짜 배열로 변환
   *
   */
  // 멀티파일을 선택했을 때 thumbnail 보여주기
  const filesChangeHandler = (e) => {
    const files = e.target.files;
    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onload = (fe) => {
        // setImages() 가 files 의 개수만큼 실행되는 구조
        // 만약에 files 개수가 10개 이면 setImages() 함수가 10 번 실행되고
        // 화면이 10번 reRendering 될 것이다.
        // 현재 버전의 React 에서는 여러번의 setState() 함수가 반복 실행되면
        // 이들을 모아서 한번에 Betch 처리를 해버린다.
        // 그래서 setState() 에 데이터를 직접 주입하지 않고
        // Callback 함수 방식으로 주입한다.
        setImages((images) => [...images, fe.target.result]);
        console.log(setImages);
      };
      fileReader.readAsDataURL(file);
    });

    console.log(images);
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
          ref={imageRef}
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
          ref={imagesRef}
        />
        <div className="thumb gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
