import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
function App() {
  const [count,setCount] = useState();
  let myObj ={
    name: "SOYAL",
    Age: 26
  }
  let arr = [1,2,3,4,5]
  let card = "Hello this is first description here for card 1"
  let card2 = "Hello this is second description here for card 2"
  return (
    <>
      <h1 className="bg-orange-500 text-red p-4  cursor-pointer mb-3">
        Hello Soyal!
      </h1>
      <Card username="Soyal"btnText="View Profile" des={card}/>
      <Card username="Raju" btnText="Navigate Profile" des={card2}/>
    </>
  );
}

export default App;
