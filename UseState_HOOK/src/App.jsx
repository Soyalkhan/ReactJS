import { useEffect, useRef, useState } from 'react'
import './App.css'


export default function App() {

  let student = {
    Name: "soyal",
    Age: 27,
    Phone: "7535964612"
  }

  const [Number,setNumber] = useState(0);
  const [Name,setName] = useState("Username")
  const [Age,setAge] = useState("Age")
  const [Phone,setPhone] = useState("Phone")


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

  const [showName,setShowName] = useState("Rohan.");

  const handlereset = () =>{
    setShowName("Kuch bhi rakh de :)")
  }

function VideoPlayer({src , isPlaying}){
  const ref = useRef(null);

  useEffect(()=>{
    if(isPlaying){
      ref.current.play();
    }else{
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline/>;
}
  const [isPlaying,setIsPlaying] = useState(false);

  return (
    <>
    <p>Note by useState it will populate the output to every variable as defined</p>
   <h1>This is the initial number : {Number} </h1>
   <h1>This is the initial number : {Number} </h1>
        
        <button onClick={Increment}>Inrement</button><button onClick={Decrement}>Decrement</button>
    
       <p>Student Name is : {Name}</p> 
       <p>Student Age : {Age}</p>
       <p>Student Phone : {Phone}</p>

       <button
       onClick={()=>{
        setName(student.Name)
        setAge(student.Age)
        setPhone(student.Phone)
       }}
       >Fetch details..</button>

<br/>
<br/> 
       <input
        type="text" 
        placeholder='enter your name ?'
        value={showName}
        onChange={e => setShowName(e.target.value)}
        />
       <p>Hello: {showName}</p>
       <button
       onClick={handlereset}
       >Reset</button>


       <p>-------------useEffect , useRef , useState---------- </p>

       <button
       onClick={()=> setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Paused' : 'Play'}
       </button>
       <videoPlayer 
       isPlaying="isPlaying"
       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
       />
      
    </>
  )
}


