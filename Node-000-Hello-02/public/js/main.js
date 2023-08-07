/**
 *  현재 화면의 모든 html tag가 다 그려진 다음에 시작하라
 */
/** querySelector */
const $ = (x, parent = document) => {
  return parent.querySelector(x);
};
/**
 *  Element 는 html 로 구현하는 모든 tag 의 부모 tag
 *  Element.prototype : 기본적으로 JS, HTML 에서 제공하지 않는 함수를 추가할 때 사용하는 키워드
 *  Element.prototype.css = function() : Element tag 에 css 라는 이름으로 새로운 ㅎ마수를 하나 등록하겠다.
 *  prototype 으로 함수를 등록할 때는 function 키워드로 함수를 만든다.
 */
Element.prototype.css = function (key, value) {
  this.style[key] = value;
};
Element.prototype.html = function (value) {
  this.innerHTML = value;
};
document.addEventListener("DOMContentLoaded", () => {
  /** document.querySelector("div.bbs").backgroundColor = "blue" */
  $("div.home").style.backgroundColor = "blue";

  document.querySelector("div.bbs").backgroundColor = "red";
  document.querySelector("div.bbs").style["color"] = "red";
  document.querySelector("div.bbs").style.color = "red";
  $("div.bbs").css("color", "red");

  $("div.mypage").html("여기는 나의 페이지이다.");
  document.querySelector("div.mypage").innerHTML = "마이페이지";
});
