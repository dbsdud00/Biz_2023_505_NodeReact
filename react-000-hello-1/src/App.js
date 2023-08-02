import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./comps/Input";

function App() {
  // int sum = sum(40,40)
  const [count, setCount] = useState(0);

  // let count = 0;
  const clickHandlerDecre = () => {
    // count = count - 1;
    setCount(count - 1);
  };
  const clickHandlerincre = () => {
    // count = count + 1;
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>

        <div onClick={clickHandlerincre}>카운터증가</div>
        <div onClick={clickHandlerDecre}>카운터감소</div>
        <Input />
      </header>
    </div>
  );
}

export default App;
