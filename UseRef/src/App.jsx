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
  const btnRef = useRef();
  const btnbgchange = useRef();
  const a = useRef(0);
  const inputRef = useRef(null);

  //stopwatch code start here
  const [startTime,setstartTime] = useState(null);
  const [now,setNow] = useState(null);
  const intervalRef = useRef(null);


  function handlestart(){
    setstartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(()=>{
      setNow(Date.now());
    },10);
  }
  function handlestop(){
    clearInterval(intervalRef.current);
  }
  
  let secPassed = 0;
  if(startTime != null && now != null){
    secPassed = (now - startTime) / 1000;
  }


  // useEffect(() => {
  //   // alert("count changed.")
  //   //this will not work cause useEffect re renders whole page
  //   // console.log(a + 1);
  //   a.current = a.current + 1;
  //   console.log("h1 is chnaged :", a.current);
  // });


  //another ref example
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        <Catfriends />
        <br />
        <input
          style={{
            height: 38,
            borderRadius: 4,
            border: 7,
          }}
          ref={inputRef}
        />
        <button onClick={handleClick}>Focus the input</button>
      </div>

      <div className="card">
        <button ref={btnbgchange} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>this is useRef of a : {a.current}</h1>

        <button
          onClick={() => {
            btnRef.current.style.display = "none";
            btnbgchange.current.style.backgroundColor ="red";
          }}
        >
          im btn 1
        </button>
        <button ref={btnRef}>i will hide</button>
        <hr/>

        <h1>Time Passed : {secPassed.toFixed(3)}</h1>
        <button onClick={handlestart}>
          start
        </button>
        <button onClick={handlestop}>
          stop
        </button>
      </div>
    </>
  );
}

export default App;
