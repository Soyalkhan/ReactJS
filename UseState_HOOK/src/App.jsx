import { useState } from 'react'
import './App.css'

function App() {
  const [Number,setNumber] = useState(0)

  return (
    <>
    <h1>note by useState it will populate the output to every variable defined</h1>
   <h1>This is the initial number : {Number} </h1>
        
        <button onClick={()=> setNumber(Number+1)}>Update Number</button>
        <h1>This is the initial number : {Number} </h1>
        <h1>This is the initial number : {Number} </h1>
        <h1>This is the initial number : {Number} </h1>
        <h1>This is the initial number : {Number} </h1>
        <h1>This is the initial number : {Number} </h1>
        <h1>This is the initial number : {Number} </h1>
        <h1>This is the initial number : {Number} </h1>
    </>
  )
}

export default App
