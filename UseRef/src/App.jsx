import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";
import Catfriends from "./assets/Catfriends";

function App() {
  const [count, setCount] = useState(0);
  // const a = 1; it will not works

  const a = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // alert("count changed.")
    //this will not work cause useEffect re renders whole page
    // console.log(a + 1);
    a.current = a.current + 1;
    console.log("h1 is chnaged :", a.current);
  });
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        <Catfriends/><br/>
        <input style={{
          height:38,
          borderRadius:4,
          border:7
        
          }} ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>this is useRef of a : {a.current}</h1>
      </div>
    </>
  );
}

export default App;
