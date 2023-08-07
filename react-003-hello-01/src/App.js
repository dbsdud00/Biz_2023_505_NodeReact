import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const inputChangeHandler = (e, setNum) => {
    const value = e.target.value;
    setNum(value);
  };

  const [max, min] = Number(num1) > Number(num2) ? [num1, num2] : [num2, num1];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <input
        placeholder="숫자1"
        value={num1}
        onChange={(e) => inputChangeHandler(e, setNum1)}
      />
      <input
        placeholder="숫자2"
        value={num2}
        onChange={(e) => inputChangeHandler(e, setNum2)}
      />
      <div>
        <div>
          덧셈 :{" "}
          <span>
            {num1} + {num2}
          </span>
          = <span>{Number(num1) + Number(num2)}</span>
        </div>
        <div>
          뺄셈 :
          <span>
            {max} + {min}
          </span>
          = <span>{Number(max) - Number(min)}</span>
        </div>
        <div>
          곱셈 :{" "}
          <span>
            {num1} X {num2}
          </span>
          = <span>{Number(num1) * Number(num2)}</span>
        </div>
        <div>
          나눗셈 :{" "}
          <span>
            {max} / {min}
          </span>
          = <span>{Number(max) / Number(min)}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
