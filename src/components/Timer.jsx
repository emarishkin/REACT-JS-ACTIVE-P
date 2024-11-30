import { useEffect,useState } from "react";


export function Timer(){

let [second,setSecond]=useState(5)


useEffect(()=>{
 setInterval(()=>{
 setSecond((second)=>second!=0?second-1:alert('спасибо'))
   
 },1000)
},[])




    return (
        
        <div className="timer">
            минута молчания:{second}
        </div>
        
    )

}