/**
 * JSON 객체(JavaScript Object Notation)
 * {key:value} 쌍으로 구성된 데이터 type
 */
const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-1111-1111",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchKey = "이름";
console.log(obj[searchKey]);

/** JSON 배열 */
const address = [
  { 이름: "홍길동", 나이: 11, 전화: "11" },
  { 이름: "이몽룡", 나이: 21, 전화: "22" },
  { 이름: "성춘향", 나이: 31, 전화: "33" },
];
console.log(address[0].전화);
console.log(address[1].이름);
console.log(address[2].나이);

address.forEach((item) => {
  console.log(item.이름, " : ", item.나이, " : ", item.전화);
});
