import { useState } from "react"
import Useeffect from "./UseEffect";

export default function Moveout(){
    const [postition,setposition] = useState({x:0,y:0});

    Useeffect(()=>{
        function handlemove(e){
            setposition({x: e.clientX,y: e.clientY});
        }

        window.addEventListener('pointermove',handlemove);
        return ()=>{
            window.removeEventListener('pointermove',handlemove);
        };
    },[])
    return(
        
        <div style={{
            position: 'absolute',
            backgroundColor:'red',
            borderRadius:'50%',
            opacity:'0.5',
            transform:`translate(${postition.x}px,${postition.y}px)`,
            pointerEvents:'none',
            left:'-20',
            top:'-20',
            width:'40',
            height:'40'
        }}/>

       
        
    )
}