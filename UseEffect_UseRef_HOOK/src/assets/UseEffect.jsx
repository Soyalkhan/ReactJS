import { useEffect, useState } from "react"

export default function Useeffect(){
    const [count,setCount] = useState(5);
    const [button,setButton] = useState(false)

 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            //every sec it will render and  - 1 count 
            if(count > 0){
                setCount( count - 1)
            }
           
        },1000)
        // Clear timeout when component unmounts or when count reaches 0
        return () =>{
            clearTimeout(timer);
        };
    },  
    [count]); // add count dependecy

    useEffect(()=>{
        if(count===0){
            setButton(true)
        }
    },[count])

    return (
        <>
        {/* <p>Your download will stat in </p> */}
        <h1 >Your download will stat in <span style={{color:"red"}}>{count}</span> Seconds!</h1>
        <button hidden={!button} style={{
            backgroundColor:"green",
            color:"white",
            padding:"8px",
            cursor:"pointer",
            border:"none"
            }}
            
            >
                Download Now
                </button>
        </>
    );
}