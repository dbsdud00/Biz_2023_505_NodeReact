const useState = (num) => {
  const setNum = (num1) => {
    num = num1;
  };
  return [num, setNum];
};
const [num, setNum] = useState(0);
const nations = ["대한민국", "우리나라"];
console.log(nations);
const [n1, n2] = nations;
const nation1 = nations[0];
const nation2 = nations[1];
console.log("n1", n1);
console.log("n2", n2);
// console.log(대한민국);

/** ... : 전개연산자 */
const nations2 = [...nations, "Korea"];
console.log("2", nations2);

// nation 배열을 nations3에 복사하라
const nations3 = nations;
console.log("3", nations3);
nations[0] = "Republic";
console.log("3", nations);

const nations4 = [...nations];
nations4[0] = "Republic of Korea";
console.log("1", nations4);

const nations5 = [];
for (let nation of nations) {
  nations5.push(nation);
}
