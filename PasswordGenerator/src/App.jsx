import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-black p-5">
        <h1 className="text-4xl text-center text-white" >Password Generator</h1>
        
      </div>
    </>
  );
}

export default App;
