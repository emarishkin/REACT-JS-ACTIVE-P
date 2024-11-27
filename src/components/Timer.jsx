import { useEffect,useState } from "react";
import { ButtonTimer } from "./ButtonTimer";

export function Timer(){

let [second,setSecond]=useState(60)

useEffect(()=>{
 setInterval(()=>{
   setSecond((count)=>count-1)
   
 },1000)
},[])

function clickButtonTimer(){
    return console.log(1)
}


    return (
        <div>
        <div className="timer">
            минута молчания:{second}
        </div>
        <div>
        <ButtonTimer onClick={clickButtonTimer}>обратный отсчет:</ButtonTimer>
        </div>
        </div>
    )

}