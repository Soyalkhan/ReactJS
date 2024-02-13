import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(1);
  const increment = () => {
    if (counter < 15) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Inrement or Drement Conuter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increment}>+ {counter}</button>
      &nbsp;
      <button onClick={decrement}>- {counter}</button>
      <p>-------------------------------------</p>
      <p>This is val 1 : {counter}</p>
      <p>This is val 2 : {counter}</p>
    </>
  );
}

export default App;
