import { useState } from "react"

function App() {
  const [color,setColor] = useState("Orange");

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white px-3 py-2 rounded-3xl gap-4">
          <button 
          onClick={() =>{setColor("Red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Red"}}
          >Red</button>
          <button 
          onClick={() =>{setColor("Green")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Green"}}
          >Green</button>
          <button 
          onClick={() =>{setColor("Blue")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Blue"}}
          >Blue</button>
          <button 
          onClick={() =>{setColor("Yellow")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Yellow"}}
          >Yellow</button>
          <button 
          onClick={() =>{setColor("Pink")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Pink"}}
          >Pink</button>
          <button 
          onClick={() =>{setColor("Olive")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Olive"}}
          >Olive</button>
          <button 
          onClick={() =>{setColor("Skyblue")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Skyblue"}}
          >Skyblue</button>
          <button 
          onClick={() =>{setColor("Black")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Black"}}
          >Black</button>
          <button 
          onClick={() =>{setColor("Brown")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Brown"}}
          >Brown</button>
          <button 
          onClick={() =>{setColor("Orange")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Orange"}}
          >Orange</button>
        </div>
      </div>
    </div>

  )
}

export default App
