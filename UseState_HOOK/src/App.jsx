import { useState } from 'react'
import './App.css'


function App() {

  let student = {
    Name: "soyal",
    Age: 27,
    Phone: "7535964612"
  }

  const [Number,setNumber] = useState(0);
  const [Name,setName] = useState("User Name")

  const Increment = ()=>{
    if(Number < 15){
      setNumber(Number + 1);
    }
  }
  
  const Decrement = () =>{
    if(Number > 0){
      setNumber(Number - 1);
    }
  }
  return (
    <>
    <p>Note by useState it will populate the output to every variable as defined</p>
   <h1>This is the initial number : {Number} </h1>
   <h1>This is the initial number : {Number} </h1>
        
        <button onClick={Increment}>Inrement</button><button onClick={Decrement}>Decrement</button>
    
       <p>Student Name is : {student.Name}</p> 
       <p>Student age : {student.Age}</p>
       <p>Student Phone : {student.Phone}</p>
    </>
  )
}

export default App
