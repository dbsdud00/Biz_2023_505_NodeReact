const filePreview = (file) => {
  /**
   * 먼저 동기방식으로 작동되기를 바라는 코드를 Promise() 클래스의
   * 생성자에 callback  함수내에 작성한다
   * callback 함수에는 resolve() 라는 매개변수 함수를 설정한다
   * 그리고 가장 마지막에 실행되어 결과를 return 하고자 하는 코드를
   * resolve() 함수로 감싼다 이때 return 명령은 사용하지 않는다
   * resolve() 함수는 가장 마지막에 실행될 코드를 실행하고
   * 그 결과를 return 한다
   */
  return new Promise((resolve) => {
    //1
    const fileReader = new FileReader();
    //3
    fileReader.onload = (fe) => {
      // 4
      resolve(fe.target.result);
    };
    //2
    fileReader.readAsDataURL(file);
  });
  //   return null;
};
export default filePreview;
