// 지금부터 여기는 DOM HTML JS 영역이다.
document.addEventListener("DOMContentLoaded", () => {});

// 지금부터 여기는 JQuery Script 영역이다.
$(document).ready(function () {});
$(function () {});
// 권장
$(() => {
  $("div.home").html("반갑습니다.");
  $("div.bbs").css("color", "blue");

  /** document.querySelectorALl() */
  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText; //e.target.innerText
    alert(text);
  });
});
