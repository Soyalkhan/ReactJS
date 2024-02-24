import { useEffect, useState } from "react"

export default function Useeffect(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            //every time it will render and add + 1 count 
            // setCount((count) => count + 1)
        },1000)
    });

    return <h1>I have rendered {count} times!</h1>;
}