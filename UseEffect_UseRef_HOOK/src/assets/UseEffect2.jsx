import { useEffect, useState } from "react"




export default function App2Counter(){

    const [Count,setCount] = useState(0)

    function increment(){
        //max value is 10
        if(Count<10)  {
            setCount(Count + 1)
        }
        
    
    }
    function decrement(){
        // min value is 0
        if(Count>0){
            setCount(Count - 1)
        }
   
    }
   // Note it it will show 2 times cause of strict mode!    
    useEffect(()=>{
        console.log();
        alert("Number changed!!")
        // dependency on count when it will change it will occur
    },[Count]);


return(
    <>
    <p>Everyrender effect will react!</p>
    <h1>Number : {Count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
)
}