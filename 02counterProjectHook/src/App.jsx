import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //let counter = 10;
  const addValue = () => {
    // console.log("value added", Math.floor(Math.random() * 10));
    //counter=counter+1
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Learning Hook</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>

      <br />

      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
